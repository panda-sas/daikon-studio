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
import { Loader2, Sparkles, Plus } from 'lucide-react'

const fragmentLibrary = [
  { id: 1, name: 'Benzene', smiles: 'c1ccccc1', mw: 78.11 },
  { id: 2, name: 'Pyridine', smiles: 'c1ccncc1', mw: 79.1 },
  { id: 3, name: 'Thiophene', smiles: 'c1ccsc1', mw: 84.14 },
  { id: 4, name: 'Imidazole', smiles: 'c1[nH]cnc1', mw: 68.08 },
  { id: 5, name: 'Methyl', smiles: 'C', mw: 15.03 },
  { id: 6, name: 'Ethyl', smiles: 'CC', mw: 29.06 },
]

export default function FragmensteinPage() {
  const [selectedFragments, setSelectedFragments] = useState<number[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedMolecules, setGeneratedMolecules] = useState<any>(null)

  const toggleFragment = (id: number) => {
    setSelectedFragments((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const handleGenerate = async () => {
    if (selectedFragments.length < 2) return

    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const molecules = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      smiles: 'C1=CC=C(C=C1)CCN2C=NC=N2',
      score: (Math.random() * 0.5 + 0.5).toFixed(2),
      mw: (Math.random() * 200 + 150).toFixed(1),
      logP: (Math.random() * 4 + 1).toFixed(1),
    }))

    molecules.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    setGeneratedMolecules(molecules)
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Fragmentstein</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Fragment recombination and molecular growth generator. Select fragments to combine
                and generate novel molecules with optimized properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Fragment Library</CardTitle>
                    <CardDescription>
                      Select 2+ fragments to combine
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {fragmentLibrary.map((fragment) => (
                      <button
                        key={fragment.id}
                        onClick={() => toggleFragment(fragment.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedFragments.includes(fragment.id)
                            ? 'bg-primary/10 border-primary'
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="font-medium text-sm">{fragment.name}</div>
                            <div className="text-xs font-mono text-muted-foreground">
                              {fragment.smiles}
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {fragment.mw}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Selected Fragments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedFragments.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No fragments selected yet
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedFragments.map((id) => {
                          const fragment = fragmentLibrary.find((f) => f.id === id)
                          return (
                            <Badge key={id} variant="default">
                              {fragment?.name}
                            </Badge>
                          )
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Button
                  onClick={handleGenerate}
                  disabled={selectedFragments.length < 2 || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Molecules
                    </>
                  )}
                </Button>
              </div>

              <div className="lg:col-span-2">
                {!generatedMolecules && !isGenerating && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Plus className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Ready to Generate</h3>
                        <p className="text-muted-foreground">
                          Select at least 2 fragments to begin generating novel molecules
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {isGenerating && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Generating Molecules</h3>
                        <p className="text-muted-foreground">
                          Combining fragments and optimizing structures...
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {generatedMolecules && (
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Generated Molecules</CardTitle>
                        <CardDescription>
                          Ranked by predicted drug-likeness score
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {generatedMolecules.map((mol: any) => (
                        <Card key={mol.id} className="hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">Molecule {mol.id}</CardTitle>
                              <Badge
                                variant={parseFloat(mol.score) > 0.7 ? 'default' : 'secondary'}
                              >
                                Score: {mol.score}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                              <img
                                src={`https://placeholder.svg?height=200&width=200&query=chemical+structure+molecule+${mol.id}`}
                                alt={`Molecule ${mol.id}`}
                                className="w-full h-full object-contain p-4"
                              />
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">SMILES</span>
                                <span className="font-mono text-xs">{mol.smiles.slice(0, 20)}...</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">MW</span>
                                <span className="font-medium">{mol.mw} g/mol</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">LogP</span>
                                <span className="font-medium">{mol.logP}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
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
