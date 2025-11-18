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
import Link from 'next/link'
import { BookOpen, Code, Layers, Zap, FileCode, GraduationCap } from 'lucide-react'

const sections = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials',
    icon: GraduationCap,
    links: [
      { title: 'Introduction to DAIKON Studio', href: '/docs/intro' },
      { title: 'First Analysis Tutorial', href: '/docs/tutorial' },
      { title: 'Understanding the Dashboard', href: '/docs/dashboard' },
    ],
  },
  {
    title: 'Model Documentation',
    description: 'Detailed model cards and architecture',
    icon: Layers,
    links: [
      { title: 'CAGE-Fusion Model Card', href: '/docs/models/cage-fusion' },
      { title: 'Boltz-2 Model Card', href: '/docs/models/boltz-2' },
      { title: 'All Model Cards', href: '/docs/models' },
    ],
  },
  {
    title: 'API Reference',
    description: 'REST API endpoints and SDK',
    icon: Code,
    links: [
      { title: 'Authentication', href: '/docs/api/auth' },
      { title: 'Prediction Endpoints', href: '/docs/api/predict' },
      { title: 'API Rate Limits', href: '/docs/api/limits' },
    ],
  },
  {
    title: 'Integration Guides',
    description: 'Connect with external tools',
    icon: Zap,
    links: [
      { title: 'Python SDK', href: '/docs/integrations/python' },
      { title: 'KNIME Integration', href: '/docs/integrations/knime' },
      { title: 'JavaScript Client', href: '/docs/integrations/js' },
    ],
  },
  {
    title: 'Code Examples',
    description: 'Sample notebooks and scripts',
    icon: FileCode,
    links: [
      { title: 'Batch Processing', href: '/docs/examples/batch' },
      { title: 'Custom Workflows', href: '/docs/examples/workflows' },
      { title: 'Data Visualization', href: '/docs/examples/viz' },
    ],
  },
  {
    title: 'Best Practices',
    description: 'Guidelines and recommendations',
    icon: BookOpen,
    links: [
      { title: 'Dataset Preparation', href: '/docs/best-practices/data' },
      { title: 'Model Selection', href: '/docs/best-practices/models' },
      { title: 'Performance Optimization', href: '/docs/best-practices/performance' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive guides, API references, and tutorials for DAIKON Studio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <Card key={section.title} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{section.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block text-sm hover:text-primary transition-colors py-1"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-accent/30">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="default">Contact Support</Button>
                <Button variant="outline">Join Community</Button>
                <Button variant="outline">Report an Issue</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
