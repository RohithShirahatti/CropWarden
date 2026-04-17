import { AppLayout } from "@/components/layout/app-layout"
import { InsuranceStatusCards } from "@/components/insurance/insurance-status-cards"
import { SmartClaimCard } from "@/components/insurance/smart-claim-card"
import { BlockchainDetailsCard } from "@/components/insurance/blockchain-details-card"
import { Shield, Leaf } from "lucide-react"

export default function InsurancePage() {
  return (
    <AppLayout>
      <div className="px-4 py-6 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Smart Crop Insurance</h1>
              <p className="text-muted-foreground mt-0.5">
                Blockchain-powered agricultural insurance with automated claims
              </p>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <section className="mb-8">
          <InsuranceStatusCards />
        </section>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Smart Claim Card */}
          <section>
            <SmartClaimCard />
          </section>

          {/* Blockchain Details */}
          <section>
            <BlockchainDetailsCard />
          </section>
        </div>

        {/* Coverage Overview */}
        <section className="mt-8">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Coverage Overview</h3>
                <p className="text-xs text-muted-foreground">Your current policy details</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-secondary/50 p-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Policy Number
                  </span>
                  <p className="font-mono font-semibold text-foreground">CW-2024-0847</p>
                </div>
                
                <div className="rounded-xl bg-secondary/50 p-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Coverage
                  </span>
                  <p className="font-semibold text-foreground">$1,200,000</p>
                </div>
                
                <div className="rounded-xl bg-secondary/50 p-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Premium
                  </span>
                  <p className="font-semibold text-foreground">$2,400/month</p>
                </div>
                
                <div className="rounded-xl bg-secondary/50 p-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Valid Until
                  </span>
                  <p className="font-semibold text-foreground">Dec 31, 2024</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Drought Protection</span>
                    <span className="text-xs font-semibold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/15">
                      Covered
                    </span>
                  </div>
                </div>
                
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Pest Damage</span>
                    <span className="text-xs font-semibold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/15">
                      Covered
                    </span>
                  </div>
                </div>
                
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Weather Events</span>
                    <span className="text-xs font-semibold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/15">
                      Covered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
