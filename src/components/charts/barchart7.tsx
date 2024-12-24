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

// Updated chart data for years and their corresponding values
const chartData = [
  { year: "2024", value: 46 },
  { year: "2023", value: 38 },
  { year: "2022", value: 25 },
  { year: "2021", value: 18 },
  { year: "2020", value: 23 },
  { year: "2019", value: 9 },
  { year: "2018", value: 16 },
  { year: "2017", value: 21 },
  { year: "2016", value: 15 },
  { year: "2015", value: 21 },
  { year: "2014", value: 29 },
  { year: "2013", value: 27 },
  { year: "2012", value: 20 },
  { year: "2011", value: 8 },
  { year: "2010", value: 11 },
  { year: "2009", value: 3 },
  { year: "2008", value: 1 },
  { year: "2007", value: 1 },
  { year: "2006", value: 1 },
]

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart7() {
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
            <Bar dataKey="value" fill={chartConfig.value.color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
