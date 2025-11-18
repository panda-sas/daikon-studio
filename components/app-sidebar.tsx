'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Database, Atom, Brain, Workflow, Code, Shield } from 'lucide-react'

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Database, label: 'Data Integration', href: '/data-integration' },
  { icon: Atom, label: 'Molecule Tools', href: '/molecule-tools' },
  { icon: Brain, label: 'AI Models', href: '/ai-models' },
  { icon: Workflow, label: 'Pipelines', href: '/pipelines' },
  { icon: Code, label: 'Playground', href: '/playground' },
  { icon: Shield, label: 'Admin', href: '/admin' },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-card">
      <nav className="flex flex-col gap-1 p-4">
        <div className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          App Workspace
        </div>
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary'
                  : 'text-muted-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
