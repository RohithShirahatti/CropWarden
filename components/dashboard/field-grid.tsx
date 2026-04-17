"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Bot } from "lucide-react"

interface CellData {
  row: number
  col: number
  disease: number
  moisture: number
  scanned: boolean
  isRobotPosition: boolean
}

function getHealthColor(disease: number): string {
  if (disease <= 25) return "bg-emerald-500/20 border-emerald-500/50"
  if (disease <= 50) return "bg-yellow-500/20 border-yellow-500/50"
  if (disease <= 75) return "bg-orange-500/20 border-orange-500/50"
  return "bg-red-500/20 border-red-500/50"
}

function getHealthTextColor(disease: number): string {
  if (disease <= 25) return "text-emerald-400"
  if (disease <= 50) return "text-yellow-400"
  if (disease <= 75) return "text-orange-400"
  return "text-red-400"
}

function GridCell({ cell }: { cell: CellData }) {
  const healthColor = getHealthColor(cell.disease)
  const healthTextColor = getHealthTextColor(cell.disease)

  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        aspect-square rounded-lg border-2 shadow-md
        transition-all duration-200 hover:scale-105 hover:shadow-lg
        ${healthColor}
        ${cell.isRobotPosition ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-background shadow-sky-400/40 shadow-lg" : ""}
      `}
    >
      {/* Robot indicator */}
      {cell.isRobotPosition && (
        <div className="absolute -top-1.5 -right-1.5 bg-sky-500 rounded-full p-1 shadow-md z-10">
          <Bot className="h-3 w-3 text-white" />
        </div>
      )}

      {/* Scanned checkmark */}
      {cell.scanned && !cell.isRobotPosition && (
        <div className="absolute top-1 left-1 bg-emerald-500 rounded-full p-0.5 shadow-sm">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </div>
      )}

      {/* Coordinates */}
      <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground/80">
        ({cell.row},{cell.col})
      </span>

      {/* Disease percentage */}
      <span className={`text-sm sm:text-base font-bold leading-tight ${healthTextColor}`}>
        {cell.disease}%
      </span>
      <span className="text-[7px] sm:text-[8px] text-muted-foreground uppercase tracking-wider">
        Disease
      </span>

      {/* Moisture percentage */}
      <div className="flex items-center gap-0.5 mt-0.5">
        <span className="text-[9px] sm:text-[10px] text-sky-400 font-semibold">
          {cell.moisture}%
        </span>
        <span className="text-[7px] sm:text-[8px] text-muted-foreground">
          H2O
        </span>
      </div>
    </div>
  )
}

function Legend() {
  return (
    <div className="mt-6 pt-4 border-t border-border">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
        {/* Healthy - Green */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-emerald-500/40 border-2 border-emerald-500" />
          <span className="text-muted-foreground">Healthy (0-25%)</span>
        </div>

        {/* Good - Yellow */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-yellow-500/40 border-2 border-yellow-500" />
          <span className="text-muted-foreground">Good (26-50%)</span>
        </div>

        {/* At Risk - Orange */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-orange-500/40 border-2 border-orange-500" />
          <span className="text-muted-foreground">At Risk (51-75%)</span>
        </div>

        {/* Critical - Red */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-500/40 border-2 border-red-500" />
          <span className="text-muted-foreground">Critical (76-100%)</span>
        </div>

        {/* Robot Position */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-card ring-2 ring-sky-400 ring-offset-1 ring-offset-background" />
          <span className="text-muted-foreground">Robot Position</span>
        </div>

        {/* Scanned */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-emerald-500 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </div>
          <span className="text-muted-foreground">Scanned</span>
        </div>
      </div>
    </div>
  )
}

export function FieldGrid() {
  // Generate 5x5 grid data with sample values
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

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Field Map (5x5 Grid)</CardTitle>
        <p className="text-sm text-muted-foreground">
          Visual representation of farm health status and robot location
        </p>
      </CardHeader>
      <CardContent>
        {/* 5x5 Grid */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 max-w-md mx-auto">
          {gridData.flat().map((cell) => (
            <GridCell key={`${cell.row}-${cell.col}`} cell={cell} />
          ))}
        </div>

        {/* Legend below the grid */}
        <Legend />
      </CardContent>
    </Card>
  )
}
