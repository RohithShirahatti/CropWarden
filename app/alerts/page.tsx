import { AppLayout } from "@/components/layout/app-layout"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"

export default function AlertsPage() {
  return (
    <AppLayout>
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Alerts</h1>
          <p className="text-muted-foreground mt-1">System alerts and notifications for your agricultural operations</p>
        </div>

        <div className="space-y-6">
          <section>
            <AlertsPanel />
          </section>
        </div>
      </div>
    </AppLayout>
  )
}
