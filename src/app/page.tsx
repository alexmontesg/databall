import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

import BallsFound from "@/features/metrics/components/balls-found";

const PowerLevelChart = dynamic(
  () => import("@/features/metrics/components/power-level"),
  {
    loading: () => <Skeleton className="h-full" />,
  },
);

const CombatStatsChart = dynamic(
  () => import("@/features/metrics/components/combat-stats"),
  {
    loading: () => <Skeleton className="h-full" />,
  },
);

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
      <div className="h-full">
        <PowerLevelChart />
      </div>
      <div className="h-full">
        <CombatStatsChart />
      </div>
      <div className="h-full">
        <BallsFound />
      </div>
    </div>
  );
}
