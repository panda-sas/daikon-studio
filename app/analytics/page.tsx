import { NavHeader } from '@/components/nav-header'
import { AppSidebar } from '@/components/app-sidebar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROCCurveChart } from '@/components/charts/roc-curve-chart'
import { PRCurveChart } from '@/components/charts/pr-curve-chart'
import { ScaffoldDiversityChart } from '@/components/charts/scaffold-diversity-chart'
import { NuisanceDistributionChart } from '@/components/charts/nuisance-distribution-chart'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Analytics Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive model performance metrics and dataset insights
              </p>
            </div>

            <Tabs defaultValue="cage-fusion" className="space-y-6">
              <TabsList>
                <TabsTrigger value="cage-fusion">CAGE-Fusion</TabsTrigger>
                <TabsTrigger value="datasets">Datasets</TabsTrigger>
                <TabsTrigger value="performance">Overall Performance</TabsTrigger>
              </TabsList>

              <TabsContent value="cage-fusion" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ROC Curve</CardTitle>
                      <CardDescription>
                        Receiver Operating Characteristic - AUC: 0.942
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ROCCurveChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Precision-Recall Curve</CardTitle>
                      <CardDescription>
                        PR-AUC: 0.887 - Excellent performance on imbalanced data
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PRCurveChart />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Nuisance Compound Distribution</CardTitle>
                    <CardDescription>
                      Classification breakdown of 10,000 compounds in test set
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NuisanceDistributionChart />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardDescription>Aggregator Detection</CardDescription>
                      <CardTitle className="text-2xl">95.3%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardDescription>Luciferase Inhibitor</CardDescription>
                      <CardTitle className="text-2xl">93.1%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardDescription>Reactive Compounds</CardDescription>
                      <CardTitle className="text-2xl">96.8%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardDescription>Promiscuous Binders</CardDescription>
                      <CardTitle className="text-2xl">91.4%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="datasets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Scaffold Diversity Analysis</CardTitle>
                    <CardDescription>
                      Top 8 molecular scaffolds in active compound library
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScaffoldDiversityChart />
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>MoleculeNet</CardTitle>
                      <CardDescription>Public benchmark dataset</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Compounds</span>
                        <span className="font-medium">437,929</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Properties</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tasks</span>
                        <span className="font-medium">17</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Nuisance Dataset</CardTitle>
                      <CardDescription>Curated nuisance compounds</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Compounds</span>
                        <span className="font-medium">10,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Categories</span>
                        <span className="font-medium">4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Annotations</span>
                        <span className="font-medium">15,234</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Custom Uploads</CardTitle>
                      <CardDescription>User-contributed datasets</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Datasets</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Compounds</span>
                        <span className="font-medium">5,847</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Upload</span>
                        <span className="font-medium">2 days ago</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Model Inference</CardTitle>
                      <CardDescription>Average processing time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">1.2s</div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Per molecule with attention maps
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Throughput</CardTitle>
                      <CardDescription>Daily processing capacity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">72,000</div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Molecules per day
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>API Uptime</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">99.97%</div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Industry-leading reliability
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
