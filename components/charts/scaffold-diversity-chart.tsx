'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const scaffoldData = [
  { scaffold: 'Benzene', count: 2847 },
  { scaffold: 'Pyridine', count: 1923 },
  { scaffold: 'Imidazole', count: 1654 },
  { scaffold: 'Thiophene', count: 1432 },
  { scaffold: 'Furan', count: 1287 },
  { scaffold: 'Pyrimidine', count: 1156 },
  { scaffold: 'Indole', count: 1043 },
  { scaffold: 'Quinoline', count: 892 },
]

const chartConfig = {
  count: {
    label: 'Molecules',
    color: 'hsl(var(--chart-3))',
  },
}

export function ScaffoldDiversityChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={scaffoldData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="scaffold"
            angle={-45}
            textAnchor="end"
            height={80}
            className="text-xs"
          />
          <YAxis
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
            className="text-xs"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
