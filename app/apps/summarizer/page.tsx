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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Loader2, FileText, LinkIcon, Upload, Download } from 'lucide-react'

export default function SummarizerPage() {
  const [url, setUrl] = useState('')
  const [isSummarizing, setIsSummarizing] = useState(false)
  const [summary, setSummary] = useState<any>(null)

  const handleSummarize = async () => {
    if (!url.trim()) return

    setIsSummarizing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setSummary({
      title: 'Deep Learning for Molecular Property Prediction',
      abstract:
        'This study presents a novel deep learning approach for predicting molecular properties using graph neural networks. We demonstrate state-of-the-art performance on multiple benchmarks.',
      technicalSummary:
        'The authors propose a graph convolutional network architecture with attention mechanisms for molecular property prediction. The model achieves 94% accuracy on the MoleculeNet benchmark, outperforming traditional machine learning methods by 12%. Key innovations include the use of multi-head attention for bond features and a novel pooling strategy that preserves chemical information.',
      keyEntities: [
        { name: 'Ibuprofen', type: 'Drug', smiles: 'CC(C)Cc1ccc(cc1)C(C)C(O)=O' },
        { name: 'Aspirin', type: 'Drug', smiles: 'CC(=O)Oc1ccccc1C(O)=O' },
        { name: 'Cytochrome P450', type: 'Protein', id: 'P10635' },
      ],
      pathways: ['Drug metabolism', 'Arachidonic acid metabolism', 'Inflammatory response'],
      citations: 47,
      year: 2023,
    })

    setIsSummarizing(false)
  }

  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Document Summarizer</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                AI-powered analysis of scientific literature. Extract key findings, chemical
                entities, and pathway information from research papers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Document Input</CardTitle>
                    <CardDescription>Upload or link to a scientific document</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="url">Document URL</Label>
                      <Input
                        id="url"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://doi.org/10.1021/..."
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload PDF/Word
                    </Button>

                    <Button
                      onClick={handleSummarize}
                      disabled={!url.trim() || isSummarizing}
                      className="w-full"
                    >
                      {isSummarizing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <FileText className="mr-2 h-4 w-4" />
                          Summarize Document
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Analysis Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-1" />
                      <span>Abstract generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-2" />
                      <span>Technical summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-3" />
                      <span>Entity extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-chart-4" />
                      <span>Pathway mapping</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                {!summary && !isSummarizing && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Ready to Analyze</h3>
                        <p className="text-muted-foreground">
                          Upload a document or provide a URL to generate AI-powered summaries
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {isSummarizing && (
                  <Card className="p-12">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Analyzing Document</h3>
                        <p className="text-muted-foreground">
                          Extracting key information and generating summaries...
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {summary && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle>{summary.title}</CardTitle>
                            <CardDescription>
                              {summary.year} • {summary.citations} citations
                            </CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>

                    <Tabs defaultValue="abstract">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="abstract">Abstract</TabsTrigger>
                        <TabsTrigger value="technical">Technical</TabsTrigger>
                        <TabsTrigger value="entities">Entities</TabsTrigger>
                        <TabsTrigger value="pathways">Pathways</TabsTrigger>
                      </TabsList>

                      <TabsContent value="abstract" className="mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">AI-Generated Abstract</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm leading-relaxed">{summary.abstract}</p>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="technical" className="mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Technical Summary</CardTitle>
                            <CardDescription>
                              Detailed analysis of methodology and results
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm leading-relaxed">{summary.technicalSummary}</p>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="entities" className="mt-4 space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Extracted Chemical Entities</CardTitle>
                            <CardDescription>
                              Key compounds and proteins identified in the document
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {summary.keyEntities.map((entity: any, index: number) => (
                                <Card key={index}>
                                  <CardContent className="pt-6">
                                    <div className="flex items-start justify-between">
                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                          <h4 className="font-semibold">{entity.name}</h4>
                                          <Badge variant="secondary">{entity.type}</Badge>
                                        </div>
                                        {entity.smiles && (
                                          <p className="text-xs font-mono text-muted-foreground">
                                            {entity.smiles}
                                          </p>
                                        )}
                                        {entity.id && (
                                          <p className="text-xs text-muted-foreground">
                                            UniProt: {entity.id}
                                          </p>
                                        )}
                                      </div>
                                      <Button variant="outline" size="sm">
                                        <LinkIcon className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="pathways" className="mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Related Pathways</CardTitle>
                            <CardDescription>
                              Biological pathways mentioned or relevant to this research
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {summary.pathways.map((pathway: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                                >
                                  <span className="text-sm font-medium">{pathway}</span>
                                  <Button variant="ghost" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
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
