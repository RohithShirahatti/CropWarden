'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      position="top-right"
      expand={false}
      richColors
      closeButton
      duration={5000}
      gap={8}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg group-[.toaster]:backdrop-blur-sm',
          title: 'group-[.toast]:font-semibold',
          description: 'group-[.toast]:text-muted-foreground group-[.toast]:text-sm',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          closeButton: 'group-[.toast]:bg-background group-[.toast]:border-border group-[.toast]:text-foreground',
          error: 'group-[.toaster]:bg-red-950/90 group-[.toaster]:border-red-800 group-[.toaster]:text-red-100',
          success: 'group-[.toaster]:bg-emerald-950/90 group-[.toaster]:border-emerald-800 group-[.toaster]:text-emerald-100',
          warning: 'group-[.toaster]:bg-amber-950/90 group-[.toaster]:border-amber-800 group-[.toaster]:text-amber-100',
          info: 'group-[.toaster]:bg-sky-950/90 group-[.toaster]:border-sky-800 group-[.toaster]:text-sky-100',
        },
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
