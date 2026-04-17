"use client"

import { Shield, AlertTriangle, FileCheck, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface StatusCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  status: "active" | "inactive" | "warning"
}

function StatusCard({ title, value, description, icon, status }: StatusCardProps) {
  const statusStyles = {
    active: {
      badge: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
      glow: "bg-emerald-500/10",
      icon: "bg-emerald-500/10 text-emerald-500",
    },
    inactive: {
      badge: "bg-red-500/15 text-red-500 border-red-500/30",
      glow: "bg-red-500/10",
      icon: "bg-red-500/10 text-red-500",
    },
    warning: {
      badge: "bg-yellow-500/15 text-yellow-500 border-yellow-500/30",
      glow: "bg-yellow-500/10",
      icon: "bg-yellow-500/10 text-yellow-500",
    },
  }

  const styles = statusStyles[status]

  return (
    <div className="relative group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}>
            {icon}
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${styles.badge}`}>
            {value}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function InsuranceStatusCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatusCard
        title="Insurance Status"
        value="Active"
        description="Policy #CW-2024-0847 is currently active and provides full coverage"
        icon={<Shield className="h-6 w-6" />}
        status="active"
      />
      
      <StatusCard
        title="Risk Level"
        value="Low"
        description="Based on current weather patterns and crop health indicators"
        icon={<AlertTriangle className="h-6 w-6" />}
        status="active"
      />
      
      <StatusCard
        title="Claim Eligibility"
        value="Eligible"
        description="You meet all requirements for submitting a claim if needed"
        icon={<FileCheck className="h-6 w-6" />}
        status="active"
      />
    </div>
  )
}
