import SiteShell from '@/components/layout/site-shell';
import { RevenueIntelligenceWizard } from '@/components/wizard/intelligence-wizard';

export default function WizardPage() {
    return (
        <SiteShell>
            <div className="min-h-screen pt-24 pb-12 bg-background/50">
                <div className="container mx-auto px-6 text-center space-y-4 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Revenue Intelligence Audit</h1>
                    <p className="text-secondary-foreground text-lg">Detailed analysis of your STR asset performance and growth potential.</p>
                </div>

                <RevenueIntelligenceWizard />
            </div>
        </SiteShell>
    );
}
