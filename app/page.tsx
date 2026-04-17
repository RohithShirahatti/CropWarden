import { DashboardHeader } from "@/components/dashboard/header"
import { SensorCards } from "@/components/dashboard/sensor-cards"
import { FieldGrid } from "@/components/dashboard/field-grid"
import { ControlPanel } from "@/components/dashboard/control-panel"
import { TrendCharts } from "@/components/dashboard/trend-charts"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"
import { RobotControl } from "@/components/dashboard/robot-control"
import { AnalyticsSection } from "@/components/dashboard/analytics-section"
import { ToastDemo } from "@/components/dashboard/toast-demo"

export default function CropWardenDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">CropWarden Dashboard</h1>
          <p className="text-muted-foreground mt-1">AI-powered agricultural monitoring and management system</p>
        </div>

        <div className="space-y-6">
          {/* Sensor Summary Cards */}
          <section>
            <SensorCards />
          </section>

          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Charts - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <TrendCharts />
            </div>

            {/* Alerts Panel - Takes 1 column */}
            <div className="lg:col-span-1">
              <AlertsPanel />
            </div>
          </div>

          {/* Analytics Section */}
          <section>
            <AnalyticsSection />
          </section>

          {/* Field Monitoring Grid */}
          <section>
            <FieldGrid />
          </section>

          {/* Control Panels */}
          <div className="grid gap-6 lg:grid-cols-2">
            <section>
              <RobotControl />
            </section>
            <section>
              <ControlPanel />
            </section>
          </div>

          {/* Toast Notification Demo */}
          <section>
            <ToastDemo />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>CropWarden AI Agricultural System</p>
            <div className="flex items-center gap-4">
              <span>Last sync: 2 minutes ago</span>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>System Online</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
