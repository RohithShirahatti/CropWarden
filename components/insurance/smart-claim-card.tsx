"use client"

import { useState } from "react"
import { Zap, CheckCircle2, Loader2, ArrowRight, Sparkles } from "lucide-react"

export function SmartClaimCard() {
  const [isTriggering, setIsTriggering] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleTriggerClaim = async () => {
    setIsTriggering(true)
    // Simulate blockchain transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsTriggering(false)
    setIsSuccess(true)
  }

  const handleReset = () => {
    setIsSuccess(false)
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Smart Contract Claim</h3>
          <p className="text-xs text-muted-foreground">Automated blockchain-based insurance claim</p>
        </div>
      </div>

      <div className="p-6">
        {isSuccess ? (
          <div className="space-y-6">
            {/* Success State */}
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 border-2 border-emerald-500/30">
                  <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-xl font-semibold text-foreground">Claim Triggered Successfully</h4>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Your smart contract claim has been submitted to the blockchain. Transaction is being processed.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary/80"
            >
              <span>Submit Another Claim</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Info Section */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    How It Works
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Triggering a smart claim initiates an automated verification process on the blockchain. 
                    Once conditions are verified, payouts are processed instantly without manual intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* Claim Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Claim Details
              </h4>
              <div className="grid gap-3">
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Policy Coverage</span>
                  <span className="text-sm font-semibold text-foreground">$1,200,000</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Estimated Payout</span>
                  <span className="text-sm font-semibold text-emerald-500">$45,000</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Processing Time</span>
                  <span className="text-sm font-semibold text-foreground">~2-5 minutes</span>
                </div>
              </div>
            </div>

            {/* Trigger Button */}
            <button
              onClick={handleTriggerClaim}
              disabled={isTriggering}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isTriggering ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing Transaction...</span>
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  <span>Trigger Smart Claim</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
