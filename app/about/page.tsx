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
import { Shield, Users, Zap, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-bold tracking-tight">About DAIKON Studio</h1>
              <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
                An integrated AI platform for drug discovery informatics, combining cutting-edge
                machine learning with practical cheminformatics tools.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-base leading-relaxed">
                    DAIKON Studio represents a new generation of computational drug discovery
                    platforms. By integrating state-of-the-art deep learning models with traditional
                    cheminformatics workflows, we provide researchers with powerful tools to
                    accelerate the identification of high-quality drug candidates while avoiding
                    common pitfalls in early-stage screening.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our flagship CAGE-Fusion model uses a novel gated co-attention architecture to
                    detect nuisance compounds that interfere with biological assays. Combined with
                    tools for binding prediction, fragment-based design, and automated literature
                    analysis, DAIKON Studio streamlines the entire drug discovery pipeline.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Open Science</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We believe in transparent, reproducible research. All our models are documented
                    with detailed model cards, and we provide public access to benchmark datasets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">High Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built on modern deep learning infrastructure, DAIKON Studio delivers
                    millisecond inference times and can process thousands of molecules per minute.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Explainable AI</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every prediction comes with attention maps and explanations, helping chemists
                    understand why a molecule was flagged and how to improve it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">Community Driven</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Join our growing community of computational chemists, contribute datasets, and
                    help shape the future of drug discovery informatics.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/30">
              <CardHeader>
                <CardTitle>Get Started Today</CardTitle>
                <CardDescription>
                  Ready to accelerate your drug discovery research?
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/">Explore Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/apps">View All Apps</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">Read Documentation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
