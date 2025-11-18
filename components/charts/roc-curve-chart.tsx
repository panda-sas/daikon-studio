'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const rocData = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.05, tpr: 0.65 },
  { fpr: 0.1, tpr: 0.78 },
  { fpr: 0.15, tpr: 0.85 },
  { fpr: 0.2, tpr: 0.89 },
  { fpr: 0.3, tpr: 0.93 },
  { fpr: 0.4, tpr: 0.95 },
  { fpr: 0.5, tpr: 0.97 },
  { fpr: 0.6, tpr: 0.98 },
  { fpr: 0.8, tpr: 0.99 },
  { fpr: 1, tpr: 1 },
]

const chartConfig = {
  tpr: {
    label: 'True Positive Rate',
    color: 'hsl(var(--chart-1))',
  },
}

export function ROCCurveChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rocData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="fpr"
            label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5 }}
            className="text-xs"
          />
          <YAxis
            label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }}
            className="text-xs"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="tpr"
            stroke="var(--color-tpr)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="linear"
            data={[{ fpr: 0, tpr: 0 }, { fpr: 1, tpr: 1 }]}
            dataKey="tpr"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
