import { GlobeCheck, GlobeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PlanetControls from "./planet-controls";
import DeployControls from "./deploy-controls";

export interface EnvironmentDetailPlanet {
  id: number;
  name: string;
  isUp: boolean;
  version: { id: number; version: string };
  availableVersions: { id: number; version: string }[];
}

interface EnvironmentDetailProps {
  planet: EnvironmentDetailPlanet;
}

export default function EnvironmentDetail({ planet }: EnvironmentDetailProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col gap-2">
          {planet.isUp ? (
            <div className="flex flex-row gap-2 items-center">
              <GlobeCheck className="text-cyan-400" />
              <span>Up and running</span>
            </div>
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <GlobeOff className="text-destructive" />
              <span>Not responding</span>
            </div>
          )}
          <PlanetControls planetId={planet.id} isUp={planet.isUp} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Version</CardTitle>
        </CardHeader>
        <CardContent>{planet.version.version}</CardContent>
      </Card>

      {planet.isUp && (
        <Card>
          <CardHeader>
            <CardTitle>Change Version</CardTitle>
          </CardHeader>
          <CardContent>
            <DeployControls
              planetId={planet.id}
              currentVersionId={planet.version.id}
              availableVersions={planet.availableVersions}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
}
