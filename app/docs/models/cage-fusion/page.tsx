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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function CAGEFusionModelCard() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/docs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Docs
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight">CAGE-Fusion Model Card</h1>
                  <p className="text-lg text-muted-foreground">
                    Gated Co-Attention Graph Embedding Fusion
                  </p>
                </div>
                <Button asChild>
                  <Link href="/apps/cage-fusion">Try Model</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>Production</Badge>
                <Badge variant="secondary">v2.1.0</Badge>
                <Badge variant="outline">Graph Neural Network</Badge>
                <Badge variant="outline">Attention Mechanism</Badge>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="training">Training Data</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="limitations">Limitations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Model Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-relaxed">
                    <p>
                      CAGE-Fusion is a deep learning model designed to identify nuisance compounds
                      that interfere with high-throughput screening assays. The model uses a novel
                      gated co-attention mechanism to fuse graph-based molecular representations with
                      functional group embeddings.
                    </p>
                    <p>
                      The model classifies compounds into four categories of problematic behaviors:
                      aggregators, luciferase inhibitors, reactive compounds, and promiscuous
                      binders. It provides attention maps that highlight which molecular features
                      contribute to each prediction, making it highly interpretable.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Multi-Class Classification</h4>
                        <p className="text-sm text-muted-foreground">
                          Simultaneous prediction of four nuisance behaviors
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Attention Visualization</h4>
                        <p className="text-sm text-muted-foreground">
                          Interpretable heatmaps showing important substructures
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Graph Neural Network</h4>
                        <p className="text-sm text-muted-foreground">
                          Operates directly on molecular graphs
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">High Accuracy</h4>
                        <p className="text-sm text-muted-foreground">
                          94.2% ROC-AUC across all categories
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="architecture" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Model Architecture</CardTitle>
                    <CardDescription>
                      Detailed description of the CAGE-Fusion neural network structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src="https://placeholder.svg?height=400&width=700&query=neural+network+architecture+diagram"
                        alt="CAGE-Fusion Architecture"
                        className="w-full h-full object-contain p-8"
                      />
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <h4 className="font-semibold mb-2">Graph Embedding Layer</h4>
                        <p className="text-muted-foreground">
                          Converts molecular graphs into fixed-size embeddings using graph
                          convolutional operations with edge features representing bond types.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Functional Group Encoder</h4>
                        <p className="text-muted-foreground">
                          Separate encoder that identifies and embeds functional groups using SMARTS
                          pattern matching and learned representations.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Gated Co-Attention Module</h4>
                        <p className="text-muted-foreground">
                          Fusion mechanism that allows the model to focus on relevant graph nodes
                          and functional groups simultaneously, producing interpretable attention
                          weights.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Classification Heads</h4>
                        <p className="text-muted-foreground">
                          Four independent output layers for each nuisance category, allowing
                          multi-label predictions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="training" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Training Dataset</CardTitle>
                    <CardDescription>
                      Curated dataset of nuisance compounds from multiple sources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Compounds</p>
                        <p className="text-2xl font-bold">10,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Aggregators</p>
                        <p className="text-2xl font-bold">342</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Luciferase Inh.</p>
                        <p className="text-2xl font-bold">218</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reactive</p>
                        <p className="text-2xl font-bold">567</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Promiscuous</p>
                        <p className="text-2xl font-bold">423</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Clean</p>
                        <p className="text-2xl font-bold">8,450</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Train Split</p>
                        <p className="text-2xl font-bold">70%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Test Split</p>
                        <p className="text-2xl font-bold">30%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-chart-1 mt-2" />
                        <div>
                          <p className="font-medium">PubChem BioAssay</p>
                          <p className="text-muted-foreground">
                            Confirmed aggregators and frequent hitters from HTS campaigns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                        <div>
                          <p className="font-medium">Literature Curation</p>
                          <p className="text-muted-foreground">
                            Manually curated compounds from peer-reviewed publications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-chart-3 mt-2" />
                        <div>
                          <p className="font-medium">Internal Screening Data</p>
                          <p className="text-muted-foreground">
                            Proprietary data from pharmaceutical company screens
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>
                      Evaluation on held-out test set of 3,000 compounds
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardDescription>Overall ROC-AUC</CardDescription>
                            <CardTitle className="text-3xl">0.942</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card>
                          <CardHeader className="pb-3">
                            <CardDescription>Overall PR-AUC</CardDescription>
                            <CardTitle className="text-3xl">0.887</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card>
                          <CardHeader className="pb-3">
                            <CardDescription>Accuracy</CardDescription>
                            <CardTitle className="text-3xl">94.2%</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card>
                          <CardHeader className="pb-3">
                            <CardDescription>F1 Score</CardDescription>
                            <CardTitle className="text-3xl">0.891</CardTitle>
                          </CardHeader>
                        </Card>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Per-Class Performance</h4>
                        <div className="space-y-3">
                          {[
                            { label: 'Aggregator', acc: '95.3%', auc: '0.96' },
                            { label: 'Luciferase Inhibitor', acc: '93.1%', auc: '0.94' },
                            { label: 'Reactive', acc: '96.8%', auc: '0.97' },
                            { label: 'Promiscuous', acc: '91.4%', auc: '0.92' },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between p-3 rounded-lg border"
                            >
                              <span className="font-medium text-sm">{item.label}</span>
                              <div className="flex gap-6 text-sm">
                                <div>
                                  <span className="text-muted-foreground mr-2">Accuracy:</span>
                                  <span className="font-mono">{item.acc}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground mr-2">ROC-AUC:</span>
                                  <span className="font-mono">{item.auc}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="usage" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Example</CardTitle>
                    <CardDescription>Python SDK for programmatic access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto">
                      <code>{`from daikon import CAGEFusion

# Initialize model
model = CAGEFusion()

# Predict from SMILES
smiles = "CC(C)Cc1ccc(cc1)C(C)C(O)=O"
results = model.predict(smiles)

# Get predictions
print(results.aggregator)      # 0.08
print(results.reactive)        # 0.91
print(results.primary_class)   # "reactive"

# Get attention maps
attention = results.get_attention_maps()
attention.plot_functional_groups()
attention.plot_atoms()`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Endpoint</CardTitle>
                    <CardDescription>REST API for direct integration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto">
                      <code>{`POST /api/v1/models/cage-fusion/predict
Content-Type: application/json

{
  "smiles": "CC(C)Cc1ccc(cc1)C(C)C(O)=O",
  "return_attention": true
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="limitations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Known Limitations</CardTitle>
                    <CardDescription>
                      Important considerations when using CAGE-Fusion
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <h4 className="font-semibold mb-2">Chemical Space Coverage</h4>
                        <p className="text-muted-foreground">
                          The model is trained primarily on drug-like molecules with molecular
                          weights between 150-500 Da. Performance may degrade for very large
                          molecules, natural products, or inorganics.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Novel Chemotypes</h4>
                        <p className="text-muted-foreground">
                          Predictions for scaffolds significantly different from training data may
                          have lower confidence. Use the uncertainty estimates provided with each
                          prediction.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Assay-Specific Behavior</h4>
                        <p className="text-muted-foreground">
                          The model predicts general nuisance behavior patterns. Some compounds may
                          behave differently in specific assay contexts not represented in training
                          data.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Stereochemistry</h4>
                        <p className="text-muted-foreground">
                          The current model does not explicitly account for stereoisomers.
                          Predictions are the same for all stereoisomers of a given structure.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>References</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <Button variant="outline" size="sm" asChild className="w-full justify-start">
                        <Link href="https://pubs.acs.org/doi/10.1021/acsptsci.3c00034">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Original CAGE-Fusion Paper (ACS PTSCI 2023)
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="w-full justify-start">
                        <Link href="https://saclab.github.io/daikon/">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          DAIKON User Guide
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
