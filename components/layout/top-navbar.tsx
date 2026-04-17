"use client"

import { useState, useEffect } from "react"
import { 
  Battery, 
  BatteryLow, 
  BatteryMedium, 
  BatteryFull, 
  SignalLow, 
  SignalMedium, 
  SignalHigh, 
  Circle,
  Bell,
  Search,
  User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TopNavbar() {
  const [uptime, setUptime] = useState(0)
  const [isOnline, setIsOnline] = useState(true)
  const batteryLevel = 78
  const signalStrength = 85

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getBatteryIcon = (level: number) => {
    if (level <= 20) return <BatteryLow className="h-4 w-4 text-destructive" />
    if (level <= 50) return <BatteryMedium className="h-4 w-4 text-accent" />
    if (level <= 80) return <BatteryFull className="h-4 w-4 text-primary" />
    return <Battery className="h-4 w-4 text-primary" />
  }

  const getSignalIcon = (strength: number) => {
    if (strength <= 33) return <SignalLow className="h-4 w-4 text-destructive" />
    if (strength <= 66) return <SignalMedium className="h-4 w-4 text-accent" />
    return <SignalHigh className="h-4 w-4 text-primary" />
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left section - Search (hidden on mobile due to sidebar toggle space) */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search crops, fields, alerts..." 
              className="pl-9 bg-secondary border-border"
            />
          </div>
        </div>

        {/* Spacer for mobile */}
        <div className="md:hidden w-14" />

        {/* Right section - Status indicators and user menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Battery Indicator */}
          <div className="hidden sm:flex items-center gap-1.5" title={`Battery: ${batteryLevel}%`}>
            {getBatteryIcon(batteryLevel)}
            <span className="text-xs font-medium text-muted-foreground">
              {batteryLevel}%
            </span>
          </div>

          {/* Signal Strength */}
          <div className="hidden sm:flex items-center gap-1.5" title={`Signal: ${signalStrength}%`}>
            {getSignalIcon(signalStrength)}
            <span className="text-xs font-medium text-muted-foreground">
              {signalStrength}%
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-px bg-border" />

          {/* System Status */}
          <div className="flex items-center gap-1.5" title={isOnline ? "System Online" : "System Offline"}>
            <Circle
              className={`h-2.5 w-2.5 fill-current ${
                isOnline ? "text-primary" : "text-destructive"
              }`}
            />
            <span className={`text-xs font-medium ${isOnline ? "text-primary" : "text-destructive"}`}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-px bg-border" />

          {/* Uptime Timer */}
          <div className="hidden sm:flex items-center gap-1.5" title="System Uptime">
            <span className="text-xs text-muted-foreground">Uptime:</span>
            <span className="font-mono text-xs font-medium text-foreground">
              {formatUptime(uptime)}
            </span>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border" />

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-secondary">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
