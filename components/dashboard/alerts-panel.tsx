"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react"

interface Alert {
  id: string
  type: "critical" | "warning" | "info" | "success"
  title: string
  message: string
  time: string
  field?: string
}

export function AlertsPanel() {
  const alerts: Alert[] = [
    {
      id: "1",
      type: "critical",
      title: "Low Soil Moisture",
      message: "Soil moisture dropped below critical threshold. Immediate irrigation recommended.",
      time: "5 min ago",
      field: "Field C1",
    },
    {
      id: "2",
      type: "warning",
      title: "High Temperature Alert",
      message: "Temperature exceeding optimal range for corn growth. Monitor closely.",
      time: "1 hour ago",
      field: "Field A2",
    },
    {
      id: "3",
      type: "success",
      title: "Irrigation Completed",
      message: "Scheduled irrigation cycle completed successfully.",
      time: "2 hours ago",
      field: "Field B1",
    },
    {
      id: "4",
      type: "info",
      title: "AI Recommendation",
      message: "Based on weather forecast, consider advancing harvest schedule by 3 days.",
      time: "3 hours ago",
    },
  ]

  const typeConfig = {
    critical: {
      icon: <AlertTriangle className="h-4 w-4" />,
      badge: "bg-destructive/20 text-destructive border-destructive/30",
      border: "border-l-destructive",
    },
    warning: {
      icon: <AlertTriangle className="h-4 w-4" />,
      badge: "bg-accent/20 text-accent border-accent/30",
      border: "border-l-accent",
    },
    success: {
      icon: <CheckCircle2 className="h-4 w-4" />,
      badge: "bg-primary/20 text-primary border-primary/30",
      border: "border-l-primary",
    },
    info: {
      icon: <Info className="h-4 w-4" />,
      badge: "bg-chart-2/20 text-chart-2 border-chart-2/30",
      border: "border-l-chart-2",
    },
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Active Alerts</CardTitle>
            <p className="text-sm text-muted-foreground">Recent notifications and recommendations</p>
          </div>
          <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
            {alerts.filter(a => a.type === "critical").length} Critical
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const config = typeConfig[alert.type]
          return (
            <div
              key={alert.id}
              className={`relative flex items-start gap-3 p-3 rounded-lg border border-border bg-secondary/20 border-l-4 ${config.border}`}
            >
              <div className={`flex-shrink-0 mt-0.5 ${alert.type === "critical" ? "text-destructive" : alert.type === "warning" ? "text-accent" : alert.type === "success" ? "text-primary" : "text-chart-2"}`}>
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm">{alert.title}</span>
                  {alert.field && (
                    <Badge variant="outline" className="text-xs px-1.5 py-0">
                      {alert.field}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{alert.message}</p>
                <span className="text-xs text-muted-foreground mt-2 block">{alert.time}</span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0">
                <X className="h-3 w-3" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          )
        })}
        <Button variant="outline" className="w-full mt-2">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  )
}
