'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MoleculeViewerProps {
  smiles: string
  highlights?: { atoms: number[]; color: string }[]
}

export function MoleculeViewer({ smiles, highlights }: MoleculeViewerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Molecule Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <img
            src={`https://placeholder.svg?height=400&width=400&query=chemical+structure+${encodeURIComponent(smiles)}`}
            alt="Molecule structure"
            className="w-full h-full object-contain"
          />
          {highlights && highlights.length > 0 && (
            <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs">
              Attention highlights active
            </div>
          )}
        </div>
        <div className="mt-3 p-2 bg-muted rounded text-xs font-mono break-all">
          {smiles || 'No molecule loaded'}
        </div>
      </CardContent>
    </Card>
  )
}
