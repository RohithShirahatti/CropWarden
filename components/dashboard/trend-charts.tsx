"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const moistureData = [
  { time: "00:00", value: 65, optimal: 70 },
  { time: "04:00", value: 62, optimal: 70 },
  { time: "08:00", value: 58, optimal: 70 },
  { time: "12:00", value: 72, optimal: 70 },
  { time: "16:00", value: 68, optimal: 70 },
  { time: "20:00", value: 66, optimal: 70 },
  { time: "Now", value: 68, optimal: 70 },
]

const temperatureData = [
  { time: "00:00", temp: 18, humidity: 55 },
  { time: "04:00", temp: 16, humidity: 60 },
  { time: "08:00", temp: 20, humidity: 52 },
  { time: "12:00", temp: 28, humidity: 40 },
  { time: "16:00", temp: 26, humidity: 42 },
  { time: "20:00", temp: 22, humidity: 48 },
  { time: "Now", temp: 24.5, humidity: 45 },
]

const yieldData = [
  { month: "Jan", wheat: 0, corn: 0, soybeans: 0 },
  { month: "Feb", wheat: 0, corn: 0, soybeans: 0 },
  { month: "Mar", wheat: 12, corn: 8, soybeans: 5 },
  { month: "Apr", wheat: 28, corn: 22, soybeans: 15 },
  { month: "May", wheat: 45, corn: 38, soybeans: 28 },
  { month: "Jun", wheat: 62, corn: 55, soybeans: 42 },
]

const chartConfig = {
  value: { label: "Moisture", color: "var(--color-chart-1)" },
  optimal: { label: "Optimal", color: "var(--color-chart-2)" },
  temp: { label: "Temperature", color: "var(--color-chart-4)" },
  humidity: { label: "Humidity", color: "var(--color-chart-2)" },
  wheat: { label: "Wheat", color: "var(--color-chart-1)" },
  corn: { label: "Corn", color: "var(--color-chart-3)" },
  soybeans: { label: "Soybeans", color: "var(--color-chart-2)" },
}

export function TrendCharts() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Data Trends</CardTitle>
        <p className="text-sm text-muted-foreground">Historical sensor data and yield projections</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="moisture" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="moisture">Soil Moisture</TabsTrigger>
            <TabsTrigger value="climate">Climate</TabsTrigger>
            <TabsTrigger value="yield">Yield Forecast</TabsTrigger>
          </TabsList>

          <TabsContent value="moisture" className="space-y-4">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moistureData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
                  <YAxis tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" domain={[50, 80]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="optimal" stroke="var(--color-chart-2)" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="value" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#moistureGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="text-muted-foreground">Current Moisture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 bg-chart-2" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--color-chart-2), var(--color-chart-2) 4px, transparent 4px, transparent 8px)" }} />
                <span className="text-muted-foreground">Optimal Level</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="climate" className="space-y-4">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
                  <YAxis tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="temp" stroke="var(--color-chart-4)" strokeWidth={2} dot={{ fill: "var(--color-chart-4)", r: 4 }} />
                  <Line type="monotone" dataKey="humidity" stroke="var(--color-chart-2)" strokeWidth={2} dot={{ fill: "var(--color-chart-2)", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-4" />
                <span className="text-muted-foreground">Temperature (°C)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="text-muted-foreground">Humidity (%)</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="yield" className="space-y-4">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yieldData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
                  <YAxis tickLine={false} axisLine={false} className="text-xs fill-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="wheat" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="corn" fill="var(--color-chart-3)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="soybeans" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="text-muted-foreground">Wheat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-3" />
                <span className="text-muted-foreground">Corn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="text-muted-foreground">Soybeans</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
