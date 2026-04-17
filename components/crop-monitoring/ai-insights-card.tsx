"use client"

import { Brain, TrendingUp, AlertCircle, Lightbulb, ArrowRight } from "lucide-react"

interface InsightItem {
  label: string
  value: string
  icon: React.ReactNode
  color: string
}

interface AIInsightsCardProps {
  riskPercentage: number
  suggestedAction: string
  insights: InsightItem[]
}

export function AIInsightsCard({ riskPercentage, suggestedAction, insights }: AIInsightsCardProps) {
  const getRiskColor = (risk: number) => {
    if (risk <= 25) return { text: "text-emerald-500", bg: "bg-emerald-500", label: "Low Risk" }
    if (risk <= 50) return { text: "text-yellow-500", bg: "bg-yellow-500", label: "Moderate Risk" }
    if (risk <= 75) return { text: "text-orange-500", bg: "bg-orange-500", label: "High Risk" }
    return { text: "text-red-500", bg: "bg-red-500", label: "Critical Risk" }
  }

  const riskInfo = getRiskColor(riskPercentage)

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Brain className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI Insights</h3>
          <p className="text-xs text-muted-foreground">Intelligent recommendations</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Risk Assessment */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className={`h-4 w-4 ${riskInfo.text}`} />
              <span className="text-sm font-medium text-foreground">Risk Assessment</span>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${riskInfo.bg}/15 ${riskInfo.text}`}>
              {riskInfo.label}
            </span>
          </div>
          
          {/* Risk Gauge */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ${riskInfo.bg}`}
                    style={{ width: `${riskPercentage}%` }}
                  />
                </div>
              </div>
              <span className={`text-2xl font-bold tabular-nums ${riskInfo.text}`}>
                {riskPercentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Suggested Action */}
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Suggested Action
              </span>
              <p className="text-sm text-foreground leading-relaxed">
                {suggestedAction}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Metrics
          </h4>
          <div className="grid gap-3">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${insight.color}`}>
                    {insight.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{insight.label}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{insight.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
          <span>View Detailed Analysis</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
