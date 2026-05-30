"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import useMetricsClient from "../hooks/use-metrics-client";
import ErrorState from "@/components/organisms/error-state";

const chartConfig = {
  probability: {
    label: "probability",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function KrillinDeathChart() {
  const { chartData, isLoading, error } =
    useMetricsClient<Array<{ saga: string; probability: number }>>("krillin");
  if (isLoading) return <Skeleton className="h-96" />;
  if (error) return <ErrorState />;

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
