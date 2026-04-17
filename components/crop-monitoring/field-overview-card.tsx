"use client"

import { MapPin, Check, Bot, Maximize2 } from "lucide-react"

interface CellData {
  row: number
  col: number
  disease: number
  moisture: number
  scanned: boolean
  isRobotPosition: boolean
}

function getHealthColor(disease: number) {
  if (disease <= 25) return { 
    bg: "bg-emerald-500/20", 
    border: "border-emerald-500/40",
    text: "text-emerald-400"
  }
  if (disease <= 50) return { 
    bg: "bg-yellow-500/20", 
    border: "border-yellow-500/40",
    text: "text-yellow-400"
  }
  if (disease <= 75) return { 
    bg: "bg-orange-500/20", 
    border: "border-orange-500/40",
    text: "text-orange-400"
  }
  return { 
    bg: "bg-red-500/20", 
    border: "border-red-500/40",
    text: "text-red-400"
  }
}

function GridCell({ cell }: { cell: CellData }) {
  const healthStyle = getHealthColor(cell.disease)

  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        aspect-square rounded-xl border-2
        transition-all duration-200 hover:scale-105
        ${healthStyle.bg} ${healthStyle.border}
        ${cell.isRobotPosition ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-card" : ""}
      `}
    >
      {cell.isRobotPosition && (
        <div className="absolute -top-1.5 -right-1.5 bg-sky-500 rounded-full p-1 shadow-lg shadow-sky-500/30 z-10">
          <Bot className="h-3 w-3 text-white" />
        </div>
      )}

      {cell.scanned && !cell.isRobotPosition && (
        <div className="absolute top-1 left-1 bg-emerald-500 rounded-full p-0.5">
          <Check className="h-2 w-2 text-white" strokeWidth={3} />
        </div>
      )}

      <span className={`text-lg font-bold ${healthStyle.text}`}>
        {cell.disease}%
      </span>
      <span className="text-[9px] text-muted-foreground uppercase tracking-wider">
        Disease
      </span>
    </div>
  )
}

export function FieldOverviewCard() {
  const generateGridData = (): CellData[][] => {
    const robotRow = 2
    const robotCol = 3

    const diseaseValues = [
      [12, 8, 22, 45, 18],
      [5, 32, 58, 71, 25],
      [15, 48, 85, 62, 38],
      [28, 19, 42, 78, 55],
      [10, 6, 14, 35, 22],
    ]

    const moistureValues = [
      [65, 72, 58, 45, 68],
      [70, 55, 42, 38, 62],
      [68, 48, 32, 44, 52],
      [58, 64, 50, 35, 46],
      [72, 78, 66, 54, 60],
    ]

    const scannedCells = [
      [true, true, true, true, false],
      [true, true, true, true, false],
      [true, true, true, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ]

    const grid: CellData[][] = []
    for (let row = 0; row < 5; row++) {
      const rowData: CellData[] = []
      for (let col = 0; col < 5; col++) {
        rowData.push({
          row,
          col,
          disease: diseaseValues[row][col],
          moisture: moistureValues[row][col],
          scanned: scannedCells[row][col],
          isRobotPosition: row === robotRow && col === robotCol,
        })
      }
      grid.push(rowData)
    }
    return grid
  }

  const gridData = generateGridData()
  
  // Calculate stats
  const allCells = gridData.flat()
  const scannedCount = allCells.filter(c => c.scanned).length
  const criticalCount = allCells.filter(c => c.disease > 75).length
  const avgDisease = Math.round(allCells.reduce((sum, c) => sum + c.disease, 0) / allCells.length)

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
            <MapPin className="h-5 w-5 text-sky-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Field Overview</h3>
            <p className="text-xs text-muted-foreground">5x5 Grid - Real-time status</p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 className="h-3.5 w-3.5" />
          <span>Expand</span>
        </button>
      </div>

      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-secondary/50 p-3 text-center">
            <p className="text-2xl font-bold text-foreground">{scannedCount}/25</p>
            <p className="text-xs text-muted-foreground">Scanned</p>
          </div>
          <div className="rounded-xl bg-secondary/50 p-3 text-center">
            <p className="text-2xl font-bold text-red-500">{criticalCount}</p>
            <p className="text-xs text-muted-foreground">Critical</p>
          </div>
          <div className="rounded-xl bg-secondary/50 p-3 text-center">
            <p className="text-2xl font-bold text-foreground">{avgDisease}%</p>
            <p className="text-xs text-muted-foreground">Avg Disease</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-2 max-w-sm mx-auto">
          {gridData.flat().map((cell) => (
            <GridCell key={`${cell.row}-${cell.col}`} cell={cell} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-emerald-500/40 border border-emerald-500" />
              <span className="text-muted-foreground">Healthy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-yellow-500/40 border border-yellow-500" />
              <span className="text-muted-foreground">Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-orange-500/40 border border-orange-500" />
              <span className="text-muted-foreground">At Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-red-500/40 border border-red-500" />
              <span className="text-muted-foreground">Critical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-sky-500 flex items-center justify-center">
                <Bot className="h-2 w-2 text-white" />
              </div>
              <span className="text-muted-foreground">Robot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
