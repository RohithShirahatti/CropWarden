import { AppLayout } from "@/components/layout/app-layout"
import { AnalyticsSection } from "@/components/dashboard/analytics-section"
import { TrendCharts } from "@/components/dashboard/trend-charts"

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Analytics</h1>
          <p className="text-muted-foreground mt-1">Detailed analytics and performance metrics for your farm</p>
        </div>

        <div className="space-y-6">
          <section>
            <TrendCharts />
          </section>
          
          <section>
            <AnalyticsSection />
          </section>
        </div>
      </div>
    </AppLayout>
  )
}
