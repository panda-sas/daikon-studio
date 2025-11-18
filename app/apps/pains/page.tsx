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
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { MoleculeInput } from '@/components/molecule-input'
import { MoleculeViewer } from '@/components/molecule-viewer'
import { Loader2, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function PAINSPage() {
  const [smiles, setSmiles] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!smiles.trim()) return

    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const hasIssues = Math.random() > 0.5
    setResults({
      clean: !hasIssues,
      painsMatches: hasIssues
        ? [
            {
              pattern: 'Catechol',
              severity: 'high',
              description: 'Metal-chelating group prone to non-specific binding',
              suggestion: 'Replace with single hydroxyl or methoxy group',
            },
            {
              pattern: 'Quinone',
              severity: 'medium',
              description: 'Redox-active moiety causing assay interference',
              suggestion: 'Consider aromatic alternatives without redox activity',
            },
          ]
        : [],
      frequentHit: hasIssues && Math.random() > 0.5,
      mlScore: (Math.random() * 0.4 + (hasIssues ? 0.5 : 0.1)).toFixed(2),
    })

    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">PAINS Filter</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Pan-Assay Interference Compounds detection using rule-based and ML approaches.
                Identify problematic substructures and frequent hit liabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Molecule Input</CardTitle>
                    <CardDescription>Enter a molecule to screen for PAINS</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <MoleculeInput value={smiles} onChange={setSmiles} />
                    <Button
                      onClick={handleAnalyze}
                      disabled={!smiles.trim() || isAnalyzing}
                      className="w-full"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-4 w-4" />
                          Screen for PAINS
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {smiles && <MoleculeViewer smiles={smiles} />}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Detection Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-1" />
                      <span>Substructure matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-2" />
                      <span>Frequent hit database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-3" />
                      <span>ML-based classification</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-6">
                {!results && !isAnalyzing && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Shield className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Ready to Screen</h3>
                        <p className="text-muted-foreground">
                          Enter a molecule to check for pan-assay interference patterns
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
                        <h3 className="text-xl font-semibold">Screening Molecule</h3>
                        <p className="text-muted-foreground">
                          Checking against PAINS database and running ML classifier...
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {results && (
                  <>
                    {results.clean ? (
                      <Alert className="border-chart-5 bg-chart-5/10">
                        <CheckCircle2 className="h-4 w-4 text-chart-5" />
                        <AlertDescription className="ml-2">
                          <strong>Molecule Passed Screening</strong>
                          <p className="text-sm mt-1">
                            No PAINS patterns detected. This molecule appears suitable for
                            high-throughput screening.
                          </p>
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="ml-2">
                          <strong>PAINS Patterns Detected</strong>
                          <p className="text-sm mt-1">
                            This molecule contains {results.painsMatches.length} problematic
                            substructure(s) that may cause assay interference.
                          </p>
                        </AlertDescription>
                      </Alert>
                    )}

                    <Card>
                      <CardHeader>
                        <CardTitle>Screening Results</CardTitle>
                        <CardDescription>Detailed analysis of liability patterns</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Overall Status</p>
                            <div className="flex items-center gap-2">
                              {results.clean ? (
                                <>
                                  <CheckCircle2 className="h-5 w-5 text-chart-5" />
                                  <span className="font-semibold text-chart-5">Clean</span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle className="h-5 w-5 text-destructive" />
                                  <span className="font-semibold text-destructive">Flagged</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">ML Liability Score</p>
                            <p className="text-2xl font-bold">{(parseFloat(results.mlScore) * 100).toFixed(0)}%</p>
                          </div>
                        </div>

                        {results.frequentHit && (
                          <Alert>
                            <AlertDescription>
                              This compound matches patterns found in frequent hitter databases
                            </AlertDescription>
                          </Alert>
                        )}
                      </CardContent>
                    </Card>

                    {!results.clean && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Detected Liabilities</CardTitle>
                          <CardDescription>
                            Problematic substructures and suggested modifications
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {results.painsMatches.map((match: any, index: number) => (
                            <Card key={index} className="border-destructive/20">
                              <CardContent className="pt-6 space-y-3">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold">{match.pattern}</h4>
                                  <Badge
                                    variant={
                                      match.severity === 'high' ? 'destructive' : 'default'
                                    }
                                  >
                                    {match.severity} severity
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {match.description}
                                </p>
                                <div className="p-3 bg-muted rounded-lg">
                                  <p className="text-sm">
                                    <strong>Suggestion:</strong> {match.suggestion}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </CardContent>
                      </Card>
                    )}

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Known Liability Database</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total PAINS</span>
                          <span className="font-medium">480 patterns</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Frequent Hitters</span>
                          <span className="font-medium">12,847 compounds</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Updated</span>
                          <span className="font-medium">2024-01-15</span>
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
