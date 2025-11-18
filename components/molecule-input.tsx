'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

interface MoleculeInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function MoleculeInput({ value, onChange, placeholder }: MoleculeInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="smiles-input">SMILES String</Label>
      <Textarea
        id="smiles-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Enter SMILES notation, e.g., CC(C)Cc1ccc(cc1)C(C)C(O)=O'}
        className="font-mono text-sm min-h-[100px]"
      />
      <p className="text-xs text-muted-foreground">
        Enter a molecule in SMILES format or upload an SDF file
      </p>
    </div>
  )
}
