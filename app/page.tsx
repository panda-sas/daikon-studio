import { NavHeader } from '@/components/nav-header'
import { AppSidebar } from '@/components/app-sidebar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, BarChart3, FileUp, Sparkles, Atom, Brain, FileText, Shield } from 'lucide-react'
import Link from 'next/link'

const recentActivities = [
  {
    title: 'CAGE-Fusion Analysis',
    description: 'Nuisance compound screening completed',
    time: '2 hours ago',
    icon: Shield,
    color: 'bg-blue-500/20 text-blue-700',
  },
  {
    title: 'Boltz-2 Prediction',
    description: 'Binding affinity calculation finished',
    time: '5 hours ago',
    icon: Atom,
    color: 'bg-teal-500/20 text-teal-700',
  },
  {
    title: 'Dataset Upload',
    description: 'MoleculeNet data processed',
    time: '1 day ago',
    icon: FileUp,
    color: 'bg-green-500/20 text-green-700',
  },
  {
    title: 'Document Summary',
    description: 'Research paper analyzed',
    time: '2 days ago',
    icon: FileText,
    color: 'bg-indigo-500/20 text-indigo-700',
  },
]

const quickLaunchApps = [
  {
    title: 'CAGE-Fusion',
    description: 'Nuisance compound detection with attention maps',
    href: '/apps/cage-fusion',
    icon: Shield,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Boltz-2',
    description: 'Binding affinity prediction',
    href: '/apps/boltz-2',
    icon: Atom,
    color: 'from-teal-500/20 to-cyan-500/20',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-500/10',
  },
  {
    title: 'Document Summarizer',
    description: 'AI-powered paper analysis',
    href: '/apps/summarizer',
    icon: FileText,
    color: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10',
  },
  {
    title: 'Fragmentstein',
    description: 'Fragment recombination tool',
    href: '/apps/fragmentstein',
    icon: Sparkles,
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-500/10',
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hero Section */}
            <div className="space-y-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-2xl blur-3xl -z-10"></div>
              <h1 className="text-4xl font-bold tracking-tight text-balance bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Welcome to DAIKON Studio
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Your integrated AI platform for drug discovery informatics. 
                Analyze molecules, predict binding affinities, and accelerate your research.
              </p>
            </div>

            {/* Quick Launch Apps */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Quick Launch</h2>
                <Button variant="ghost" asChild>
                  <Link href="/apps">View all apps</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLaunchApps.map((app) => {
                  const Icon = app.icon
                  return (
                    <Card key={app.href} className={`hover:border-primary/50 transition-all hover:shadow-lg bg-gradient-to-br ${app.color} border-2`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${app.bgColor}`}>
                            <Icon className={`h-5 w-5 ${app.iconColor}`} />
                          </div>
                          <CardTitle className="text-base">{app.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          {app.description}
                        </CardDescription>
                        <Button variant="outline" size="sm" asChild className="w-full hover:bg-primary hover:text-primary-foreground">
                          <Link href={app.href}>Launch</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Stats & Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    <CardTitle>Recent Activity</CardTitle>
                  </div>
                  <CardDescription>Your latest experiments and analyses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <div className={`p-2 rounded-lg ${activity.color}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {activity.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {activity.description}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {activity.time}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Getting Started */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Getting Started</CardTitle>
                <CardDescription>
                  New to DAIKON Studio? Start with these resources
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="default" asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  <Link href="/docs">View Documentation</Link>
                </Button>
                <Button variant="outline" asChild className="border-teal-500/50 text-teal-700 hover:bg-teal-50">
                  <Link href="/apps">Explore Mini-Apps</Link>
                </Button>
                <Button variant="outline" asChild className="border-green-500/50 text-green-700 hover:bg-green-50">
                  <Link href="/datasets">Browse Datasets</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
