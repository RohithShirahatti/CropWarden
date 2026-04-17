"use client"

import { Activity, CheckCircle2, AlertTriangle } from "lucide-react"

interface AIHealthCardProps {
  status: "healthy" | "diseased"
  confidence: number
  lastUpdated: string
}

export function AIHealthCard({ status, confidence, lastUpdated }: AIHealthCardProps) {
  const isHealthy = status === "healthy"

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
      {/* Subtle gradient overlay */}
      <div 
        className={`absolute inset-0 opacity-5 ${
          isHealthy 
            ? "bg-gradient-to-br from-emerald-500 to-emerald-600" 
            : "bg-gradient-to-br from-red-500 to-red-600"
        }`} 
      />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Activity className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            AI Diagnosis Result
          </span>
        </div>

        {/* Main Status */}
        <div className="flex items-center gap-4">
          <div 
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              isHealthy 
                ? "bg-emerald-500/15 text-emerald-500" 
                : "bg-red-500/15 text-red-500"
            }`}
          >
            {isHealthy ? (
              <CheckCircle2 className="h-8 w-8" />
            ) : (
              <AlertTriangle className="h-8 w-8" />
            )}
          </div>
          
          <div>
            <h3 
              className={`text-2xl font-bold tracking-tight ${
                isHealthy ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {isHealthy ? "Healthy" : "Diseased"}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Current crop health status
            </p>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">AI Confidence</span>
            <span className="font-semibold text-foreground">{confidence}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                isHealthy ? "bg-emerald-500" : "bg-red-500"
              }`}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <div className={`h-1.5 w-1.5 rounded-full ${isHealthy ? "bg-emerald-500" : "bg-red-500"} animate-pulse`} />
          <span>Last analyzed: {lastUpdated}</span>
        </div>
      </div>
    </div>
  )
}
