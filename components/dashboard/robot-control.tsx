"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Square, 
  Bot,
  ScanLine,
  AlertTriangle
} from "lucide-react"

export function RobotControl() {
  const [activeButton, setActiveButton] = useState<string | null>(null)
  
  // Demo data
  const surveyProgress = 68
  const scannedCount = 17
  const criticalCount = 3

  const handleButtonPress = (direction: string) => {
    setActiveButton(direction)
  }

  const handleButtonRelease = () => {
    setActiveButton(null)
  }

  return (
    <Card className="border-0 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-white">Robot Control Center</CardTitle>
            <p className="text-sm text-sky-100">Manual navigation controls</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-6">
        {/* Joystick Controls */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Up Button */}
            <button
              onMouseDown={() => handleButtonPress("up")}
              onMouseUp={handleButtonRelease}
              onMouseLeave={handleButtonRelease}
              onTouchStart={() => handleButtonPress("up")}
              onTouchEnd={handleButtonRelease}
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-150 ${
                activeButton === "up"
                  ? "bg-emerald-400 scale-95 shadow-lg shadow-emerald-400/50"
                  : "bg-emerald-500 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400/40"
              }`}
              aria-label="Move Up"
            >
              <ChevronUp className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
            </button>

            {/* Left Button */}
            <button
              onMouseDown={() => handleButtonPress("left")}
              onMouseUp={handleButtonRelease}
              onMouseLeave={handleButtonRelease}
              onTouchStart={() => handleButtonPress("left")}
              onTouchEnd={handleButtonRelease}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-150 ${
                activeButton === "left"
                  ? "bg-amber-400 scale-95 shadow-lg shadow-amber-400/50"
                  : "bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400/40"
              }`}
              aria-label="Move Left"
            >
              <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
            </button>

            {/* Stop Button (Center) */}
            <button
              onMouseDown={() => handleButtonPress("stop")}
              onMouseUp={handleButtonRelease}
              onMouseLeave={handleButtonRelease}
              onTouchStart={() => handleButtonPress("stop")}
              onTouchEnd={handleButtonRelease}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-150 ${
                activeButton === "stop"
                  ? "bg-slate-400 scale-95 shadow-lg shadow-slate-400/50"
                  : "bg-slate-500 hover:bg-slate-400 hover:shadow-lg hover:shadow-slate-400/40"
              }`}
              aria-label="Stop"
            >
              <Square className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" />
            </button>

            {/* Right Button */}
            <button
              onMouseDown={() => handleButtonPress("right")}
              onMouseUp={handleButtonRelease}
              onMouseLeave={handleButtonRelease}
              onTouchStart={() => handleButtonPress("right")}
              onTouchEnd={handleButtonRelease}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-150 ${
                activeButton === "right"
                  ? "bg-sky-400 scale-95 shadow-lg shadow-sky-400/50"
                  : "bg-sky-500 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400/40"
              }`}
              aria-label="Move Right"
            >
              <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
            </button>

            {/* Down Button */}
            <button
              onMouseDown={() => handleButtonPress("down")}
              onMouseUp={handleButtonRelease}
              onMouseLeave={handleButtonRelease}
              onTouchStart={() => handleButtonPress("down")}
              onTouchEnd={handleButtonRelease}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-150 ${
                activeButton === "down"
                  ? "bg-rose-400 scale-95 shadow-lg shadow-rose-400/50"
                  : "bg-rose-500 hover:bg-rose-400 hover:shadow-lg hover:shadow-rose-400/40"
              }`}
              aria-label="Move Down"
            >
              <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
            <span className={`w-2 h-2 rounded-full ${activeButton ? "bg-emerald-400 animate-pulse" : "bg-white/50"}`} />
            <span className="text-sky-100">
              {activeButton ? `Moving ${activeButton.charAt(0).toUpperCase() + activeButton.slice(1)}` : "Ready"}
            </span>
          </div>
        </div>

        {/* Survey Progress Section */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-sky-100">Survey Progress</span>
            <span className="text-2xl font-bold text-white">{surveyProgress}%</span>
          </div>
          <div className="relative">
            <Progress 
              value={surveyProgress} 
              className="h-3 bg-white/20 [&>div]:bg-gradient-to-r [&>div]:from-emerald-400 [&>div]:to-emerald-300"
            />
          </div>
          <p className="mt-2 text-xs text-sky-200">{Math.round(surveyProgress / 4)} of 25 cells scanned</p>
        </div>

        {/* Stat Cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Scanned Count Card */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/50">
              <ScanLine className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-100 uppercase tracking-wide">Scanned Count</p>
              <p className="text-3xl font-bold text-white">{scannedCount}</p>
            </div>
          </div>

          {/* Critical Count Card */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/30 backdrop-blur-sm border border-rose-400/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/50">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-rose-100 uppercase tracking-wide">Critical Count</p>
              <p className="text-3xl font-bold text-white">{criticalCount}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
