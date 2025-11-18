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
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Database, Upload, Download, Search, FileCheck } from 'lucide-react'

const publicDatasets = [
  {
    name: 'MoleculeNet',
    description: 'Comprehensive benchmark for molecular ML',
    compounds: 437929,
    properties: 12,
    tasks: 17,
    format: 'CSV, SDF',
    lastUpdated: '2024-01-15',
  },
  {
    name: 'Nuisance Compounds',
    description: 'Curated PAINS and frequent hitters',
    compounds: 10000,
    properties: 8,
    tasks: 4,
    format: 'SDF, SMILES',
    lastUpdated: '2024-01-10',
  },
  {
    name: 'ChEMBL',
    description: 'Bioactive molecules with drug-like properties',
    compounds: 2180000,
    properties: 15,
    tasks: 42,
    format: 'SQL, CSV',
    lastUpdated: '2023-12-20',
  },
]

const userDatasets = [
  {
    id: 1,
    name: 'Kinase Inhibitors',
    compounds: 847,
    uploaded: '2024-01-16',
    status: 'processed',
  },
  {
    id: 2,
    name: 'GPCR Ligands',
    compounds: 1234,
    uploaded: '2024-01-14',
    status: 'processed',
  },
  {
    id: 3,
    name: 'Natural Products',
    compounds: 523,
    uploaded: '2024-01-12',
    status: 'processing',
  },
]

const recentUploads = [
  {
    filename: 'kinase_compounds.sdf',
    size: '2.4 MB',
    molecules: 847,
    time: '2 hours ago',
    status: 'complete',
  },
  {
    filename: 'screening_results.csv',
    size: '1.1 MB',
    molecules: 1234,
    time: '1 day ago',
    status: 'complete',
  },
  {
    filename: 'natural_products.smiles',
    size: '856 KB',
    molecules: 523,
    time: '3 days ago',
    status: 'processing',
  },
]

export default function DatasetsPage() {
  return (
    <div className="min-h-screen">
      <NavHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Datasets</h1>
                <p className="text-lg text-muted-foreground">
                  Manage and explore molecular datasets for analysis
                </p>
              </div>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Dataset
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Total Compounds</CardDescription>
                  <CardTitle className="text-3xl">2.6M</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Across all datasets</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Public Datasets</CardDescription>
                  <CardTitle className="text-3xl">{publicDatasets.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Available for research</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>User Datasets</CardDescription>
                  <CardTitle className="text-3xl">{userDatasets.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Custom uploads</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Processing</CardDescription>
                  <CardTitle className="text-3xl">1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Currently processing</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="public" className="space-y-6">
              <TabsList>
                <TabsTrigger value="public">Public Datasets</TabsTrigger>
                <TabsTrigger value="user">My Datasets</TabsTrigger>
                <TabsTrigger value="uploads">Recent Uploads</TabsTrigger>
              </TabsList>

              <TabsContent value="public" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Public Datasets</CardTitle>
                    <CardDescription>
                      High-quality benchmark datasets for drug discovery research
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {publicDatasets.map((dataset, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div className="space-y-3 flex-1">
                                <div>
                                  <h3 className="font-semibold text-lg">{dataset.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {dataset.description}
                                  </p>
                                </div>

                                <div className="grid grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Compounds</p>
                                    <p className="font-medium">
                                      {dataset.compounds.toLocaleString()}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Properties</p>
                                    <p className="font-medium">{dataset.properties}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Tasks</p>
                                    <p className="font-medium">{dataset.tasks}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Format</p>
                                    <p className="font-medium">{dataset.format}</p>
                                  </div>
                                </div>

                                <div className="flex gap-2 text-xs text-muted-foreground">
                                  <span>Last updated: {dataset.lastUpdated}</span>
                                </div>
                              </div>

                              <div className="flex gap-2 ml-4">
                                <Button variant="outline" size="sm">
                                  <Search className="mr-2 h-4 w-4" />
                                  Explore
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="user" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Datasets</CardTitle>
                    <CardDescription>Custom datasets you've uploaded</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Compounds</TableHead>
                          <TableHead>Uploaded</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userDatasets.map((dataset) => (
                          <TableRow key={dataset.id}>
                            <TableCell className="font-medium">{dataset.name}</TableCell>
                            <TableCell>{dataset.compounds.toLocaleString()}</TableCell>
                            <TableCell>{dataset.uploaded}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  dataset.status === 'processed' ? 'secondary' : 'default'
                                }
                              >
                                {dataset.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm">
                                  View
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="uploads" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Uploads</CardTitle>
                    <CardDescription>Your latest dataset uploads and processing status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Filename</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Molecules</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentUploads.map((upload, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-mono text-sm">
                              {upload.filename}
                            </TableCell>
                            <TableCell>{upload.size}</TableCell>
                            <TableCell>{upload.molecules.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">
                              {upload.time}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  upload.status === 'complete' ? 'secondary' : 'default'
                                }
                              >
                                <FileCheck className="mr-1 h-3 w-3" />
                                {upload.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="bg-accent/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold">Automatic Processing</h3>
                        <p className="text-sm text-muted-foreground">
                          All uploaded datasets are automatically canonicalized using RDKit,
                          validated for chemical correctness, and analyzed for scaffold diversity.
                        </p>
                      </div>
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
