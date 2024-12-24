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
  { year: "2024", count: 27 },
  { year: "2023", count: 24 },
  { year: "2022", count: 37 },
  { year: "2021", count: 39 },
  { year: "2020", count: 48 },
  { year: "2019", count: 39 },
  { year: "2018", count: 48 },
  { year: "2017", count: 27 },
  { year: "2016", count: 26 },
  { year: "2015", count: 25 },
  { year: "2014", count: 31 },
  { year: "2013", count: 16 },
  { year: "2012", count: 14 },
  { year: "2011", count: 10 },
  { year: "2010", count: 15 },
  { year: "2009", count: 8 },
  { year: "2008", count: 4 },
  { year: "2007", count: 8 },
  { year: "2006", count: 1 },
]

const chartConfig = {
  count: {
    label: "Nbr d'articles",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart2() {
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
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing yearly counts from 2006 to 2024
        </div>
      </CardFooter> */}
    </Card>
  )
}
