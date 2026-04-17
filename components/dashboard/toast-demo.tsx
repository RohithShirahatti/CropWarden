"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  XCircle, 
  Wifi, 
  WifiOff,
  Droplets,
  Bug,
  Bell
} from "lucide-react"

export function ToastDemo() {
  const showConnectionError = () => {
    toast.error("Connection error - retrying...", {
      description: "Unable to reach the sensor network. Attempting reconnection.",
      icon: <WifiOff className="h-5 w-5" />,
      duration: 6000,
    })
  }

  const showConnectionSuccess = () => {
    toast.success("Connection restored", {
      description: "All sensors are now online and reporting data.",
      icon: <Wifi className="h-5 w-5" />,
    })
  }

  const showIrrigationWarning = () => {
    toast.warning("Low soil moisture detected", {
      description: "Field A2 moisture level at 18%. Consider activating irrigation.",
      icon: <Droplets className="h-5 w-5" />,
      action: {
        label: "Irrigate Now",
        onClick: () => {
          toast.success("Irrigation started", {
            description: "Field A2 irrigation system activated.",
          })
        },
      },
    })
  }

  const showDiseaseAlert = () => {
    toast.error("Critical: Disease detected", {
      description: "High disease risk (78%) identified in Field B3. Immediate action required.",
      icon: <Bug className="h-5 w-5" />,
      duration: 10000,
      action: {
        label: "View Details",
        onClick: () => {
          toast.info("Opening disease analysis...", {
            description: "AI analysis report for Field B3.",
          })
        },
      },
    })
  }

  const showInfoNotification = () => {
    toast.info("Survey complete", {
      description: "Robot has finished scanning all 25 field cells.",
      icon: <Info className="h-5 w-5" />,
    })
  }

  const showMultipleToasts = () => {
    toast.info("Starting system diagnostics...", {
      icon: <Info className="h-5 w-5" />,
    })
    
    setTimeout(() => {
      toast.success("Sensor network: OK", {
        icon: <CheckCircle2 className="h-5 w-5" />,
      })
    }, 1000)
    
    setTimeout(() => {
      toast.success("Robot connection: OK", {
        icon: <CheckCircle2 className="h-5 w-5" />,
      })
    }, 2000)
    
    setTimeout(() => {
      toast.warning("Weather API: Slow response", {
        icon: <AlertTriangle className="h-5 w-5" />,
      })
    }, 3000)
  }

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bell className="h-5 w-5 text-primary" />
          Notification System Demo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Test different notification types and severity levels.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={showConnectionError}
            className="flex items-center gap-2 border-red-800/50 text-red-400 hover:bg-red-950/50 hover:text-red-300"
          >
            <XCircle className="h-4 w-4" />
            Error
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={showConnectionSuccess}
            className="flex items-center gap-2 border-emerald-800/50 text-emerald-400 hover:bg-emerald-950/50 hover:text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4" />
            Success
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={showIrrigationWarning}
            className="flex items-center gap-2 border-amber-800/50 text-amber-400 hover:bg-amber-950/50 hover:text-amber-300"
          >
            <AlertTriangle className="h-4 w-4" />
            Warning
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={showInfoNotification}
            className="flex items-center gap-2 border-sky-800/50 text-sky-400 hover:bg-sky-950/50 hover:text-sky-300"
          >
            <Info className="h-4 w-4" />
            Info
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={showDiseaseAlert}
            className="flex items-center gap-2 border-red-800/50 text-red-400 hover:bg-red-950/50 hover:text-red-300"
          >
            <Bug className="h-4 w-4" />
            Critical Alert
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={showMultipleToasts}
            className="flex items-center gap-2 border-primary/50 text-primary hover:bg-primary/10"
          >
            <Bell className="h-4 w-4" />
            Multi-Stack
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
