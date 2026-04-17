import { AppLayout } from "@/components/layout/app-layout"
import { SensorDataCards } from "@/components/crop-monitoring/sensor-data-cards"
import { AIHealthCard } from "@/components/crop-monitoring/ai-health-card"
import { AIInsightsCard } from "@/components/crop-monitoring/ai-insights-card"
import { FieldOverviewCard } from "@/components/crop-monitoring/field-overview-card"
import { Leaf, Clock, Zap, Target } from "lucide-react"

export default function CropMonitoringPage() {
  // Sample data - in a real app this would come from an API
  const aiHealthData = {
    status: "healthy" as const,
    confidence: 94,
    lastUpdated: "2 minutes ago"
  }

  const aiInsightsData = {
    riskPercentage: 12,
    suggestedAction: "Continue current irrigation schedule. Consider increasing nitrogen fertilizer by 10% in the eastern quadrant to optimize growth rate.",
    insights: [
      {
        label: "Scan Coverage",
        value: "68%",
        icon: <Target className="h-4 w-4 text-sky-500" />,
        color: "bg-sky-500/10"
      },
      {
        label: "Active Alerts",
        value: "3",
        icon: <Zap className="h-4 w-4 text-amber-500" />,
        color: "bg-amber-500/10"
      },
      {
        label: "Next Scan",
        value: "15 min",
        icon: <Clock className="h-4 w-4 text-primary" />,
        color: "bg-primary/10"
      },
      {
        label: "Plants Monitored",
        value: "847",
        icon: <Leaf className="h-4 w-4 text-emerald-500" />,
        color: "bg-emerald-500/10"
      }
    ]
  }

  return (
    <AppLayout>
      <div className="px-4 py-6 md:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl text-foreground">
                Crop Monitoring
              </h1>
              <p className="text-muted-foreground text-sm">
                Real-time AI-powered crop health analysis and sensor data
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Sensor Data Cards */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Sensor Readings</h2>
              <span className="text-xs text-muted-foreground">Updated 30s ago</span>
            </div>
            <SensorDataCards />
          </section>

          {/* AI Analysis Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">AI Analysis</h2>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI Processing Active</span>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <AIHealthCard {...aiHealthData} />
              <AIInsightsCard {...aiInsightsData} />
            </div>
          </section>

          {/* Field Overview */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Field Map</h2>
              <button className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                View Full Map
              </button>
            </div>
            <div className="max-w-2xl">
              <FieldOverviewCard />
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  )
}
