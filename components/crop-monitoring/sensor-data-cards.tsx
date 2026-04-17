"use client"

import { 
  Droplets, 
  Thermometer, 
  Sun, 
  Wind, 
  Gauge, 
  Sprout,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react"

interface SensorDataCardProps {
  label: string
  value: number
  unit: string
  icon: React.ReactNode
  status: "normal" | "warning" | "critical"
  trend: "up" | "down" | "stable"
  trendValue?: string
  min?: number
  max?: number
}

function getStatusStyles(status: "normal" | "warning" | "critical") {
  switch (status) {
    case "normal":
      return {
        border: "border-emerald-500/30",
        glow: "shadow-emerald-500/5",
        indicator: "bg-emerald-500",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
        label: "Normal"
      }
    case "warning":
      return {
        border: "border-yellow-500/30",
        glow: "shadow-yellow-500/5",
        indicator: "bg-yellow-500",
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-500",
        label: "Warning"
      }
    case "critical":
      return {
        border: "border-red-500/30",
        glow: "shadow-red-500/5",
        indicator: "bg-red-500",
        iconBg: "bg-red-500/10",
        iconColor: "text-red-500",
        label: "Critical"
      }
  }
}

function TrendIndicator({ trend, value }: { trend: "up" | "down" | "stable"; value?: string }) {
  const icons = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    stable: <Minus className="h-3 w-3" />
  }
  
  const colors = {
    up: "text-emerald-500",
    down: "text-red-500",
    stable: "text-muted-foreground"
  }

  return (
    <div className={`flex items-center gap-1 text-xs ${colors[trend]}`}>
      {icons[trend]}
      {value && <span>{value}</span>}
    </div>
  )
}

function SensorDataCard({ 
  label, 
  value, 
  unit, 
  icon, 
  status, 
  trend, 
  trendValue,
  min,
  max 
}: SensorDataCardProps) {
  const styles = getStatusStyles(status)

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border ${styles.border} bg-card p-5 transition-all duration-300 hover:shadow-lg ${styles.glow}`}
    >
      {/* Status indicator dot */}
      <div className="absolute top-4 right-4">
        <div className={`h-2 w-2 rounded-full ${styles.indicator} animate-pulse`} />
      </div>

      {/* Icon */}
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg} mb-4`}>
        <div className={styles.iconColor}>
          {icon}
        </div>
      </div>

      {/* Label */}
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </p>

      {/* Value */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl font-bold tracking-tight text-foreground">
          {value}
        </span>
        <span className="text-lg font-medium text-muted-foreground">
          {unit}
        </span>
      </div>

      {/* Footer with trend and range */}
      <div className="mt-4 flex items-center justify-between">
        <TrendIndicator trend={trend} value={trendValue} />
        {(min !== undefined && max !== undefined) && (
          <span className="text-xs text-muted-foreground">
            Range: {min}-{max}{unit}
          </span>
        )}
      </div>

      {/* Status badge */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${styles.indicator}`} />
    </div>
  )
}

export function SensorDataCards() {
  const sensors: SensorDataCardProps[] = [
    {
      label: "Soil Moisture",
      value: 68,
      unit: "%",
      icon: <Droplets className="h-6 w-6" />,
      status: "normal",
      trend: "up",
      trendValue: "+2.3%",
      min: 40,
      max: 80
    },
    {
      label: "Temperature",
      value: 24,
      unit: "°C",
      icon: <Thermometer className="h-6 w-6" />,
      status: "normal",
      trend: "stable",
      trendValue: "0°C",
      min: 18,
      max: 32
    },
    {
      label: "Light Intensity",
      value: 850,
      unit: "lux",
      icon: <Sun className="h-6 w-6" />,
      status: "normal",
      trend: "up",
      trendValue: "+120",
      min: 400,
      max: 1200
    },
    {
      label: "Humidity",
      value: 72,
      unit: "%",
      icon: <Wind className="h-6 w-6" />,
      status: "warning",
      trend: "up",
      trendValue: "+5%",
      min: 50,
      max: 70
    },
    {
      label: "Soil pH",
      value: 6.5,
      unit: "pH",
      icon: <Gauge className="h-6 w-6" />,
      status: "normal",
      trend: "stable",
      trendValue: "0.0",
      min: 6.0,
      max: 7.0
    },
    {
      label: "Growth Rate",
      value: 12,
      unit: "mm/day",
      icon: <Sprout className="h-6 w-6" />,
      status: "normal",
      trend: "up",
      trendValue: "+2mm",
      min: 8,
      max: 15
    }
  ]

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {sensors.map((sensor) => (
        <SensorDataCard key={sensor.label} {...sensor} />
      ))}
    </div>
  )
}
