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
  { year: "2024", count: 45 },
  { year: "2023", count: 57 },
  { year: "2022", count: 68 },
  { year: "2021", count: 63 },
  { year: "2020", count: 68 },
  { year: "2019", count: 80 },
  { year: "2018", count: 113 },
  { year: "2017", count: 96 },
  { year: "2016", count: 103 },
  { year: "2015", count: 54 },
  { year: "2014", count: 78 },
  { year: "2013", count: 37 },
  { year: "2012", count: 51 },
  { year: "2011", count: 32 },
  { year: "2010", count: 44 },
  { year: "2009", count: 38 },
  { year: "2008", count: 29 },
  { year: "2007", count: 26 },
  { year: "2006", count: 2 },
  { year: "1992", count: 1 },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Chart5() {
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
