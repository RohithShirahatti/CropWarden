import { AppLayout } from "@/components/layout/app-layout"
import { FieldGrid } from "@/components/dashboard/field-grid"
import { SensorCards } from "@/components/dashboard/sensor-cards"

export default function CropMonitoringPage() {
  return (
    <AppLayout>
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Crop Monitoring</h1>
          <p className="text-muted-foreground mt-1">Real-time monitoring of all crop fields and sensors</p>
        </div>

        <div className="space-y-6">
          <section>
            <SensorCards />
          </section>
          
          <section>
            <FieldGrid />
          </section>
        </div>
      </div>
    </AppLayout>
  )
}
