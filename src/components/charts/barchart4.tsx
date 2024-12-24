"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Updated chart data for years and counts
const chartData = [
  { year: "2024", count: 5 },
  { year: "2023", count: 9 },
  { year: "2022", count: 10 },
  { year: "2021", count: 14 },
  { year: "2020", count: 5 },
  { year: "2019", count: 12 },
  { year: "2018", count: 17 },
  { year: "2017", count: 22 },
  { year: "2016", count: 24 },
  { year: "2015", count: 4 },
  { year: "2014", count: 9 },
  { year: "2013", count: 4 },
  { year: "2012", count: 11 },
  { year: "2011", count: 6 },
  { year: "2010", count: 1 },
  { year: "2009", count: 1 },
  { year: "2008", count: 1 },
  { year: "2007", count: 3 },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function Chart4() {
  return (
    <Card className="w-full grid justify-center mt-3">
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[512px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value} // Display full year labels
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="count" fill={chartConfig.count.color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
