"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Rocket, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeployControlsProps {
  planetId: number;
  currentVersionId: number;
  availableVersions: { id: number; version: string }[];
}

export default function DeployControls({
  planetId,
  currentVersionId,
  availableVersions,
}: DeployControlsProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(currentVersionId);

  const isCurrent = selectedId === currentVersionId;
  const isDowngrade = selectedId < currentVersionId;
  const label = isDowngrade ? "Whis Rollback" : "Train with Whis";

  async function handleDeploy() {
    await fetch(`/api/planets/${planetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ version: selectedId }),
    });
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-4">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(Number(e.target.value))}
        className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        {availableVersions.map((v) => (
          <option key={v.id} value={v.id}>
            {v.version}
          </option>
        ))}
      </select>

      <Button
        variant={isDowngrade ? "destructive" : "default"}
        disabled={isCurrent}
        onClick={handleDeploy}
        className="w-full"
      >
        {isDowngrade ? <Undo2 /> : <Rocket />}
        {label}
      </Button>
    </div>
  );
}
