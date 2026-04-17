"use client"

import { useState, useEffect } from "react"
import { Link2, Clock, CheckCircle2, Loader2, Copy, ExternalLink, Box } from "lucide-react"

interface Transaction {
  id: string
  status: "pending" | "confirmed"
  timestamp: string
  blockNumber?: number
}

export function BlockchainDetailsCard() {
  const [copied, setCopied] = useState(false)
  
  // Simulated transaction data
  const [transaction, setTransaction] = useState<Transaction>({
    id: "0x8f7d3b2c1a9e5f4d6b8c0a2e4f6d8b0c2a4e6f8d",
    status: "pending",
    timestamp: new Date().toISOString(),
  })

  // Simulate transaction confirmation
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransaction((prev) => ({
        ...prev,
        status: "confirmed",
        blockNumber: 18547892,
      }))
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(transaction.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`
  }

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Link2 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Blockchain Details</h3>
          <p className="text-xs text-muted-foreground">Latest smart contract transaction</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Transaction ID */}
        <div className="rounded-xl bg-secondary/50 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Transaction ID
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`https://etherscan.io/tx/${transaction.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>View</span>
              </a>
            </div>
          </div>
          <p className="font-mono text-sm text-foreground break-all">
            {truncateHash(transaction.id)}
          </p>
        </div>

        {/* Status and Timestamp Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Status */}
          <div className="rounded-xl bg-secondary/50 p-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </span>
            <div className="flex items-center gap-2">
              {transaction.status === "pending" ? (
                <>
                  <Loader2 className="h-5 w-5 text-yellow-500 animate-spin" />
                  <span className="font-semibold text-yellow-500">Pending</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-semibold text-emerald-500">Confirmed</span>
                </>
              )}
            </div>
          </div>

          {/* Timestamp */}
          <div className="rounded-xl bg-secondary/50 p-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Timestamp
            </span>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-foreground text-sm">
                {formatTimestamp(transaction.timestamp)}
              </span>
            </div>
          </div>
        </div>

        {/* Block Number (shown when confirmed) */}
        {transaction.status === "confirmed" && transaction.blockNumber && (
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-foreground">Block Number</span>
              </div>
              <span className="font-mono font-semibold text-emerald-500">
                #{transaction.blockNumber.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Network Info */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">Network</span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-foreground">Ethereum Mainnet</span>
          </div>
        </div>
      </div>
    </div>
  )
}
