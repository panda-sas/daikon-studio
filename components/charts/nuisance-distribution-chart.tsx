'use client'

import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const nuisanceData = [
  { name: 'Aggregator', value: 342, color: 'hsl(var(--chart-1))' },
  { name: 'Luciferase Inhibitor', value: 218, color: 'hsl(var(--chart-2))' },
  { name: 'Reactive', value: 567, color: 'hsl(var(--chart-3))' },
  { name: 'Promiscuous', value: 423, color: 'hsl(var(--chart-4))' },
  { name: 'Clean', value: 8450, color: 'hsl(var(--chart-5))' },
]

const chartConfig = {
  aggregator: { label: 'Aggregator', color: 'hsl(var(--chart-1))' },
  luciferase: { label: 'Luciferase Inhibitor', color: 'hsl(var(--chart-2))' },
  reactive: { label: 'Reactive', color: 'hsl(var(--chart-3))' },
  promiscuous: { label: 'Promiscuous', color: 'hsl(var(--chart-4))' },
  clean: { label: 'Clean', color: 'hsl(var(--chart-5))' },
}

export function NuisanceDistributionChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie
            data={nuisanceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {nuisanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
