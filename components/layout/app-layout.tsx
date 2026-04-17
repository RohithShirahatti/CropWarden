"use client"

import { Sidebar } from "./sidebar"
import { TopNavbar } from "./top-navbar"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content Area with left margin for sidebar */}
      <div className="lg:pl-64 transition-all duration-300">
        {/* Top Navigation */}
        <TopNavbar />
        
        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  )
}
