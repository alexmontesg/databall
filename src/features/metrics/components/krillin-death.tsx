"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { saga: "Original DB", probability: 5 },
  { saga: "Saiyan", probability: 95 },
  { saga: "Namek", probability: 100 },
  { saga: "Androids", probability: 70 },
  { saga: "Cell", probability: 85 },
  { saga: "Buu", probability: 90 },
  { saga: "Battle of Gods", probability: 60 },
  { saga: "Tournament of Power", probability: 80 },
];

const chartConfig = {
  probability: {
    label: "probability",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function KrillinDeathChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Krillin Death Probability</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 40,
              right: 40,
              top: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="saga" tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="probability"
              type="natural"
              stroke="var(--color-probability)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default dynamic(() => Promise.resolve({ default: KrillinDeathChart }), {
  loading: () => <Skeleton className="h-full" />,
});
