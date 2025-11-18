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
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Shield, Atom, Sparkles, FileText, AlertTriangle, Brain } from 'lucide-react'

const apps = [
  {
    id: 'cage-fusion',
    name: 'CAGE-Fusion',
    description: 'Gated Co-Attention Graph Embedding Fusion for nuisance compound detection',
    icon: Shield,
    category: 'AI Models',
    status: 'Production',
    href: '/apps/cage-fusion',
    features: ['Attention Maps', 'Multi-class Classification', 'Explainable AI'],
  },
  {
    id: 'boltz-2',
    name: 'Boltz-2',
    description: 'Binding affinity prediction across comprehensive target library',
    icon: Atom,
    category: 'Molecule Tools',
    status: 'Production',
    href: '/apps/boltz-2',
    features: ['Target Screening', 'Affinity Ranking', '3D Visualization'],
  },
  {
    id: 'fragmentstein',
    name: 'Fragmentstein',
    description: 'Fragment recombination and molecular growth generator',
    icon: Sparkles,
    category: 'Molecule Tools',
    status: 'Production',
    href: '/apps/fragmentstein',
    features: ['Fragment Library', 'De Novo Design', 'Property Optimization'],
  },
  {
    id: 'pains',
    name: 'PAINS Filter',
    description: 'Pan-Assay Interference Compounds detection and filtering',
    icon: AlertTriangle,
    category: 'Molecule Tools',
    status: 'Production',
    href: '/apps/pains',
    features: ['Rule-based Detection', 'ML Classification', 'Liability Flagging'],
  },
  {
    id: 'summarizer',
    name: 'Document Summarizer',
    description: 'AI-powered analysis of scientific literature and research papers',
    icon: FileText,
    category: 'AI Models',
    status: 'Production',
    href: '/apps/summarizer',
    features: ['Entity Extraction', 'Pathway Mapping', 'Multi-format Support'],
  },
]

export default function AppsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">All Applications</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive suite of AI-powered tools for drug discovery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apps.map((app) => {
                const Icon = app.icon
                return (
                  <Card key={app.id} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle>{app.name}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {app.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {app.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm">
                        {app.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Key Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {app.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild className="flex-1">
                          <Link href={app.href}>Launch App</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={`/docs/models/${app.id}`}>Model Card</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
