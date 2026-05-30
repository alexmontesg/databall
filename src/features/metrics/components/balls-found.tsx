"use client";

import ErrorState from "@/components/organisms/error-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useMetricsClient from "../hooks/use-metrics-client";

export default function BallsFound() {
  const { chartData, isLoading, error } = useMetricsClient<{ value: number }>(
    "balls",
  );
  if (isLoading) return <Skeleton className="h-80" />;
  if (error) return <ErrorState />;

  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle>Dragon Balls Found</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 h-full">
        <div className="flex h-full w-full items-center justify-center">
          <div>
            <span className="font-black text-9xl">{chartData?.value}</span>
            <span className="font-bold text-4xl">/7</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
