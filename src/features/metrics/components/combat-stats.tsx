"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

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
  goku: {
    label: "Goku",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function CombatStatsChart() {
  const { chartData, isLoading, error } =
    useMetricsClient<Array<{ name: string; value: number }>>("stats");
  if (isLoading) return <Skeleton className="h-80" />;
  if (error) return <ErrorState />;

  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle>Current Skills</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData} outerRadius="70%">
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[1, 5]} tick={false} axisLine={false} />
            <PolarGrid />
            <Radar dataKey="value" fill="var(--color-goku)" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
