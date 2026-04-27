import SiteShell from '@/components/layout/site-shell';
import { RevenueIntelligenceWizard } from '@/components/wizard/intelligence-wizard';

export default function WizardPage() {
    return (
        <SiteShell>
            <div className="min-h-screen pt-24 pb-12 bg-background/50">
                <div className="container mx-auto px-6 text-center space-y-4 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">STR Blueprint</h1>
                    <p className="text-black opacity-70 text-lg">Detailed analysis of your STR asset performance and growth potential.</p>
                </div>

                <RevenueIntelligenceWizard />
            </div>
        </SiteShell>
    );
}
