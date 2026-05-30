"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import useMetricsClient from "../hooks/use-metrics-client";
import ErrorState from "@/components/organisms/error-state";
const MAX_POWER_LEVEL = 25000;

const chartConfig = {
  powerLevel: {
    label: "Power Level",
  },
} satisfies ChartConfig;

function PowerLevelChart() {
  const { chartData, isLoading, error } =
    useMetricsClient<Array<{ powerLevel: number }>>("power-level");
  if (isLoading) return <Skeleton className="h-80" />;
  if (error) return <ErrorState />;

  const data = chartData?.map((data) => ({
    ...data,
    fill: "var(--chart-2)",
    endAngle: Math.floor((data.powerLevel * 360) / MAX_POWER_LEVEL),
  }));

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Current Power Level</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={data}
            startAngle={0}
            endAngle={data?.[0].endAngle}
            outerRadius={100}
            innerRadius={80}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[100, 80]}
            />
            <RadialBar dataKey="powerLevel" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {data?.[0].powerLevel.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Power Level
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default dynamic(() => Promise.resolve({ default: PowerLevelChart }), {
  loading: () => <Skeleton className="h-full" />,
});
