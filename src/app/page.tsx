import PowerLevelChart from "@/features/metrics/components/power-level";
import CombatStatsChart from "@/features/metrics/components/combat-stats";
import BallsFound from "@/features/metrics/components/balls-found";

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
