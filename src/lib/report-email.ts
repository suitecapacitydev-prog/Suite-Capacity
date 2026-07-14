import { WizardData, RevenueProjection } from '@/types/wizard';
import { MARKETS } from '@/data/markets';

export function generateReportEmailHTML(data: WizardData, projection: RevenueProjection): string {
    const intel = projection.intelligence;
    const liftPct = Math.round((projection.optimizedRevenue / projection.currentRevenue - 1) * 100);
    const revenueLift = projection.optimizedRevenue - projection.currentRevenue;

    const selectedMarket = MARKETS.find(m => m.id === data.property.marketId) || 
                          MARKETS.find(m => data.property.address.toLowerCase().includes(m.name.toLowerCase()));

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    const getPositioningContent = () => {
        if (intel?.positioning) {
            return intel.positioning;
        }
        return {
            description: "No real-time intelligence data was received for this property. This typically happens if the address is too vague or if there is an issue with the AI connection.",
            marketPositioning: "Analysis Pending",
            strengths: "Pending real-world verification",
            limitations: "Pending professional audit"
        };
    };

    const pos = getPositioningContent();

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; line-height: 1.6; }
            .container { max-width: 700px; margin: 0 auto; background-color: #ffffff; }
            .content { padding: 40px 35px; }
            .header { text-align: center; padding: 40px 35px 20px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; }
            .logo { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: #3b82f6; margin-bottom: 15px; }
            .title { font-size: 36px; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 15px; }
            .subtitle { font-size: 16px; font-weight: 600; color: #475569; }
            .property-card { background-color: #f1f5f9; padding: 35px; border-radius: 20px; margin-bottom: 40px; border: 1px solid #e2e8f0; }
            .property-label { font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #64748b; margin-bottom: 8px; }
            .property-name { font-size: 20px; font-weight: 900; margin-bottom: 5px; }
            .property-address { font-size: 16px; font-weight: 500; color: #334155; }
            .section-header { font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #3b82f6; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 25px; margin-top: 35px; }
            .section-header.first { margin-top: 0; }
            .section-title { font-size: 14px; font-weight: 900; margin-bottom: 8px; }
            .section-description { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 15px; }
            .section-subtitle { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; margin-top: 15px; }
            .stat-box { background-color: #f8fafc; padding: 20px; border-radius: 15px; margin-bottom: 15px; border: 1px solid #e2e8f0; }
            .stat-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 8px; }
            .stat-value { font-size: 26px; font-weight: 900; color: #0f172a; }
            .stat-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
            .stat-row:last-child { border-bottom: none; }
            .stat-row-label { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; }
            .stat-row-value { font-size: 18px; font-weight: 900; }
            .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
            .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 25px; }
            .positioning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px; background-color: #f1f5f9; padding: 30px; border-radius: 20px; border: 1px solid #e2e8f0; }
            .positioning-col { }
            .positioning-col-border { border-left: 2px solid #cbd5e1; padding-left: 25px; }
            .highlight-box { background-color: #000; color: #fff; padding: 45px 35px; border-radius: 30px; text-align: center; margin-bottom: 35px; position: relative; overflow: hidden; }
            .highlight-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6; margin-bottom: 12px; }
            .highlight-value { font-size: 56px; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 5px; }
            .highlight-subtext { font-size: 13px; color: rgba(255, 255, 255, 0.7); }
            .opportunity-item { background-color: #fef2f2; padding: 18px; border-radius: 15px; margin-bottom: 12px; border-left: 4px solid #ef4444; border: 1px solid #fecaca; }
            .opportunity-title { font-size: 14px; font-weight: 900; color: #7f1d1d; margin-bottom: 4px; }
            .opportunity-desc { font-size: 13px; color: #b91c1c; line-height: 1.5; }
            .lift-summary { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; border-radius: 20px; border-left: 6px solid #3b82f6; }
            .lift-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; }
            .lift-label { font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; }
            .lift-value { font-size: 20px; font-weight: 900; }
            .lift-value.strikethrough { text-decoration: line-through; color: #94a3b8; }
            .lift-value.primary { color: #3b82f6; }
            .market-index { background-color: #f1f5f9; padding: 30px; border-radius: 20px; margin-bottom: 35px; border: 1px solid #e2e8f0; }
            .market-index-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
            .market-index-title { font-size: 16px; font-weight: 900; }
            .market-metrics { display: flex; gap: 25px; flex-wrap: wrap; justify-content: flex-end; }
            .market-metric { text-align: center; }
            .market-metric-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 6px; }
            .market-metric-value { font-size: 24px; font-weight: 900; color: #0f172a; }
            .cta-button { display: inline-block; background-color: #3b82f6; color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 30px; }
            .footer { text-align: center; padding: 40px 35px; border-top: 1px solid #e2e8f0; background-color: #f8fafc; font-size: 12px; color: #64748b; }
            .footer-title { font-weight: 900; margin-bottom: 5px; }
            .baseline-comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
            .comparison-card { background-color: #f8fafc; padding: 25px; border-radius: 15px; border: 1px solid #e2e8f0; }
            .comparison-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 15px; }
            .comparison-item { margin-bottom: 15px; }
            .comparison-item-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 4px; }
            .comparison-item-value { font-size: 18px; font-weight: 900; color: #0f172a; }
            .badge { display: inline-block; background-color: #dbeafe; color: #1e40af; font-size: 8px; font-weight: 900; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 5px; }
            .season-bars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; }
            .season-bar { text-align: center; }
            .season-label { font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 8px; }
            .bar { height: 8px; background-color: #e2e8f0; border-radius: 4px; overflow: hidden; }
            .bar-fill { height: 100%; background-color: #3b82f6; transition: width 0.3s ease; }
            .design-strategy { background-color: #f1f5f9; padding: 30px; border-radius: 20px; margin-bottom: 35px; border: 1px solid #e2e8f0; }
            .design-section { margin-bottom: 20px; }
            .design-section:last-child { margin-bottom: 0; }
            .accent-primary { color: #3b82f6; }
            .accent-success { color: #10b981; }
            .accent-danger { color: #ef4444; }
            @media (max-width: 600px) {
                .content { padding: 25px 20px; }
                .grid-2, .grid-4 { grid-template-columns: 1fr; }
                .positioning-grid { grid-template-columns: 1fr; }
                .positioning-col-border { border-left: none; padding-left: 0; border-top: 2px solid #cbd5e1; padding-top: 20px; }
                .market-index-header { flex-direction: column; align-items: flex-start; }
                .market-metrics { justify-content: flex-start; }
                .baseline-comparison { grid-template-columns: 1fr; }
                .highlight-value { font-size: 42px; }
                .title { font-size: 28px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <div class="logo">Suite Capacity Intel®</div>
                <div class="title">Revenue Intelligence Report</div>
            </div>

            <!-- Main Content -->
            <div class="content">
                <!-- Property Card -->
                <div class="property-card">
                    <div class="property-label">Property Analysis Prepared For:</div>
                    <div class="property-name">${data.lead.name}</div>
                    <div class="property-address">${data.property.address}</div>
                </div>

                <!-- Market Index Analysis -->
                ${selectedMarket ? `
                <div class="market-index">
                    <div class="market-index-header">
                        <div>
                            <div class="section-title">${selectedMarket.name} Analysis</div>
                            <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">${selectedMarket.detail}</div>
                        </div>
                        <div class="market-metrics">
                            <div class="market-metric">
                                <div class="market-metric-label">Market Multiplier</div>
                                <div class="market-metric-value">${selectedMarket.multiplier || '1.15'}x</div>
                            </div>
                            <div class="market-metric">
                                <div class="market-metric-label">Demand Index</div>
                                <div class="market-metric-value accent-success">${Math.round((projection.marketComparison?.demandIndex || 0))}%</div>
                            </div>
                            <div class="market-metric">
                                <div class="market-metric-label">Status</div>
                                <div style="margin-top: 6px;">
                                    <span class="badge">${selectedMarket.status || 'Active'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}

                <!-- Section 1: Property Positioning -->
                <div class="section-header first">1. Property Positioning Snapshot</div>
                <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 20px;">Market Context & Asset Assessment</div>

                <div class="positioning-grid">
                    <div class="positioning-col">
                        <div class="section-subtitle">Asset Description</div>
                        <p style="font-size: 14px; line-height: 1.6; color: #475569;">${pos.description}</p>
                        
                        <div class="section-subtitle">Market Positioning</div>
                        <p style="font-size: 16px; font-weight: 900; color: #0f172a;">${pos.marketPositioning || 'Premium-Tier Potential'}</p>
                    </div>
                    <div class="positioning-col positioning-col-border">
                        <div class="section-subtitle accent-success">Key Strengths</div>
                        <p style="font-size: 14px; line-height: 1.6; color: #475569;">${pos.strengths}</p>
                        
                        <div class="section-subtitle accent-danger">Key Limitations</div>
                        <p style="font-size: 14px; line-height: 1.6; color: #475569;">${pos.limitations}</p>
                    </div>
                </div>

                <!-- Section 2: Current Market Performance -->
                <div class="section-header">2. Current Market Performance (Baseline)</div>
                <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 20px;">Historical Asset Performance</div>

                <div class="stat-box">
                    <div class="stat-label">Est. Annual Revenue</div>
                    <div class="stat-value">${formatCurrency(projection.currentRevenue)}</div>
                </div>

                <div class="season-bars">
                    <div class="season-bar">
                        <div class="season-label">Peak Season</div>
                        <div class="bar">
                            <div class="bar-fill" style="width: ${projection.performanceBreakdown?.peakContribution || 70}%"></div>
                        </div>
                        <div style="font-size: 13px; font-weight: 900; margin-top: 6px;">${projection.performanceBreakdown?.peakContribution || 70}%</div>
                    </div>
                    <div class="season-bar">
                        <div class="season-label">Shoulder</div>
                        <div class="bar">
                            <div class="bar-fill" style="width: ${projection.performanceBreakdown?.shoulderContribution || 20}%"></div>
                        </div>
                        <div style="font-size: 13px; font-weight: 900; margin-top: 6px;">${projection.performanceBreakdown?.shoulderContribution || 20}%</div>
                    </div>
                    <div class="season-bar">
                        <div class="season-label">Off-Season</div>
                        <div class="bar">
                            <div class="bar-fill" style="width: ${projection.performanceBreakdown?.offSeasonContribution || 10}%"></div>
                        </div>
                        <div style="font-size: 13px; font-weight: 900; margin-top: 6px;">${projection.performanceBreakdown?.offSeasonContribution || 10}%</div>
                    </div>
                    <div class="season-bar">
                        <div class="season-label">Market Data</div>
                        <div style="background-color: #e2e8f0; padding: 8px; border-radius: 10px; text-align: center; font-size: 10px; font-weight: 700;">
                            <span class="badge" style="background-color: #dbeafe; color: #1e40af;">PriceLabs® Live</span>
                        </div>
                    </div>
                </div>

                <p style="font-size: 13px; color: #475569; line-height: 1.7; font-style: italic; margin-top: 20px;">
                    "Based on real-time data for ${selectedMarket?.name || 'your local market'}, this property is currently performing within its baseline bracket. There is a verified ${liftPct}% upside available through active institutional management."
                </p>

                <!-- Section 3: Missed Opportunities -->
                <div class="section-header">3. Missed Revenue Opportunities</div>
                <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 20px;">Identified Leakage Areas</div>

                ${(intel?.missedOpportunities || [{ title: "Connection Required", desc: "Real-time opportunity analysis requires a valid API connection and street-level address." }]).map((opp: any) => {
                    const title = typeof opp === 'string' ? opp : opp.title;
                    const desc = typeof opp === 'string' ? '' : opp.desc;
                    return `
                    <div class="opportunity-item">
                        <div class="opportunity-title">⚡ ${title}</div>
                        ${desc ? `<div class="opportunity-desc">${desc}</div>` : ''}
                    </div>
                    `;
                }).join('')}

                <div style="background-color: #000; color: #fff; padding: 35px; border-radius: 25px; text-align: center; margin-top: 25px;">
                    <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6; margin-bottom: 8px;">Average Loss</div>
                    <div style="font-size: 36px; font-weight: 900; letter-spacing: -0.05em;">${formatCurrency(revenueLift)}</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 8px; font-weight: 600; text-transform: uppercase;">Revenue left on table annually</div>
                </div>

                <!-- Section 4: Optimized Projection -->
                <div class="section-header">4. Suite Capacity Optimized Projection</div>
                <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 20px;">Projected Delta with Institutional Management</div>

                <div class="highlight-box">
                    <div class="highlight-label">Optimized Annual Target</div>
                    <div class="highlight-value">${formatCurrency(projection.optimizedRevenue)}</div>
                    <div class="highlight-subtext">Projected Revenue with Suite Capacity Management</div>
                </div>

                <div class="baseline-comparison">
                    <div class="comparison-card">
                        <div class="comparison-label">Baseline / Current</div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Projected Revenue Range</div>
                            <div class="comparison-item-value">${formatCurrency(projection.currentRevenue)}</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Occupancy Target</div>
                            <div class="comparison-item-value">${data.baseline.occupancy ? `${data.baseline.occupancy}%` : 'Market Average'}</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Growth Projection</div>
                            <div class="comparison-item-value" style="color: #94a3b8;">Baseline</div>
                        </div>
                    </div>

                    <div class="comparison-card">
                        <div class="comparison-label">Suite Capacity Optimized</div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Projected Revenue Range</div>
                            <div class="comparison-item-value">${intel?.optimizedProjection?.revenueRange || formatCurrency(projection.optimizedRevenue)}</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Occupancy Target</div>
                            <div class="comparison-item-value">${intel?.optimizedProjection?.occupancyTarget || 'N/A'}</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-item-label">Optimized Growth Projection</div>
                            <div class="comparison-item-value accent-primary">+${liftPct}%</div>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Revenue Lift Summary -->
                <div class="lift-summary">
                    <div class="lift-row">
                        <div class="lift-label">Baseline Revenue</div>
                        <div class="lift-value strikethrough">${formatCurrency(projection.currentRevenue)}</div>
                    </div>
                    <div class="lift-row">
                        <div class="lift-label">Optimized Revenue</div>
                        <div class="lift-value primary">${formatCurrency(projection.optimizedRevenue)}</div>
                    </div>
                    <div class="lift-row" style="border: none; background-color: rgba(59, 130, 246, 0.1); padding: 15px; margin: 15px -15px -15px; border-radius: 12px;">
                        <div class="lift-label accent-primary">Net Revenue Lift</div>
                        <div class="lift-value primary" style="font-size: 24px;">+${formatCurrency(revenueLift)}</div>
                    </div>
                </div>

                <p style="font-size: 13px; font-weight: 600; color: #334155; text-align: center; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 20px;">
                    "With professional optimization, this property has the potential to outperform the current market average by approximately ${liftPct - 5}–${liftPct + 5}%."
                </p>

                <!-- Section 6: Strategy Recommendations -->
                <div class="section-header">5. Strategic Recommendations</div>

                <div class="design-strategy">
                    ${intel?.designStrategy ? `
                    <div class="design-section">
                        <div class="section-subtitle">Design & Amenity Strategy</div>
                        <p style="font-size: 14px; color: #475569; line-height: 1.7;">${intel.designStrategy.recommendation || 'Premium interior refresh and modern amenity upgrades.'}</p>
                        <div style="font-size: 12px; color: #3b82f6; font-weight: 700; margin-top: 10px;">📈 Impact: +${formatCurrency(projection.designLift || 5000)} Annual Value Lift</div>
                    </div>
                    ` : ''}

                    ${intel?.listingStrategy ? `
                    <div class="design-section">
                        <div class="section-subtitle">Listing Optimization & SEO</div>
                        <p style="font-size: 14px; font-weight: 900; color: #0f172a; margin-bottom: 8px;">Target Title Strategy:</p>
                        <p style="font-size: 14px; color: #3b82f6; font-style: italic; margin-bottom: 15px;">"${intel.listingStrategy.titleStrategy?.good || 'Experience-first, amenity-focused SEO title.'}"</p>
                        <p style="font-size: 12px; color: #475569; line-height: 1.6;">Copy optimization focuses on immediate value proposition, seasonal demand alignment, and guest experience messaging to drive conversion.</p>
                    </div>
                    ` : ''}

                    ${intel?.whySuiteCapacity ? `
                    <div class="design-section">
                        <div class="section-subtitle">Why Suite Capacity?</div>
                        <p style="font-size: 14px; color: #475569; line-height: 1.7; font-style: italic;">"${intel.whySuiteCapacity}"</p>
                    </div>
                    ` : ''}
                </div>

                <!-- Direct Booking Engine Upside -->
                <div style="background-color: #000; color: #fff; padding: 35px; border-radius: 25px; margin-bottom: 35px;">
                    <div style="font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6; margin-bottom: 12px;">Direct Booking Engine Upside</div>
                    <div style="font-size: 16px; color: #fff; margin-bottom: 15px; line-height: 1.6;">We shift 30%+ of OTA traffic to your direct portal, saving <strong>15-18%</strong> in distribution fees alone.</div>
                    <div style="display: flex; align-items: baseline; gap: 8px;">
                        <span style="font-size: 40px; font-weight: 900;">💰</span>
                        <div>
                            <div style="font-size: 28px; font-weight: 900; color: #3b82f6;">${liftPct}%</div>
                            <div style="font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.6); text-transform: uppercase; margin-top: 2px;">Commission Recovery</div>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div style="text-align: center; padding: 35px; background-color: #f1f5f9; border-radius: 20px; border: 2px solid #e2e8f0;">
                    <h3 style="font-size: 18px; font-weight: 900; margin-bottom: 15px;">Ready to activate your professional management plan?</h3>
                    <p style="font-size: 13px; color: #475569; margin-bottom: 20px;">Let's discuss how we'll implement these recommendations and capture your property's full revenue potential.</p>
                    <a href="${process.env.STRATEGY_CALL_URL || 'https://calendly.com/suitecapacity'}" class="cta-button">Book Strategy Session</a>
                    <p style="font-size: 12px; color: #64748b; margin-top: 15px;">Or reply to this email to speak with a property strategist directly.</p>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <div class="footer-title">Suite Capacity®</div>
                <p>The centralized STR operating platform combining revenue intelligence and local expertise.</p>
                <p style="margin-top: 15px; font-size: 11px; color: #94a3b8;">This report is based on real-time market data and AI-generated intelligence for your specific property. Results may vary based on implementation and market conditions.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}
