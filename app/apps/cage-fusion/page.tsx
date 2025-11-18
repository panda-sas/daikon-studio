'use client'

import { useState } from 'react'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { MoleculeInput } from '@/components/molecule-input'
import { MoleculeViewer } from '@/components/molecule-viewer'
import { AttentionHeatmap } from '@/components/attention-heatmap'
import { Loader2, AlertTriangle, CheckCircle, Upload, Download } from 'lucide-react'

const exampleMolecules = [
  {
    name: 'Ibuprofen',
    smiles: 'CC(C)Cc1ccc(cc1)C(C)C(O)=O',
    description: 'Common NSAID drug',
  },
  {
    name: 'Aspirin',
    smiles: 'CC(=O)Oc1ccccc1C(O)=O',
    description: 'Acetylsalicylic acid',
  },
  {
    name: 'Caffeine',
    smiles: 'CN1C=NC2=C1C(=O)N(C(=O)N2C)C',
    description: 'Stimulant compound',
  },
]

export default function CAGEFusionPage() {
  const [smiles, setSmiles] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!smiles.trim()) return

    setIsAnalyzing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setResults({
      aggregator: 0.08,
      luciferase: 0.12,
      reactive: 0.91,
      promiscuous: 0.15,
      overall: 'reactive',
      rocAuc: 0.942,
      prAuc: 0.887,
      functionalGroupAttention: [
        { label: 'Carbonyl Group', value: 0.87, color: 'hsl(var(--chart-1))' },
        { label: 'Aromatic Ring', value: 0.65, color: 'hsl(var(--chart-2))' },
        { label: 'Ester Linkage', value: 0.43, color: 'hsl(var(--chart-3))' },
        { label: 'Alkyl Chain', value: 0.21, color: 'hsl(var(--chart-4))' },
      ],
      atomAttention: [
        { label: 'C1 (Carbonyl)', value: 0.92, color: 'hsl(var(--chart-1))' },
        { label: 'O2 (Hydroxyl)', value: 0.78, color: 'hsl(var(--chart-2))' },
        { label: 'C3 (Aromatic)', value: 0.54, color: 'hsl(var(--chart-3))' },
        { label: 'N4 (Amine)', value: 0.36, color: 'hsl(var(--chart-4))' },
      ],
    })

    setIsAnalyzing(false)
  }

  const getSeverityColor = (value: number) => {
    if (value > 0.7) return 'destructive'
    if (value > 0.4) return 'default'
    return 'secondary'
  }

  const getSeverityLabel = (value: number) => {
    if (value > 0.7) return 'High Risk'
    if (value > 0.4) return 'Moderate'
    return 'Low Risk'
  }

  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">CAGE-Fusion</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Gated Co-Attention Graph Embedding Fusion model for nuisance compound detection.
                Identify aggregators, luciferase inhibitors, reactive compounds, and promiscuous binders.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Panel */}
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Molecule Input</CardTitle>
                    <CardDescription>Enter or upload a molecule for analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <MoleculeInput value={smiles} onChange={setSmiles} />

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Try Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {exampleMolecules.map((mol) => (
                          <Button
                            key={mol.name}
                            variant="outline"
                            size="sm"
                            onClick={() => setSmiles(mol.smiles)}
                          >
                            {mol.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleAnalyze}
                        disabled={!smiles.trim() || isAnalyzing}
                        className="flex-1"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          'Analyze Molecule'
                        )}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Model Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROC-AUC</span>
                      <span className="font-medium">0.942</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">PR-AUC</span>
                      <span className="font-medium">0.887</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dataset</span>
                      <span className="font-medium">10,000 compounds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Architecture</span>
                      <span className="font-medium">Co-Attention GNN</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-2 space-y-6">
                {!results && !isAnalyzing && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <AlertTriangle className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">No Analysis Yet</h3>
                        <p className="text-muted-foreground">
                          Enter a molecule and click Analyze to see predictions and attention maps
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {isAnalyzing && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Analyzing Molecule</h3>
                        <p className="text-muted-foreground">
                          Running CAGE-Fusion model and generating attention maps...
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {results && (
                  <>
                    {/* Overall Result */}
                    <Alert className={results.overall === 'reactive' ? 'border-destructive' : ''}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="ml-2">
                        <strong>Primary Classification: {results.overall.toUpperCase()}</strong>
                        <p className="text-sm mt-1">
                          This compound shows high reactivity and may interfere with assays.
                        </p>
                      </AlertDescription>
                    </Alert>

                    {/* Predictions */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Nuisance Predictions</CardTitle>
                        <CardDescription>
                          Probability scores for each nuisance category
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Aggregator</span>
                              <Badge variant={getSeverityColor(results.aggregator)}>
                                {getSeverityLabel(results.aggregator)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-chart-1 rounded-full"
                                  style={{ width: `${results.aggregator * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-mono w-12 text-right">
                                {(results.aggregator * 100).toFixed(0)}%
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Luciferase Inhibitor</span>
                              <Badge variant={getSeverityColor(results.luciferase)}>
                                {getSeverityLabel(results.luciferase)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-chart-2 rounded-full"
                                  style={{ width: `${results.luciferase * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-mono w-12 text-right">
                                {(results.luciferase * 100).toFixed(0)}%
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Reactive</span>
                              <Badge variant={getSeverityColor(results.reactive)}>
                                {getSeverityLabel(results.reactive)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-chart-3 rounded-full"
                                  style={{ width: `${results.reactive * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-mono w-12 text-right">
                                {(results.reactive * 100).toFixed(0)}%
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Promiscuous</span>
                              <Badge variant={getSeverityColor(results.promiscuous)}>
                                {getSeverityLabel(results.promiscuous)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-chart-4 rounded-full"
                                  style={{ width: `${results.promiscuous * 100}%` }}
                                />
                              </div>
                              <span className="text-sm font-mono w-12 text-right">
                                {(results.promiscuous * 100).toFixed(0)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Visualization Tabs */}
                    <Tabs defaultValue="structure">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="structure">Structure</TabsTrigger>
                        <TabsTrigger value="functional">Functional Groups</TabsTrigger>
                        <TabsTrigger value="atoms">Atom-Level</TabsTrigger>
                      </TabsList>

                      <TabsContent value="structure" className="space-y-4 mt-4">
                        <MoleculeViewer smiles={smiles} />
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Explanation</CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm space-y-2">
                            <p>
                              The CAGE-Fusion model has identified this molecule as primarily{' '}
                              <strong>reactive</strong> with a confidence of{' '}
                              {(results.reactive * 100).toFixed(1)}%.
                            </p>
                            <p className="text-muted-foreground">
                              This classification is based on structural features that commonly lead to
                              non-specific binding and assay interference. The attention mechanism has
                              highlighted key substructures contributing to this prediction.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="functional" className="space-y-4 mt-4">
                        <AttentionHeatmap
                          title="Functional Group Attention"
                          data={results.functionalGroupAttention}
                        />
                        <Card>
                          <CardContent className="pt-6 text-sm text-muted-foreground">
                            This visualization shows which functional groups the model focuses on when
                            making predictions. Higher attention indicates greater importance in the
                            final classification decision.
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="atoms" className="space-y-4 mt-4">
                        <AttentionHeatmap
                          title="Atom-Level Attention"
                          data={results.atomAttention}
                        />
                        <Card>
                          <CardContent className="pt-6 text-sm text-muted-foreground">
                            Atom-level attention map showing individual atoms that contribute most to
                            the nuisance compound classification. This granular view helps identify
                            specific problematic moieties.
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>

                    {/* Export Options */}
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            Export results for further analysis
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Export JSON
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Export PNG
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
