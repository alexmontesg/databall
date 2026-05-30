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
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { name: "Health", value: 2 },
  { name: "Ki", value: 3 },
  { name: "Attack", value: 3 },
  { name: "Defense", value: 2 },
  { name: "Speed", value: 3 },
];

const chartConfig = {
  goku: {
    label: "Goku",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function CombatStatsChart() {
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

export default dynamic(() => Promise.resolve({ default: CombatStatsChart }), {
  loading: () => <Skeleton className="h-full" />,
});
