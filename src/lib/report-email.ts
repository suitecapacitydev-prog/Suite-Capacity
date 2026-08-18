import { WizardData, RevenueProjection } from '@/types/wizard';
import { MARKETS } from '@/data/markets';

const PRIMARY = '#3b82f6';
const SLATE_50 = '#f8fafc';
const SLATE_100 = '#f1f5f9';
const SLATE_200 = '#e2e8f0';
const SLATE_400 = '#94a3b8';
const SLATE_500 = '#64748b';
const SLATE_700 = '#334155';
const SLATE_900 = '#0f172a';
const EMERALD = '#10b981';
const ROSE_50 = '#fef2f2';
const ROSE_100 = '#fecaca';
const ROSE_900 = '#7f1d1d';

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatCurrency(val: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(val);
}

function isShoreTown(addr: string): boolean {
    const shoreTowns = [
        'seaside', 'lavallette', 'ortley', 'point pleasant',
        'belmar', 'spring lake', 'asbury', 'long branch',
    ];
    return shoreTowns.some((t) => addr.toLowerCase().includes(t));
}

function getSelectedMarket(data: WizardData) {
    return (
        MARKETS.find((m) => m.id === data.property.marketId) ||
        MARKETS.find((m) => data.property.address.toLowerCase().includes(m.name.toLowerCase()))
    );
}

function getPositioningContent(projection: RevenueProjection) {
    if (projection.intelligence?.positioning) {
        return projection.intelligence.positioning;
    }
    return {
        description:
            'No real-time intelligence data was received for this property. This typically happens if the address is too vague or if there is an issue with the AI connection.',
        marketPositioning: 'Analysis Pending',
        strengths: 'Pending real-world verification',
        limitations: 'Pending professional audit',
    };
}

function renderProgressBar(percent: number, color = PRIMARY): string {
    const clamped = Math.max(0, Math.min(100, Math.round(percent)));
    const remainder = 100 - clamped;
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
                <td width="${clamped}%" bgcolor="${color}" height="8" style="background-color:${color};height:8px;border-radius:4px 0 0 4px;font-size:0;line-height:0;">&nbsp;</td>
                <td width="${remainder}%" bgcolor="${SLATE_200}" height="8" style="background-color:${SLATE_200};height:8px;border-radius:0 4px 4px 0;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
        </table>`;
}

function renderSectionHeader(number: string, title: string, subtitle: string, accentColor = PRIMARY): string {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:36px;margin-bottom:20px;border-collapse:collapse;">
            <tr>
                <td style="padding-bottom:12px;border-bottom:2px solid ${SLATE_200};">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;color:${accentColor};">${escapeHtml(number)}</p>
                    <p style="margin:0 0 4px;font-size:22px;font-weight:900;color:${SLATE_900};text-transform:uppercase;letter-spacing:-0.02em;">${escapeHtml(title)}</p>
                    <p style="margin:0;font-size:11px;font-weight:700;color:${SLATE_500};text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(subtitle)}</p>
                </td>
            </tr>
        </table>`;
}

function renderStatCard(label: string, value: string, subtext?: string): string {
    return `
        <td width="25%" valign="top" style="padding:6px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:16px;border-collapse:collapse;">
                <tr>
                    <td style="padding:20px;">
                        <p style="margin:0 0 8px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">${escapeHtml(label)}</p>
                        <p style="margin:0;font-size:24px;font-weight:900;color:${SLATE_900};">${value}</p>
                        ${subtext ? `<p style="margin:6px 0 0;font-size:9px;font-weight:700;color:${PRIMARY};text-transform:uppercase;">${escapeHtml(subtext)}</p>` : ''}
                    </td>
                </tr>
            </table>
        </td>`;
}

function renderTrajectoryChart(currentRevenue: number, optimizedRevenue: number): string {
    const months = ['Start', 'Q1', 'Q2', 'Q3', 'Year 1'];
    const baselineHeights = [160, 150, 140, 135, 130];
    const optimizedHeights = [160, 130, 100, 80, 60];
    const maxH = 160;

    const bars = months
        .map((label, i) => {
            const baselinePct = Math.round(((maxH - baselineHeights[i]) / maxH) * 100);
            const optimizedPct = Math.round(((maxH - optimizedHeights[i]) / maxH) * 100);
            return `
                <td width="20%" valign="bottom" align="center" style="padding:0 4px;">
                    <p style="margin:0 0 6px;font-size:9px;font-weight:700;color:${SLATE_500};text-transform:uppercase;">${label}</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="height:120px;border-collapse:collapse;">
                        <tr valign="bottom">
                            <td width="50%" align="center" style="padding:0 2px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse;">
                                    <tr><td bgcolor="${SLATE_400}" width="14" height="${baselineHeights[i]}" style="background-color:${SLATE_400};width:14px;height:${baselineHeights[i]}px;border-radius:4px 4px 0 0;font-size:0;">&nbsp;</td></tr>
                                </table>
                            </td>
                            <td width="50%" align="center" style="padding:0 2px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse;">
                                    <tr><td bgcolor="${PRIMARY}" width="14" height="${optimizedHeights[i]}" style="background-color:${PRIMARY};width:14px;height:${optimizedHeights[i]}px;border-radius:4px 4px 0 0;font-size:0;">&nbsp;</td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <p style="margin:6px 0 0;font-size:8px;font-weight:700;color:${SLATE_500};">${baselinePct}% / ${optimizedPct}%</p>
                </td>`;
        })
        .join('');

    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;border-collapse:collapse;">
            <tr>
                <td style="padding-bottom:16px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                        <tr>
                            <td>
                                <p style="margin:0;font-size:13px;font-weight:900;text-transform:uppercase;color:${SLATE_900};">Projected Trajectory</p>
                                <p style="margin:4px 0 0;font-size:10px;font-weight:700;color:${SLATE_500};text-transform:uppercase;letter-spacing:0.1em;">12-Month Impact Analysis</p>
                            </td>
                            <td align="right">
                                <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:${SLATE_500};"><span style="display:inline-block;width:8px;height:8px;background-color:${SLATE_400};border-radius:50%;margin-right:4px;"></span> AirDNA Average</p>
                                <p style="margin:0;font-size:10px;font-weight:700;color:${PRIMARY};"><span style="display:inline-block;width:8px;height:8px;background-color:${PRIMARY};border-radius:50%;margin-right:4px;"></span> Suite Capacity</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top:8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>${bars}</tr></table></td>
            </tr>
            <tr>
                <td style="padding-top:16px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                        <tr>
                            <td align="right" style="padding:4px 8px;">
                                <span style="display:inline-block;background-color:${PRIMARY};color:#ffffff;font-size:10px;font-weight:900;padding:4px 8px;border-radius:8px;">Optimized Target: ${formatCurrency(optimizedRevenue)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" style="padding:4px 8px;">
                                <span style="display:inline-block;background-color:${SLATE_100};color:${SLATE_500};font-size:10px;font-weight:900;padding:4px 8px;border-radius:8px;">Market Baseline: ${formatCurrency(currentRevenue)}</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>`;
}

function renderSeasonBars(): string {
    const seasons = [
        { label: 'Spring', width: 80 },
        { label: 'Summer', width: 100 },
        { label: 'Fall', width: 70 },
        { label: 'Winter', width: 60 },
    ];

    const cells = seasons
        .map(
            (s) => `
            <td width="25%" align="center" valign="top" style="padding:4px;">
                <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">${s.label}</p>
                ${renderProgressBar(s.width)}
            </td>`
        )
        .join('');

    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;border-collapse:collapse;">
            <tr>${cells}</tr>
        </table>`;
}

export function generateReportEmailHTML(data: WizardData, projection: RevenueProjection): string {
    const intel = projection.intelligence;
    const isMock = !intel;
    const liftPct = Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100);
    const revenueLift = projection.optimizedRevenue - projection.currentRevenue;
    const selectedMarket = getSelectedMarket(data);
    const pos = getPositioningContent(projection);
    const isShore = isShoreTown(data.property.address);
    const volatilityPct = Math.round((projection.volatilityIndex ?? 0.15) * 100);
    const demandIndex = Math.round(projection.marketComparison?.demandIndex ?? 0);

    const designImage = data.aiDesign.images[0];
    const originalImageUrl =
        designImage?.url ||
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80';
    const enhancedImageUrl =
        designImage?.enhancedUrl ||
        designImage?.url ||
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80';

    const designTitle =
        intel?.designStrategy?.recommendation.split(':')[0] ||
        (isShore ? 'Tulum Tropical Modern Direction' : 'Modern Industrial Lifestyle Concept');
    const designRecommendation =
        intel?.designStrategy?.recommendation ||
        'Professional design recommendations are generated specifically for your property after a successful AI audit. Please ensure your property data is complete.';
    const designTags = intel?.designStrategy?.tags || [
        'Neutral Palette',
        'Natural Woods',
        'Textured Jute',
        'Statement Lighting',
    ];
    const designImpact =
        intel?.designStrategy?.impact ||
        'These upgrades directly support higher nightly rates and significantly improved booking conversion via platform algorithms.';

    const badTitle =
        intel?.listingStrategy?.titleStrategy?.bad ||
        `${data.property.bedrooms} Bedroom ${data.property.propertyType.replace('-', ' ')} in ${data.property.address.split(',')[0]}`;
    const goodTitle = intel?.listingStrategy?.titleStrategy?.good || 'Analysis Pending';
    const descriptionStrategy = intel?.listingStrategy?.descriptionStrategy || [
        'Experience-First: Leading with the feeling of the stay, not just square footage.',
        'Emotion-Driven: Crafting a narrative for family or retreat demographics.',
        'Conversion Stacking: Strategic keyword placement to win performance SEO.',
    ];

    const whyHeadline =
        intel?.whySuiteCapacity?.split('.')[0] ||
        'Most properties in this market underperform because they lack professional optimization.';
    const whyBody =
        intel?.whySuiteCapacity ||
        'Suite Capacity is the institutional unlock for individual owners who want to run their asset like a high-end luxury hotel.';

    const missedOpportunities = intel?.missedOpportunities || [
        {
            title: 'Connection Required',
            desc: 'Real-time opportunity analysis requires a valid API connection and street-level address.',
        },
    ];

    const strategyCallUrl =
        process.env.STRATEGY_CALL_URL ||
        'https://calendly.com/suitecapacity/consultation-and-discovery-call';

    const mockBanner = isMock
        ? `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;background-color:#fffbeb;border:1px solid #fde68a;border-radius:16px;border-collapse:collapse;">
            <tr>
                <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:900;text-transform:uppercase;color:#92400e;">Real-Time Intelligence Pending</p>
                    <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#b45309;">We are currently calculating your property's custom analysis. Below is a high-fidelity preview of your projected optimization strategy.</p>
                </td>
            </tr>
        </table>`
        : '';

    const marketSection = selectedMarket
        ? `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;background-color:${SLATE_100};border:1px solid ${SLATE_200};border-radius:24px;border-collapse:collapse;">
            <tr>
                <td style="padding:28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                        <tr>
                            <td valign="top" style="padding-bottom:16px;">
                                <p style="margin:0 0 4px;font-size:22px;font-weight:900;color:${SLATE_900};">${escapeHtml(selectedMarket.name)} Analysis</p>
                                <p style="margin:0;font-size:11px;font-weight:700;color:${SLATE_500};text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(selectedMarket.detail || 'General Market Context')}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                    <tr>
                                        <td width="33%" align="center" style="padding:8px;">
                                            <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Market Multiplier</p>
                                            <p style="margin:0;font-size:28px;font-weight:900;color:${PRIMARY};">${selectedMarket.multiplier || '1.15'}x</p>
                                        </td>
                                        <td width="33%" align="center" style="padding:8px;">
                                            <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Demand Index</p>
                                            <p style="margin:0;font-size:28px;font-weight:900;color:${EMERALD};">${demandIndex}%</p>
                                        </td>
                                        <td width="33%" align="center" style="padding:8px;">
                                            <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Status</p>
                                            <span style="display:inline-block;background-color:#d1fae5;color:#047857;font-size:10px;font-weight:900;padding:4px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.05em;">${escapeHtml(selectedMarket.status || 'Active')}</span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>`
        : '';

    const opportunityItems = missedOpportunities
        .map((opp) => {
            const title = typeof opp === 'string' ? opp : opp.title;
            const desc = typeof opp === 'string' ? '' : (opp as { desc?: string }).desc || '';
            return `
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;background-color:${ROSE_50};border:1px solid ${ROSE_100};border-radius:16px;border-collapse:collapse;">
                    <tr>
                        <td style="padding:16px;">
                            <p style="margin:0 0 ${desc ? '6px' : '0'};font-size:13px;font-weight:900;text-transform:uppercase;color:${ROSE_900};">⚡ ${escapeHtml(title)}</p>
                            ${desc ? `<p style="margin:0;font-size:12px;color:#b91c1c;line-height:1.5;">${escapeHtml(desc)}</p>` : ''}
                        </td>
                    </tr>
                </table>`;
        })
        .join('');

    const descriptionItems = descriptionStrategy
        .map((item, i) => {
            const [title, desc] =
                typeof item === 'string' && item.includes(':')
                    ? item.split(':').map((s) => s.trim())
                    : [item, ''];
            return `
                <tr>
                    <td style="padding:8px 0;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                            <tr>
                                <td valign="top" width="28" style="padding-right:12px;">
                                    <span style="display:inline-block;width:24px;height:24px;background-color:rgba(59,130,246,0.1);color:${PRIMARY};font-size:10px;font-weight:900;text-align:center;line-height:24px;border-radius:50%;">${i + 1}</span>
                                </td>
                                <td valign="top">
                                    <p style="margin:0;font-size:11px;font-weight:900;text-transform:uppercase;color:${SLATE_900};">${escapeHtml(title)}</p>
                                    ${desc ? `<p style="margin:4px 0 0;font-size:11px;color:${SLATE_500};">${escapeHtml(desc)}</p>` : ''}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>`;
        })
        .join('');

    const designTagCells = designTags
        .map(
            (tag) => `
            <td style="padding:4px;">
                <span style="display:inline-block;background-color:rgba(59,130,246,0.08);color:${PRIMARY};font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;padding:8px 12px;border-radius:12px;">✦ ${escapeHtml(tag)}</span>
            </td>`
        )
        .join('');

    const whyFeatureItems = [
        { title: 'Dynamic Pricing', desc: 'Daily adjustment logic' },
        { title: 'Multi-Platform', desc: 'Global distribution reach' },
        { title: 'Guest Ops v2', desc: 'Hotel-level automation' },
        { title: 'Review Engine', desc: 'Automated 5-star scaling' },
    ];

    const renderWhyFeatureCell = (f: { title: string; desc: string }) => `
            <td width="50%" valign="top" style="padding:8px 12px 8px 0;">
                <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${PRIMARY};">${escapeHtml(f.title)}</p>
                <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5);">${escapeHtml(f.desc)}</p>
            </td>`;

    const whyFeatureRows = [
        whyFeatureItems.slice(0, 2).map(renderWhyFeatureCell).join(''),
        whyFeatureItems.slice(2, 4).map(renderWhyFeatureCell).join(''),
    ];

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revenue Intelligence Report</title>
</head>
<body style="margin:0;padding:0;background-color:${SLATE_50};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;color:${SLATE_900};line-height:1.6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${SLATE_50};border-collapse:collapse;">
        <tr>
            <td align="center" style="padding:24px 12px;">
                <table role="presentation" width="700" cellpadding="0" cellspacing="0" border="0" style="max-width:700px;width:100%;background-color:#ffffff;border-collapse:collapse;">

                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding:40px 35px 20px;border-bottom:1px solid ${SLATE_200};">
                            <p style="margin:0 0 12px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.3em;color:${PRIMARY};">Suite Capacity Intel®</p>
                            <p style="margin:0;font-size:32px;font-weight:900;letter-spacing:-0.05em;color:${SLATE_900};">Revenue Intelligence Report</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:32px 35px;">

                            <!-- Property Card -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;background-color:${SLATE_100};border:1px solid ${SLATE_200};border-radius:20px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:28px;">
                                        <p style="margin:0 0 6px;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;color:${SLATE_500};">Property Analysis Prepared For:</p>
                                        <p style="margin:0 0 4px;font-size:20px;font-weight:900;color:${SLATE_900};">${escapeHtml(data.lead.name)}</p>
                                        <p style="margin:0;font-size:16px;font-weight:500;color:${SLATE_700};">${escapeHtml(data.property.address)}</p>
                                    </td>
                                </tr>
                            </table>

                            ${mockBanner}
                            ${marketSection}

                            ${renderSectionHeader('1.', 'Property Positioning Snapshot', 'Market Context & Asset Assessment')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:20px;border-collapse:collapse;">
                                <tr>
                                    <td width="50%" valign="top" style="padding:28px;">
                                        <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Description</p>
                                        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${SLATE_700};">${escapeHtml(pos.description)}</p>
                                        <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Market Positioning</p>
                                        <p style="margin:0;font-size:18px;font-weight:900;color:${SLATE_900};">${escapeHtml(pos.marketPositioning || 'Premium-Tier Potential')}</p>
                                    </td>
                                    <td width="50%" valign="top" style="padding:28px;border-left:1px solid ${SLATE_200};">
                                        <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${EMERALD};">Key Strengths</p>
                                        <p style="margin:0 0 20px;font-size:14px;color:${SLATE_700};">${escapeHtml(pos.strengths)}</p>
                                        <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:#ef4444;">Key Limitations</p>
                                        <p style="margin:0;font-size:14px;color:${SLATE_700};">${escapeHtml(pos.limitations)}</p>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('', 'Revenue Comparison & Depth', 'AirDNA Standard vs. Suite Capacity Optimized')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                <tr>
                                    <td width="60%" valign="top" style="padding-right:12px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:20px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:28px;">
                                                    ${renderTrajectoryChart(projection.currentRevenue, projection.optimizedRevenue)}
                                                    ${renderSeasonBars()}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="40%" valign="top" style="padding-left:12px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:16px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:20px;">
                                                    <p style="margin:0 0 12px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Market Benchmark (Top 10%)</p>
                                                    <p style="margin:0;font-size:24px;font-weight:900;color:${SLATE_900};">${formatCurrency(projection.marketComparison.topQuartileAdr)}</p>
                                                    <p style="margin:4px 0 12px;font-size:10px;font-weight:700;color:${SLATE_500};text-transform:uppercase;">Top Tier ADR</p>
                                                    ${renderProgressBar(85, EMERALD)}
                                                    <p style="margin:8px 0 0;font-size:11px;font-weight:700;color:${EMERALD};">Peak Competitive Edge</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#000000;border-radius:24px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:28px;color:#ffffff;">
                                                    <p style="margin:0 0 8px;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:0.05em;color:#ffffff;">Direct Booking Engine Upside</p>
                                                    <p style="margin:0 0 16px;font-size:12px;color:rgba(255,255,255,0.6);line-height:1.6;">We shift 30%+ of OTA traffic to your direct portal, saving <strong>15-18%</strong> in distribution fees alone.</p>
                                                    <p style="margin:0;font-size:24px;font-weight:900;color:#ffffff;">${liftPct}% <span style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">Commission Recovery</span></p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('2.', 'Current Market Performance (Baseline)', 'Historical Asset Performance')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                <tr>
                                    ${renderStatCard('Est. Annual Revenue', formatCurrency(projection.currentRevenue))}
                                    ${renderStatCard('Peak Season Share', `${projection.performanceBreakdown?.peakContribution || 70}%`, 'Impact Window')}
                                    ${renderStatCard('Shoulder Contribution', `${projection.performanceBreakdown?.shoulderContribution || 20}%`, 'Sept-Oct / April-May')}
                                    ${renderStatCard('Off-Season Contribution', `${projection.performanceBreakdown?.offSeasonContribution || 10}%`, 'Winter Anchor Strategy')}
                                </tr>
                            </table>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;background-color:${SLATE_100};border:1px solid ${SLATE_200};border-radius:16px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:20px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tr>
                                                <td>
                                                    <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Market Intelligence</p>
                                                </td>
                                                <td align="right">
                                                    <span style="display:inline-block;background-color:#dbeafe;color:#1d4ed8;font-size:8px;font-weight:900;padding:4px 8px;border-radius:20px;text-transform:uppercase;">PriceLabs® Live</span>
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;border-collapse:collapse;">
                                            <tr>
                                                <td width="50%">
                                                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${SLATE_500};text-transform:uppercase;">Multiplier</p>
                                                    <p style="margin:0;font-size:20px;font-weight:900;color:${SLATE_900};">${selectedMarket?.multiplier || 1.15}x</p>
                                                </td>
                                                <td width="50%">
                                                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${SLATE_500};text-transform:uppercase;">Volatility</p>
                                                    <p style="margin:0;font-size:20px;font-weight:900;color:${PRIMARY};">${volatilityPct}%</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin:16px 0 0;font-size:13px;color:rgba(0,0,0,0.6);font-style:italic;line-height:1.7;">
                                "Based on real-time data for ${escapeHtml(selectedMarket?.name || 'this market')}, this property is currently performing within its baseline bracket. There is a verified ${liftPct}% upside available through active institutional management."
                            </p>

                            ${renderSectionHeader('3.', 'Missed Revenue Opportunities', 'Identified Leakage Areas', '#ef4444')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                <tr>
                                    <td width="50%" valign="top" style="padding-right:12px;">
                                        ${opportunityItems}
                                    </td>
                                    <td width="50%" valign="middle" align="center" style="padding-left:12px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#000000;border-radius:24px;border-collapse:collapse;">
                                            <tr>
                                                <td align="center" style="padding:32px 24px;color:#ffffff;">
                                                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Average Loss</p>
                                                    <p style="margin:0 0 8px;font-size:28px;font-weight:900;color:#ffffff;">${formatCurrency(revenueLift)}</p>
                                                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.7);text-transform:uppercase;font-weight:700;letter-spacing:0.02em;">Revenue left on table annually due to sub-professional optimization.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('4.', 'Suite Capacity Optimized Projection', 'Projected Delta with Institutional Management')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PRIMARY};border-radius:24px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:36px;">
                                        <p style="margin:0 0 6px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.85);">Optimized Annual Target</p>
                                        <p style="margin:0 0 28px;font-size:48px;font-weight:900;color:#ffffff;letter-spacing:-0.04em;">${formatCurrency(projection.optimizedRevenue)}</p>

                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tr>
                                                <td width="50%" valign="top" style="padding-right:8px;">
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(255,255,255,0.95);border-radius:16px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:24px;">
                                                                <p style="margin:0 0 16px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Baseline / Current</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Projected Revenue Range</p>
                                                                <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:${SLATE_900};">${formatCurrency(projection.currentRevenue)}</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Occupancy Target</p>
                                                                <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:${SLATE_900};">${data.baseline.occupancy ? `${data.baseline.occupancy}%` : 'Market Average'}</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Growth Projection</p>
                                                                <p style="margin:0;font-size:18px;font-weight:700;color:${SLATE_400};">Baseline</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="50%" valign="top" style="padding-left:8px;">
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:16px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:24px;">
                                                                <p style="margin:0 0 16px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Suite Capacity Optimized</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Projected Revenue Range</p>
                                                                <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:${SLATE_900};">${escapeHtml(intel?.optimizedProjection?.revenueRange || formatCurrency(projection.optimizedRevenue))}</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Occupancy Target</p>
                                                                <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:${SLATE_900};">${escapeHtml(intel?.optimizedProjection?.occupancyTarget || 'N/A')}</p>
                                                                <p style="margin:0 0 4px;font-size:9px;font-weight:700;text-transform:uppercase;color:${SLATE_500};">Optimized Growth Projection</p>
                                                                <p style="margin:0;font-size:18px;font-weight:700;color:${PRIMARY};">+${liftPct}%</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('5.', 'Revenue Lift Summary', 'Net Annual Impact')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-left:8px solid ${PRIMARY};border-radius:16px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:28px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tr>
                                                <td width="33%" align="center" style="padding:8px;">
                                                    <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE_500};">Baseline Revenue</p>
                                                    <p style="margin:0;font-size:28px;font-weight:900;color:${SLATE_400};text-decoration:line-through;">${formatCurrency(projection.currentRevenue)}</p>
                                                </td>
                                                <td width="33%" align="center" style="padding:8px;">
                                                    <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Optimized Revenue</p>
                                                    <p style="margin:0;font-size:32px;font-weight:900;color:${PRIMARY};">${formatCurrency(projection.optimizedRevenue)}</p>
                                                </td>
                                                <td width="33%" align="center" style="padding:8px;">
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:16px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:16px;">
                                                                <p style="margin:0 0 4px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Net Revenue Lift</p>
                                                                <p style="margin:0;font-size:32px;font-weight:900;color:${PRIMARY};">+${formatCurrency(revenueLift)}</p>
                                                                <p style="margin:4px 0 0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};opacity:0.7;">Per Annum</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="margin:24px 0 0;font-size:13px;font-weight:700;color:rgba(0,0,0,0.8);text-align:center;text-transform:uppercase;letter-spacing:0.02em;">
                                            "With professional optimization, this property has the potential to outperform the current market average by approximately ${liftPct - 5}–${liftPct + 5}%."
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('6.', 'Design & Amenity Strategy', 'Visual Revenue Enhancement Preview™')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;border-collapse:collapse;">
                                <tr>
                                    <td align="right">
                                        <p style="margin:0;font-size:24px;font-weight:900;color:${PRIMARY};">+${formatCurrency(projection.designLift || 0)}</p>
                                        <p style="margin:0;font-size:10px;font-weight:700;color:${SLATE_500};text-transform:uppercase;">Estimated Value Lift</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                <tr>
                                    <td width="50%" valign="top" style="padding-right:10px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:3px solid rgba(59,130,246,0.2);border-radius:20px;border-collapse:collapse;">
                                            <tr>
                                                <td>
                                                    <img src="${escapeHtml(originalImageUrl)}" alt="Original Asset" width="100%" style="display:block;width:100%;max-width:100%;height:auto;border-radius:17px 17px 0 0;" />
                                                    <p style="margin:0;padding:8px 12px;font-size:10px;font-weight:700;color:#ffffff;background-color:rgba(59,130,246,0.75);text-transform:uppercase;letter-spacing:0.08em;">Original Asset</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;border:3px solid rgba(59,130,246,0.35);border-radius:20px;border-collapse:collapse;">
                                            <tr>
                                                <td>
                                                    <img src="${escapeHtml(enhancedImageUrl)}" alt="Optimized Target Concept" width="100%" style="display:block;width:100%;max-width:100%;height:auto;border-radius:17px 17px 0 0;" />
                                                    <p style="margin:0;padding:8px 12px;font-size:10px;font-weight:700;color:#ffffff;background-color:${PRIMARY};text-transform:uppercase;letter-spacing:0.08em;">Optimized Target Concept</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="50%" valign="top" style="padding-left:10px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:20px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:24px;">
                                                    <p style="margin:0 0 12px;font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;color:${SLATE_900};">${escapeHtml(designTitle)}</p>
                                                    <p style="margin:0 0 20px;font-size:14px;color:rgba(0,0,0,0.7);line-height:1.6;">${escapeHtml(designRecommendation)}</p>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;border-collapse:collapse;">
                                                        <tr>${designTagCells}</tr>
                                                    </table>
                                                    <p style="margin:0;font-size:12px;font-weight:700;font-style:italic;color:${PRIMARY};">"${escapeHtml(designImpact)}"</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('7.', 'Listing Optimization Strategy', 'Performance Copy & SEO Stacking')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                <tr>
                                    <td width="50%" valign="top" style="padding-right:10px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:16px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:24px;">
                                                    <p style="margin:0 0 16px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Proposed Title Strategy</p>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;background-color:${ROSE_50};border:1px solid ${ROSE_100};border-radius:12px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:14px;">
                                                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;color:#be123c;">Standard (Ineffective)</p>
                                                                <p style="margin:0;font-size:15px;color:${ROSE_900};text-decoration:line-through;opacity:0.6;">${escapeHtml(badTitle)}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ecfdf5;border:1px solid #a7f3d0;border-radius:12px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:14px;">
                                                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;color:${EMERALD};">Optimized (Suite Capacity Standard)</p>
                                                                <p style="margin:0;font-size:15px;font-weight:900;color:#065f46;">${escapeHtml(goodTitle)}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="50%" valign="top" style="padding-left:10px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid ${SLATE_200};border-radius:16px;border-collapse:collapse;">
                                            <tr>
                                                <td style="padding:24px;">
                                                    <p style="margin:0 0 16px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;color:${PRIMARY};">Description Logic</p>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                                        ${descriptionItems}
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            ${renderSectionHeader('8.', 'Why Suite Capacity?', 'Institutional Management Unlock')}

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#000000;border-radius:24px;border-collapse:collapse;">
                                <tr>
                                    <td style="padding:36px;color:#ffffff;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tr>
                                                <td width="50%" valign="top" style="padding-right:16px;">
                                                    <p style="margin:0 0 16px;font-size:28px;font-weight:900;line-height:1.1;letter-spacing:-0.03em;color:#ffffff;">${escapeHtml(whyHeadline)}.</p>
                                                    <p style="margin:0 0 24px;font-size:16px;color:rgba(255,255,255,0.7);line-height:1.6;">${escapeHtml(whyBody)}</p>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                                        <tr>${whyFeatureRows[0]}</tr>
                                                        <tr>${whyFeatureRows[1]}</tr>
                                                    </table>
                                                </td>
                                                <td width="50%" valign="top" style="padding-left:16px;">
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;background-color:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:20px;border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding:24px;">
                                                                <p style="margin:0;font-size:16px;font-weight:700;font-style:italic;color:#ffffff;line-height:1.5;">"Professional management isn't a cost — it's the only way to capture the remaining 30%+ of your property's value."</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                                        <tr>
                                                            <td style="padding-bottom:12px;">
                                                                <a href="${escapeHtml(strategyCallUrl)}" style="display:block;background-color:${PRIMARY};color:#ffffff;text-decoration:none;padding:16px 24px;border-radius:50px;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;text-align:center;">Book Strategy Session</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.5);text-align:center;">Or reply to this email to speak with a property strategist directly.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding:32px 35px;border-top:1px solid ${SLATE_200};background-color:${SLATE_50};">
                            <p style="margin:0 0 6px;font-size:12px;font-weight:900;color:${SLATE_900};">Suite Capacity®</p>
                            <p style="margin:0;font-size:12px;color:${SLATE_500};">The centralized STR operating platform combining revenue intelligence and local expertise.</p>
                            <p style="margin:16px 0 0;font-size:11px;color:${SLATE_400};">Generated by Suite Capacity Intel® · Real-Time Market Data Active</p>
                            <p style="margin:12px 0 0;font-size:11px;color:${SLATE_400};">This report is based on real-time market data and AI-generated intelligence for your specific property. Results may vary based on implementation and market conditions.</p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
