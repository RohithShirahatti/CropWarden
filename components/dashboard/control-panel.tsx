"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Droplets, Bell, Zap, Timer, Power, Settings2 } from "lucide-react"

export function ControlPanel() {
  const [irrigationActive, setIrrigationActive] = useState(false)
  const [alertsEnabled, setAlertsEnabled] = useState(true)
  const [autoMode, setAutoMode] = useState(true)

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Control Panel</CardTitle>
            <p className="text-sm text-muted-foreground">Manage irrigation and notifications</p>
          </div>
          <Badge variant="outline" className={`${autoMode ? "bg-primary/20 text-primary border-primary/30" : "bg-secondary text-secondary-foreground"}`}>
            {autoMode ? "AI Mode" : "Manual"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <Label htmlFor="auto-mode" className="text-sm font-medium">AI Auto Mode</Label>
                <p className="text-xs text-muted-foreground">Let AI manage operations</p>
              </div>
            </div>
            <Switch id="auto-mode" checked={autoMode} onCheckedChange={setAutoMode} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10">
                <Droplets className="h-5 w-5 text-chart-2" />
              </div>
              <div>
                <Label htmlFor="irrigation" className="text-sm font-medium">Irrigation System</Label>
                <p className="text-xs text-muted-foreground">{irrigationActive ? "Active" : "Standby"}</p>
              </div>
            </div>
            <Switch id="irrigation" checked={irrigationActive} onCheckedChange={setIrrigationActive} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <div>
                <Label htmlFor="alerts" className="text-sm font-medium">Alert Notifications</Label>
                <p className="text-xs text-muted-foreground">{alertsEnabled ? "Enabled" : "Disabled"}</p>
              </div>
            </div>
            <Switch id="alerts" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                <Timer className="h-5 w-5 text-chart-4" />
              </div>
              <div>
                <Label className="text-sm font-medium">Schedule</Label>
                <p className="text-xs text-muted-foreground">Next: 6:00 AM</p>
              </div>
            </div>
            <Select defaultValue="auto">
              <SelectTrigger className="w-24 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="off">Off</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button className="flex-1 gap-2" disabled={!irrigationActive && autoMode}>
            <Droplets className="h-4 w-4" />
            Start Irrigation
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <Power className="h-4 w-4" />
            Emergency Stop
          </Button>
          <Button variant="secondary" className="flex-1 gap-2">
            <Settings2 className="h-4 w-4" />
            Configure
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
