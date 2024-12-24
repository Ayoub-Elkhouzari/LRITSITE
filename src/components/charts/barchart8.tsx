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

// Updated chart data for years and three corresponding values
const chartData = [
  { year: "2024", value1: 27, value2: 26, value3: 5 },
  { year: "2023", value1: 24, value2: 23, value3: 9 },
  { year: "2022", value1: 37, value2: 37, value3: 10 },
  { year: "2021", value1: 39, value2: 36, value3: 14 },
  { year: "2020", value1: 48, value2: 45, value3: 5 },
  { year: "2019", value1: 39, value2: 38, value3: 12 },
  { year: "2018", value1: 48, value2: 48, value3: 17 },
  { year: "2017", value1: 27, value2: 27, value3: 22 },
  { year: "2016", value1: 26, value2: 26, value3: 24 },
  { year: "2015", value1: 25, value2: 25, value3: 4 },
  { year: "2014", value1: 31, value2: 31, value3: 9 },
  { year: "2013", value1: 16, value2: 16, value3: 4 },
  { year: "2012", value1: 14, value2: 14, value3: 11 },
  { year: "2011", value1: 10, value2: 11, value3: 6 },
  { year: "2010", value1: 15, value2: 15, value3: 1 },
  { year: "2009", value1: 8, value2: 8, value3: 1 },
  { year: "2008", value1: 4, value2: 4, value3: 1 },
  { year: "2007", value1: 8, value2: 15, value3: 3 },
  { year: "2006", value1: 1, value2: 1, value3: 0 },
]

const chartConfig = {
  value1: {
    label: "Value 1",
    color: "hsl(var(--chart-1))",
  },
  value2: {
    label: "Value 2",
    color: "hsl(var(--chart-2))",
  },
  value3: {
    label: "Value 3",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function Chart8() {
  return (
    <Card className="w-full mt-3">
      <CardContent>
        <ChartContainer config={chartConfig}>
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
            <Bar dataKey="value1" fill={chartConfig.value1.color} radius={4} />
            <Bar dataKey="value2" fill={chartConfig.value2.color} radius={4} />
            <Bar dataKey="value3" fill={chartConfig.value3.color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
