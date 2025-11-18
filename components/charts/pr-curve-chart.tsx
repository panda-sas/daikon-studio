'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const prData = [
  { recall: 0, precision: 1 },
  { recall: 0.1, precision: 0.98 },
  { recall: 0.2, precision: 0.96 },
  { recall: 0.3, precision: 0.94 },
  { recall: 0.4, precision: 0.91 },
  { recall: 0.5, precision: 0.88 },
  { recall: 0.6, precision: 0.84 },
  { recall: 0.7, precision: 0.78 },
  { recall: 0.8, precision: 0.70 },
  { recall: 0.9, precision: 0.58 },
  { recall: 1, precision: 0.42 },
]

const chartConfig = {
  precision: {
    label: 'Precision',
    color: 'hsl(var(--chart-2))',
  },
}

export function PRCurveChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={prData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="recall"
            label={{ value: 'Recall', position: 'insideBottom', offset: -5 }}
            className="text-xs"
          />
          <YAxis
            label={{ value: 'Precision', angle: -90, position: 'insideLeft' }}
            className="text-xs"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="precision"
            stroke="var(--color-precision)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
