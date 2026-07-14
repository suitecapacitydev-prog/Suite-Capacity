import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { WizardData, RevenueProjection } from '@/types/wizard';
import { MARKETS } from '@/data/markets';

const accentColor = rgb(59 / 255, 130 / 255, 246 / 255);
const darkColor = rgb(15 / 255, 23 / 255, 42 / 255);
const midGray = rgb(71 / 255, 85 / 255, 105 / 255);
const lightGray = rgb(241 / 255, 245 / 255, 249 / 255);
const warningRed = rgb(190 / 255, 18 / 255, 60 / 255);
const successGreen = rgb(16 / 255, 185 / 255, 129 / 255);

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function getPositioningContent(projection: RevenueProjection) {
  const intel = projection.intelligence;
  if (intel?.positioning) {
    return intel.positioning;
  }

  return {
    description:
      'No real-time intelligence data was available for this property. Analysis will be completed after final address verification.',
    marketPositioning: 'Analysis Pending',
    strengths: 'Pending real-world verification',
    limitations: 'Pending professional audit',
  };
}

function getSelectedMarket(data: WizardData) {
  return (
    MARKETS.find((m) => m.id === data.property.marketId) ||
    MARKETS.find((m) => data.property.address.toLowerCase().includes(m.name.toLowerCase()))
  );
}

function getSafeNumber(value: number | undefined, fallback = 0) {
  return typeof value === 'number' && !Number.isNaN(value) ? value : fallback;
}

export async function generateReportPdf(data: WizardData, projection: RevenueProjection) {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([612, 792]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 40;
  const pageWidth = 612;
  const width = pageWidth - margin * 2;
  let y = 740;

  const selectedMarket = getSelectedMarket(data);
  const pos = getPositioningContent(projection);
  const liftPct = Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100);
  const revenueLift = projection.optimizedRevenue - projection.currentRevenue;

  const getTextLines = (
    text: string,
    options: { font: any; size: number; maxWidth: number }
  ) => {
    const paragraphs = text.split('\n');
    const lines: string[] = [];

    for (const paragraph of paragraphs) {
      const words = paragraph.split(' ');
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const lineWidth = options.font.widthOfTextAtSize(testLine, options.size);

        if (lineWidth > options.maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine) {
        lines.push(currentLine);
      }

      if (paragraphs.length > 1) {
        lines.push('');
      }
    }

    return lines.filter((line, index) => !(line === '' && index === lines.length - 1));
  };

  const measureTextHeight = (
    text: string,
    options: {
      font?: any;
      size?: number;
      maxWidth?: number;
      lineHeight?: number;
    }
  ) => {
    const usedFont = options.font || font;
    const usedSize = options.size ?? 10;
    const lineHeight = options.lineHeight ?? usedSize + 2;
    const maxWidth = options.maxWidth ?? width;
    const lines = getTextLines(text, { font: usedFont, size: usedSize, maxWidth });
    return lines.length * lineHeight;
  };

  const drawText = (
    text: string,
    options: {
      x: number;
      y?: number;
      size?: number;
      font?: any;
      color?: any;
      maxWidth?: number;
      lineHeight?: number;
      updateY?: boolean;
    }
  ) => {
    const usedFont = options.font || font;
    const usedSize = options.size ?? 10;
    const lineHeight = options.lineHeight ?? usedSize + 2;
    const maxWidth = options.maxWidth ?? width;
    const startY = typeof options.y === 'number' ? options.y : y;
    const lines = getTextLines(text, { font: usedFont, size: usedSize, maxWidth });
    let cursorY = startY;

    for (const line of lines) {
      page.drawText(line, {
        x: options.x,
        y: cursorY,
        size: usedSize,
        font: usedFont,
        color: options.color || darkColor,
      });
      cursorY -= lineHeight;
    }

    const nextY = cursorY;
    if (options.y === undefined || options.updateY !== false) {
      y = nextY;
    }
    return nextY;
  };

  const checkPageBreak = (height: number) => {
    if (y - height < margin) {
      page = pdfDoc.addPage([612, 792]);
      y = 740;
    }
  };

  const drawSectionHeader = (title: string, subtitle?: string) => {
    const titleHeight = measureTextHeight(title, { font: fontBold, size: 14, maxWidth: width, lineHeight: 16 });
    const subtitleHeight = subtitle
      ? measureTextHeight(subtitle, { font, size: 9, maxWidth: width, lineHeight: 12 })
      : 0;
    checkPageBreak(titleHeight + subtitleHeight + 10);
    drawText(title, { x: margin, size: 14, font: fontBold, color: accentColor, maxWidth: width, lineHeight: 16 });
    if (subtitle) {
      drawText(subtitle, { x: margin, size: 9, color: midGray, maxWidth: width, lineHeight: 12 });
    }
    y -= 10;
  };

  const sectionSpacing = 28;

  // Header
  // Header - use fixed offsets so lines cannot collide across renderers
  {
    const headerTop = y;
    drawText('SUITE CAPACITY INTEL®', { x: margin, y: headerTop, size: 9, font: fontBold, color: accentColor, maxWidth: width, lineHeight: 11, updateY: false });

    // Place the main title sufficiently below the suite line to avoid overlap
    const mainTitleY = headerTop - 40;
    drawText('STR Blueprint Report', { x: margin, y: mainTitleY, size: 24, font: fontBold, color: darkColor, maxWidth: width, lineHeight: 28, updateY: false });

    const propertyY = mainTitleY - 36;
    drawText(`Property: ${data.property.address}`, { x: margin, y: propertyY, size: 10, font: fontBold, color: midGray, maxWidth: width, lineHeight: 14, updateY: false });

    const preparedY = propertyY - 18;
    drawText(`Prepared for ${data.lead.name} • ${new Date().toLocaleDateString()}`, { x: margin, y: preparedY, size: 9, color: midGray, maxWidth: width, lineHeight: 12, updateY: false });

    y = preparedY - sectionSpacing;
  }

  // Top section: market + hero stats
  {
    const topTitle = selectedMarket?.name ? `${selectedMarket.name} Market Analysis` : 'Local Market Analysis';
    const topDetail = selectedMarket?.detail || 'Market context and performance indicators for the property.';
    const topTitleHeight = measureTextHeight(topTitle, { font: fontBold, size: 14, maxWidth: width - 32, lineHeight: 16 });
    const topDetailHeight = measureTextHeight(topDetail, { font, size: 9, maxWidth: width - 32, lineHeight: 12 });
    const metricsHeight = 18 + 12;
    const topCardHeight = Math.max(140, topTitleHeight + topDetailHeight + metricsHeight + 36);

    checkPageBreak(topCardHeight);
    page.drawRectangle({ x: margin, y: y - topCardHeight, width, height: topCardHeight, color: lightGray });
    drawText(topTitle, { x: margin + 16, size: 14, font: fontBold, color: darkColor, maxWidth: width - 32, lineHeight: 16 });
    drawText(topDetail, { x: margin + 16, y: y - topTitleHeight - 22, size: 9, color: midGray, maxWidth: width - 32, lineHeight: 12 });

    const metricX = margin + 16;
    const metricTopY = y - topTitleHeight - topDetailHeight - 34;
    const metricSpacer = 120;
    const metricValues = [
      { label: 'Market Multiplier', value: selectedMarket?.multiplier ? `${selectedMarket.multiplier}x` : '1.15x' },
      { label: 'Demand Index', value: `${Math.round(getSafeNumber(projection.marketComparison?.demandIndex, 0))}%` },
      { label: 'Status', value: selectedMarket?.status || 'Active' },
    ];

    metricValues.forEach((metric, index) => {
      const x = metricX + index * metricSpacer;
      drawText(metric.label, { x, y: metricTopY, size: 8, color: midGray, maxWidth: 120, lineHeight: 10, updateY: false });
      drawText(metric.value, {
        x,
        y: metricTopY - 12,
        size: 16,
        font: fontBold,
        color: index === 1 ? successGreen : darkColor,
        maxWidth: 120,
        lineHeight: 18,
        updateY: false,
      });
    });

    y -= topCardHeight + sectionSpacing;
  }

  // Property Positioning Snapshot
  {
    drawSectionHeader('1. Property Positioning Snapshot', 'Market Context & Asset Assessment');
    const leftColumnWidth = width / 2 - 40;
    const rightColumnWidth = width / 2 - 40;

    const leftTitleHeight = measureTextHeight('Asset Description', { font: fontBold, size: 9, maxWidth: leftColumnWidth, lineHeight: 11 });
    const leftDescriptionHeight = measureTextHeight(pos.description, { font, size: 10, maxWidth: leftColumnWidth, lineHeight: 14 });
    const leftPositioningTitleHeight = measureTextHeight('Market Positioning', { font: fontBold, size: 9, maxWidth: leftColumnWidth, lineHeight: 11 });
    const leftPositioningHeight = measureTextHeight(pos.marketPositioning, { font: fontBold, size: 12, maxWidth: leftColumnWidth, lineHeight: 16 });
    const leftContentHeight = leftTitleHeight + leftDescriptionHeight + leftPositioningTitleHeight + leftPositioningHeight + 16;

    const rightTitleHeight = measureTextHeight('Key Strengths', { font: fontBold, size: 9, maxWidth: rightColumnWidth, lineHeight: 11 });
    const rightStrengthHeight = measureTextHeight(pos.strengths, { font, size: 10, maxWidth: rightColumnWidth, lineHeight: 14 });
    const rightLimitationTitleHeight = measureTextHeight('Key Limitations', { font: fontBold, size: 9, maxWidth: rightColumnWidth, lineHeight: 11 });
    const rightLimitationHeight = measureTextHeight(pos.limitations, { font, size: 10, maxWidth: rightColumnWidth, lineHeight: 14 });
    const rightContentHeight = rightTitleHeight + rightStrengthHeight + rightLimitationTitleHeight + rightLimitationHeight + 16;

    const positioningCardHeight = Math.max(150, Math.max(leftContentHeight, rightContentHeight) + 32);
    checkPageBreak(positioningCardHeight);

    page.drawRectangle({ x: margin, y: y - positioningCardHeight, width, height: positioningCardHeight, color: rgb(248 / 255, 250 / 255, 252 / 255) });
    const leftX = margin + 20;
    const rightX = margin + width / 2 + 10;
    const startY = y - 24;

    drawText('Asset Description', { x: leftX, y: startY, size: 9, font: fontBold, color: accentColor, maxWidth: leftColumnWidth, lineHeight: 11, updateY: false });
    drawText(pos.description, { x: leftX, y: startY - 16, size: 10, maxWidth: leftColumnWidth, lineHeight: 14, updateY: false });
    drawText('Market Positioning', { x: leftX, y: startY - 50, size: 9, font: fontBold, color: accentColor, maxWidth: leftColumnWidth, lineHeight: 11, updateY: false });
    drawText(pos.marketPositioning, { x: leftX, y: startY - 64, size: 12, font: fontBold, color: darkColor, maxWidth: leftColumnWidth, lineHeight: 16, updateY: false });

    drawText('Key Strengths', { x: rightX, y: startY, size: 9, font: fontBold, color: successGreen, maxWidth: rightColumnWidth, lineHeight: 11, updateY: false });
    drawText(pos.strengths, { x: rightX, y: startY - 16, size: 10, color: darkColor, maxWidth: rightColumnWidth, lineHeight: 14, updateY: false });
    drawText('Key Limitations', { x: rightX, y: startY - 54, size: 9, font: fontBold, color: warningRed, maxWidth: rightColumnWidth, lineHeight: 11, updateY: false });
    drawText(pos.limitations, { x: rightX, y: startY - 68, size: 10, color: darkColor, maxWidth: rightColumnWidth, lineHeight: 14, updateY: false });

    y -= positioningCardHeight + sectionSpacing;
  }

  // Revenue Comparison and performance highlights
  {
    drawSectionHeader('2. Current Market Performance (Baseline)', 'Historical Asset Performance');
    const descriptionText = `Based on real-time data for ${selectedMarket?.name || 'this market'}, this property is performing within baseline. There is a verified ${liftPct}% upside available through active institutional management.`;
    const descriptionHeight = measureTextHeight(descriptionText, {
      font,
      size: 9,
      maxWidth: width - 40,
      lineHeight: 13,
    });
    const performanceCardHeight = Math.max(180, 24 + 24 + 20 + descriptionHeight + 26);
    checkPageBreak(performanceCardHeight);

    page.drawRectangle({ x: margin, y: y - performanceCardHeight, width, height: performanceCardHeight, color: lightGray });
    drawText('Est. Annual Revenue', { x: margin + 20, size: 9, font: fontBold, color: midGray, maxWidth: 200, lineHeight: 11, updateY: false });
    drawText(formatCurrency(projection.currentRevenue), {
      x: margin + 20,
      y: y - 24,
      size: 22,
      font: fontBold,
      color: darkColor,
      maxWidth: 220,
      lineHeight: 24,
      updateY: false,
    });

    const perfStats = [
      { label: 'Peak Season Share', value: `${getSafeNumber(projection.performanceBreakdown?.peakContribution, 0)}%` },
      { label: 'Shoulder Contribution', value: `${getSafeNumber(projection.performanceBreakdown?.shoulderContribution, 0)}%` },
      { label: 'Off-Season Contribution', value: `${getSafeNumber(projection.performanceBreakdown?.offSeasonContribution, 0)}%` },
    ];
    const perfStartY = y - 82;
    let perfX = margin + 20;
    perfStats.forEach((stat) => {
      drawText(stat.label, { x: perfX, y: perfStartY, size: 8, color: midGray, maxWidth: 160, lineHeight: 10, updateY: false });
      drawText(stat.value, {
        x: perfX,
        y: perfStartY - 12,
        size: 14,
        font: fontBold,
        color: darkColor,
        maxWidth: 160,
        lineHeight: 16,
        updateY: false,
      });
      perfX += 180;
    });

    drawText(descriptionText, {
      x: margin + 20,
      y: y - 110,
      size: 9,
      color: midGray,
      maxWidth: width - 40,
      lineHeight: 13,
      updateY: false,
    });
    y -= performanceCardHeight + sectionSpacing;
  }

  // Missed Opportunities
  {
    drawSectionHeader('3. Missed Revenue Opportunities', 'Identified Leakage Areas');
    const oppItems = projection.intelligence?.missedOpportunities || [
      'Real-time opportunity analysis requires a valid API connection and street-level address.',
    ];
    const bulletHeights = oppItems.map((opp) =>
      measureTextHeight(`• ${opp}`, { font, size: 10, maxWidth: width - 60, lineHeight: 14 })
    );
    const oppCardHeight = Math.max(70, bulletHeights.reduce((sum, h) => sum + h, 0) + 20 + (oppItems.length - 1) * 4);
    checkPageBreak(oppCardHeight + 20);

    page.drawRectangle({ x: margin, y: y - oppCardHeight, width, height: oppCardHeight, color: rgb(254 / 255, 242 / 255, 242 / 255) });

    let bulletY = y - 24;
    oppItems.forEach((opp) => {
      const nextY = drawText(`• ${opp}`, {
        x: margin + 20,
        y: bulletY,
        size: 10,
        color: warningRed,
        maxWidth: width - 60,
        lineHeight: 14,
        updateY: false,
      });
      bulletY = nextY - 4;
    });
    y -= oppCardHeight + 20;

    const avgLossDescription = 'Revenue left on the table annually due to sub-professional optimization.';
    const avgLossDescriptionHeight = measureTextHeight(avgLossDescription, {
      font,
      size: 9,
      maxWidth: width - 60,
      lineHeight: 12,
    });
    const averageLossHeight = Math.max(95, 20 + 28 + avgLossDescriptionHeight + 18);
    checkPageBreak(averageLossHeight + sectionSpacing);
    page.drawRectangle({ x: margin, y: y - averageLossHeight, width, height: averageLossHeight, color: darkColor });
    drawText('Average Loss', { x: margin + 20, y: y - 24, size: 10, font: fontBold, color: lightGray, maxWidth: width - 60, lineHeight: 12, updateY: false });
    drawText(formatCurrency(revenueLift), {
      x: margin + 20,
      y: y - 44,
      size: 28,
      font: fontBold,
      color: accentColor,
      maxWidth: width - 60,
      lineHeight: 30,
      updateY: false,
    });
    drawText(avgLossDescription, {
      x: margin + 20,
      y: y - 76,
      size: 9,
      color: rgb(226 / 255, 232 / 255, 240 / 255),
      maxWidth: width - 60,
      lineHeight: 12,
      updateY: false,
    });
    y -= averageLossHeight + sectionSpacing;
  }

  // Optimized Projection
  {
    drawSectionHeader('4. Suite Capacity Optimized Projection', 'Projected Delta with Institutional Management');
    const revenueTitleHeight = measureTextHeight('Optimized Annual Target', { font: fontBold, size: 10, maxWidth: width - 80, lineHeight: 12 });
    const revenueValueHeight = measureTextHeight(formatCurrency(projection.optimizedRevenue), {
      font: fontBold,
      size: 36,
      maxWidth: width - 80,
      lineHeight: 40,
    });

    const boxWidth = (width - 30) / 2;
    const leftBoxLabelHeight = measureTextHeight('Baseline / Current', {
      font: fontBold,
      size: 8,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
    });
    const leftBoxValueHeight = measureTextHeight(formatCurrency(projection.currentRevenue), {
      font: fontBold,
      size: 12,
      maxWidth: boxWidth - 24,
      lineHeight: 14,
    });
    const leftBoxOccupancyHeight = measureTextHeight(`Occupancy Target: ${data.baseline.occupancy ? `${data.baseline.occupancy}%` : 'Market Average'}`, {
      font,
      size: 8,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
    });
    const leftBoxHeight = leftBoxLabelHeight + leftBoxValueHeight + leftBoxOccupancyHeight + 18;

    const rightBoxLabelHeight = measureTextHeight('Suite Capacity Optimized', {
      font: fontBold,
      size: 8,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
    });
    const rightBoxValueHeight = measureTextHeight(projection.intelligence?.optimizedProjection?.revenueRange || formatCurrency(projection.optimizedRevenue), {
      font: fontBold,
      size: 12,
      maxWidth: boxWidth - 24,
      lineHeight: 14,
    });
    const rightBoxOccupancyHeight = measureTextHeight(`Occupancy Target: ${projection.intelligence?.optimizedProjection?.occupancyTarget || 'N/A'}`, {
      font,
      size: 8,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
    });
    const rightBoxHeight = rightBoxLabelHeight + rightBoxValueHeight + rightBoxOccupancyHeight + 18;
    const compareBoxHeight = Math.max(72, Math.max(leftBoxHeight, rightBoxHeight));

    const projectionCardHeight = Math.max(210, revenueTitleHeight + revenueValueHeight + compareBoxHeight + 40);
    checkPageBreak(projectionCardHeight);

    page.drawRectangle({ x: margin, y: y - projectionCardHeight, width, height: projectionCardHeight, color: accentColor });
    // Title and value placement: place the large value using its font line height to avoid overlap
    const optTitle = 'Optimized Annual Target';
    const titleY = y - 24;
    drawText(optTitle, { x: margin + 20, y: titleY, size: 10, font: fontBold, color: lightGray, maxWidth: width - 80, lineHeight: 12, updateY: false });
    const valueFontSize = 36;
    const valueLineHeight = 40;
    // place the large value sufficiently below the title using the value's line height
    const valueY = titleY - valueLineHeight - 12;
    drawText(formatCurrency(projection.optimizedRevenue), {
      x: margin + 20,
      y: valueY,
      size: valueFontSize,
      font: fontBold,
      color: rgb(255 / 255, 255 / 255, 255 / 255),
      maxWidth: width - 80,
      lineHeight: valueLineHeight,
      updateY: false,
    });

    // Place the comparison boxes below the large value using the value's line height
    const compareY = valueY - valueLineHeight - 20;
    const compareX = margin + 20;
    const compareRightX = compareX + boxWidth + 18;

    page.drawRectangle({ x: compareX, y: compareY - compareBoxHeight, width: boxWidth, height: compareBoxHeight, color: rgb(255 / 255, 255 / 255, 255 / 255) });
    drawText('Baseline / Current', { x: compareX + 12, y: compareY - 14, size: 8, font: fontBold, color: midGray, maxWidth: boxWidth - 24, lineHeight: 10, updateY: false });
    drawText(formatCurrency(projection.currentRevenue), {
      x: compareX + 12,
      y: compareY - 28,
      size: 12,
      font: fontBold,
      color: darkColor,
      maxWidth: boxWidth - 24,
      lineHeight: 14,
      updateY: false,
    });
    drawText(`Occupancy Target: ${data.baseline.occupancy ? `${data.baseline.occupancy}%` : 'Market Average'}`, {
      x: compareX + 12,
      y: compareY - 46,
      size: 8,
      color: midGray,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
      updateY: false,
    });

    page.drawRectangle({ x: compareRightX, y: compareY - compareBoxHeight, width: boxWidth, height: compareBoxHeight, color: rgb(255 / 255, 255 / 255, 255 / 255) });
    drawText('Suite Capacity Optimized', { x: compareRightX + 12, y: compareY - 14, size: 8, font: fontBold, color: midGray, maxWidth: boxWidth - 24, lineHeight: 10, updateY: false });
    drawText(projection.intelligence?.optimizedProjection?.revenueRange || formatCurrency(projection.optimizedRevenue), {
      x: compareRightX + 12,
      y: compareY - 28,
      size: 12,
      font: fontBold,
      color: darkColor,
      maxWidth: boxWidth - 24,
      lineHeight: 14,
      updateY: false,
    });
    drawText(`Occupancy Target: ${projection.intelligence?.optimizedProjection?.occupancyTarget || 'N/A'}`, {
      x: compareRightX + 12,
      y: compareY - 46,
      size: 8,
      color: midGray,
      maxWidth: boxWidth - 24,
      lineHeight: 10,
      updateY: false,
    });

    y -= projectionCardHeight + sectionSpacing;
  }

  // Revenue lift summary
  {
    drawSectionHeader('5. Revenue Lift Summary', undefined);
    const revenueLiftDescription = `With professional optimization, this property can outperform the market average by ${liftPct - 5}%–${liftPct + 5}% annually.`;
    const descriptionHeight = measureTextHeight(revenueLiftDescription, {
      font,
      size: 9,
      maxWidth: width - 40,
      lineHeight: 12,
    });
    const summaryCardHeight = Math.max(120, 30 + 22 + 20 + descriptionHeight + 18);
    checkPageBreak(summaryCardHeight);

    page.drawRectangle({ x: margin, y: y - summaryCardHeight, width, height: summaryCardHeight, color: lightGray });
    drawText('Baseline Revenue', { x: margin + 20, y: y - 24, size: 8, color: midGray, maxWidth: 180, lineHeight: 10, updateY: false });
    drawText(formatCurrency(projection.currentRevenue), {
      x: margin + 20,
      y: y - 38,
      size: 18,
      font: fontBold,
      color: midGray,
      maxWidth: 180,
      lineHeight: 22,
      updateY: false,
    });
    drawText('Optimized Revenue', { x: margin + 240, y: y - 24, size: 8, color: midGray, maxWidth: 180, lineHeight: 10, updateY: false });
    drawText(formatCurrency(projection.optimizedRevenue), {
      x: margin + 240,
      y: y - 38,
      size: 18,
      font: fontBold,
      color: accentColor,
      maxWidth: 180,
      lineHeight: 22,
      updateY: false,
    });
    drawText('Net Revenue Lift', { x: margin + 460, y: y - 24, size: 8, color: midGray, maxWidth: 160, lineHeight: 10, updateY: false });
    drawText(formatCurrency(revenueLift), {
      x: margin + 460,
      y: y - 38,
      size: 18,
      font: fontBold,
      color: darkColor,
      maxWidth: 160,
      lineHeight: 22,
      updateY: false,
    });
    drawText(revenueLiftDescription, {
      x: margin + 20,
      y: y - 70,
      size: 9,
      color: midGray,
      maxWidth: width - 40,
      lineHeight: 12,
      updateY: false,
    });
    y -= summaryCardHeight + sectionSpacing;
  }

  // Design & strategy section
  {
    drawSectionHeader('6. Strategic Recommendations', undefined);
    const columnWidth = width / 2 - 40;

    const leftTitleHeight = measureTextHeight('Design & Amenity Strategy', {
      font: fontBold,
      size: 10,
      maxWidth: columnWidth,
      lineHeight: 12,
    });
    const leftDescHeight = measureTextHeight(projection.intelligence?.designStrategy?.recommendation || 'Premium interior refresh and targeted amenity upgrades.', {
      font,
      size: 10,
      maxWidth: columnWidth,
      lineHeight: 13,
    });
    const leftBlockHeight = leftTitleHeight + leftDescHeight + 14;

    const rightTitleHeight = measureTextHeight('Listing Optimization', {
      font: fontBold,
      size: 10,
      maxWidth: columnWidth,
      lineHeight: 12,
    });
    const rightDescHeight = measureTextHeight(projection.intelligence?.listingStrategy?.titleStrategy?.good || 'Experience-first SEO titles emphasizing demand.', {
      font,
      size: 10,
      maxWidth: columnWidth,
      lineHeight: 13,
    });
    const rightBlockHeight = rightTitleHeight + rightDescHeight + 14;

    const whyTitleHeight = measureTextHeight('Why Suite Capacity?', {
      font: fontBold,
      size: 9,
      maxWidth: width - 80,
      lineHeight: 14,
    });
    const whyDescHeight = measureTextHeight(projection.intelligence?.whySuiteCapacity || 'Professional management captures the revenue that generic listings miss.', {
      font,
      size: 9,
      maxWidth: width - 80,
      lineHeight: 12,
    });

    const strategyCardHeight = Math.max(150, Math.max(leftBlockHeight, rightBlockHeight) + whyTitleHeight + whyDescHeight + 46);
    checkPageBreak(strategyCardHeight);

    page.drawRectangle({ x: margin, y: y - strategyCardHeight, width, height: strategyCardHeight, color: rgb(248 / 255, 250 / 255, 252 / 255) });
    const strategyStartY = y - 24;
    const leftX = margin + 20;
    const rightX = margin + width / 2 + 10;

    drawText('Design & Amenity Strategy', { x: leftX, y: strategyStartY, size: 10, font: fontBold, color: accentColor, maxWidth: columnWidth, lineHeight: 12, updateY: false });
    drawText(projection.intelligence?.designStrategy?.recommendation || 'Premium interior refresh and targeted amenity upgrades.', {
      x: leftX,
      y: strategyStartY - 16,
      size: 10,
      color: darkColor,
      maxWidth: columnWidth,
      lineHeight: 13,
      updateY: false,
    });

    drawText('Listing Optimization', { x: rightX, y: strategyStartY, size: 10, font: fontBold, color: accentColor, maxWidth: columnWidth, lineHeight: 12, updateY: false });
    drawText(projection.intelligence?.listingStrategy?.titleStrategy?.good || 'Experience-first SEO titles emphasizing demand.', {
      x: rightX,
      y: strategyStartY - 16,
      size: 10,
      color: darkColor,
      maxWidth: columnWidth,
      lineHeight: 13,
      updateY: false,
    });

    const columnHeight = Math.max(leftBlockHeight, rightBlockHeight);
    const whyTopY = strategyStartY - columnHeight - 16;
    drawText('Why Suite Capacity?', { x: leftX, y: whyTopY, size: 9, font: fontBold, color: midGray, maxWidth: width - 80, lineHeight: 14, updateY: false });
    drawText(projection.intelligence?.whySuiteCapacity || 'Professional management captures the revenue that generic listings miss.', {
      x: leftX,
      y: whyTopY - 16,
      size: 9,
      color: midGray,
      maxWidth: width - 80,
      lineHeight: 12,
      updateY: false,
    });

    y -= strategyCardHeight + sectionSpacing;
  }

  // CTA card
  {
    const ctaTitle = 'Ready to activate your professional management plan?';
    const ctaDescription = 'Book a strategy session or reply to this report to speak with a specialist.';
    const ctaUrl = process.env.STRATEGY_CALL_URL || 'https://calendly.com/suitecapacity';

    const ctaTitleHeight = measureTextHeight(ctaTitle, { font: fontBold, size: 14, maxWidth: width - 80, lineHeight: 18 });
    const ctaDescriptionHeight = measureTextHeight(ctaDescription, { font, size: 10, maxWidth: width - 80, lineHeight: 13 });
    const ctaUrlTitleHeight = measureTextHeight('Visit:', { font: fontBold, size: 9, maxWidth: width - 80, lineHeight: 12 });
    const ctaUrlHeight = measureTextHeight(ctaUrl, { font, size: 9, maxWidth: width - 80, lineHeight: 12 });
    const ctaHeight = Math.max(120, ctaTitleHeight + ctaDescriptionHeight + ctaUrlTitleHeight + ctaUrlHeight + 30);

    checkPageBreak(ctaHeight);
    page.drawRectangle({ x: margin, y: y - ctaHeight, width, height: ctaHeight, color: darkColor });
    drawText(ctaTitle, { x: margin + 20, y: y - 24, size: 14, font: fontBold, color: lightGray, maxWidth: width - 80, lineHeight: 18, updateY: false });
    drawText(ctaDescription, {
      x: margin + 20,
      y: y - 46,
      size: 10,
      color: rgb(226 / 255, 232 / 255, 240 / 255),
      maxWidth: width - 80,
      lineHeight: 13,
      updateY: false,
    });
    drawText('Visit:', {
      x: margin + 20,
      y: y - 66,
      size: 9,
      font: fontBold,
      color: accentColor,
      maxWidth: width - 80,
      lineHeight: 12,
      updateY: false,
    });
    drawText(ctaUrl, {
      x: margin + 20,
      y: y - 80,
      size: 9,
      color: rgb(147 / 255, 197 / 255, 253 / 255),
      maxWidth: width - 80,
      lineHeight: 12,
      updateY: false,
    });
    y -= ctaHeight + sectionSpacing;
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
