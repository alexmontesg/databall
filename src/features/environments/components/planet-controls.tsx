"use client";

import { useRouter } from "next/navigation";
import { PowerOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanetControlsProps {
  planetId: number;
  isUp: boolean;
}

export default function PlanetControls({
  planetId,
  isUp,
}: PlanetControlsProps) {
  const router = useRouter();

  async function handleAction(isUp: boolean) {
    await fetch(`/api/planets/${planetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isUp }),
    });
    router.refresh();
  }

  if (isUp) {
    return (
      <Button variant="destructive" onClick={() => handleAction(false)}>
        <PowerOff /> Destroy
      </Button>
    );
  }

  return (
    <Button variant="default" onClick={() => handleAction(true)}>
      <Sparkles /> Summon Shenron
    </Button>
  );
}
