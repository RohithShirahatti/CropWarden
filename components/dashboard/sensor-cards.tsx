"use client"

import { Droplets, Thermometer, ShieldAlert, Leaf } from "lucide-react"

interface MetricCardProps {
  label: string
  value: string
  unit: string
  icon: React.ReactNode
  bgColor: string
  iconColor: string
}

function MetricCard({ label, value, unit, icon, bgColor, iconColor }: MetricCardProps) {
  return (
    <div
      className={`${bgColor} rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {label}
          </span>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-4xl font-bold tracking-tight text-foreground">
              {value}
            </span>
            <span className="text-lg font-medium text-muted-foreground">
              {unit}
            </span>
          </div>
        </div>
        <div className={`${iconColor} p-2.5 rounded-xl bg-background/50`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export function SensorCards() {
  const metrics: MetricCardProps[] = [
    {
      label: "Soil Moisture",
      value: "68",
      unit: "%",
      icon: <Droplets className="h-6 w-6" />,
      bgColor: "bg-sky-500/10",
      iconColor: "text-sky-500",
    },
    {
      label: "Temperature",
      value: "24",
      unit: "°C",
      icon: <Thermometer className="h-6 w-6" />,
      bgColor: "bg-amber-500/10",
      iconColor: "text-amber-500",
    },
    {
      label: "Disease Risk",
      value: "12",
      unit: "%",
      icon: <ShieldAlert className="h-6 w-6" />,
      bgColor: "bg-rose-500/10",
      iconColor: "text-rose-500",
    },
    {
      label: "Plants Scanned",
      value: "847",
      unit: "",
      icon: <Leaf className="h-6 w-6" />,
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  )
}
