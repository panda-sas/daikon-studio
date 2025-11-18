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
import { MoleculeInput } from '@/components/molecule-input'
import { MoleculeViewer } from '@/components/molecule-viewer'
import { Loader2, Target, TrendingUp } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const targetLibrary = [
  { id: 'EGFR', name: 'EGFR', fullName: 'Epidermal Growth Factor Receptor', family: 'Kinase' },
  { id: 'BRAF', name: 'BRAF', fullName: 'Serine/threonine-protein kinase', family: 'Kinase' },
  { id: 'ACE2', name: 'ACE2', fullName: 'Angiotensin-converting enzyme 2', family: 'Peptidase' },
  { id: 'PARP1', name: 'PARP1', fullName: 'Poly [ADP-ribose] polymerase 1', family: 'Transferase' },
  { id: 'CDK2', name: 'CDK2', fullName: 'Cyclin-dependent kinase 2', family: 'Kinase' },
]

export default function Boltz2Page() {
  const [smiles, setSmiles] = useState('')
  const [isPredicting, setIsPredicting] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handlePredict = async () => {
    if (!smiles.trim()) return

    setIsPredicting(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))

    const predictions = targetLibrary.map((target) => ({
      ...target,
      affinity: (Math.random() * 12 + 2).toFixed(2),
      confidence: (Math.random() * 0.4 + 0.6).toFixed(2),
      rank: 0,
    }))

    predictions.sort((a, b) => parseFloat(b.affinity) - parseFloat(a.affinity))
    predictions.forEach((p, i) => (p.rank = i + 1))

    setResults(predictions)
    setIsPredicting(false)
  }

  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Boltz-2</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Predict binding affinity across a comprehensive target library. Identify potential
                therapeutic targets and rank compounds by predicted binding strength.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Input Molecule</CardTitle>
                    <CardDescription>
                      Enter a molecule to predict binding affinities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <MoleculeInput value={smiles} onChange={setSmiles} />
                    <Button
                      onClick={handlePredict}
                      disabled={!smiles.trim() || isPredicting}
                      className="w-full"
                    >
                      {isPredicting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Predicting...
                        </>
                      ) : (
                        <>
                          <Target className="mr-2 h-4 w-4" />
                          Predict Binding
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {smiles && <MoleculeViewer smiles={smiles} />}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Target Library</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Targets</span>
                      <span className="font-medium">{targetLibrary.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kinases</span>
                      <span className="font-medium">
                        {targetLibrary.filter((t) => t.family === 'Kinase').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model Type</span>
                      <span className="font-medium">Deep Learning</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                {!results && !isPredicting && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Target className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Ready to Predict</h3>
                        <p className="text-muted-foreground">
                          Enter a molecule to predict binding affinities across the target library
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {isPredicting && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Calculating Affinities</h3>
                        <p className="text-muted-foreground">
                          Running Boltz-2 predictions across {targetLibrary.length} targets...
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {results && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Binding Affinity Predictions</CardTitle>
                        <CardDescription>
                          Ranked by predicted binding strength (pKd values)
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12">Rank</TableHead>
                              <TableHead>Target</TableHead>
                              <TableHead>Full Name</TableHead>
                              <TableHead>Family</TableHead>
                              <TableHead className="text-right">Affinity (pKd)</TableHead>
                              <TableHead className="text-right">Confidence</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {results.map((result: any) => (
                              <TableRow key={result.id}>
                                <TableCell className="font-medium">{result.rank}</TableCell>
                                <TableCell className="font-mono text-sm">{result.name}</TableCell>
                                <TableCell className="text-sm">{result.fullName}</TableCell>
                                <TableCell>
                                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                                    {result.family}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {result.affinity}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex items-center justify-end gap-2">
                                    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-chart-1"
                                        style={{
                                          width: `${parseFloat(result.confidence) * 100}%`,
                                        }}
                                      />
                                    </div>
                                    <span className="text-xs text-muted-foreground w-8">
                                      {(parseFloat(result.confidence) * 100).toFixed(0)}%
                                    </span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Top Predicted Target</CardDescription>
                          <CardTitle className="text-2xl">{results[0].name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-xs text-muted-foreground">
                            {results[0].fullName}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Max Affinity</CardDescription>
                          <CardTitle className="text-2xl">{results[0].affinity} pKd</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-xs text-muted-foreground">
                            Strong binding predicted
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardDescription>Avg Confidence</CardDescription>
                          <CardTitle className="text-2xl">
                            {(
                              results.reduce(
                                (sum: number, r: any) => sum + parseFloat(r.confidence),
                                0
                              ) / results.length
                            ).toFixed(0)}
                            %
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-xs text-muted-foreground">High reliability</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
