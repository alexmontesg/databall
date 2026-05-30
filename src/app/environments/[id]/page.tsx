import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { GlobeCheck, GlobeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageTitle from "@/components/molecules/page-title";

interface PlanetResponse {
  id: number;
  name: string;
  isUp: boolean;
  version: { id: number; version: string };
  availableVersions: { id: number; version: string }[];
}

export default async function EnvironmentDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const res = await fetch(`${protocol}://${host}/api/planets/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const planet: PlanetResponse = await res.json();

  return (
    <>
      <PageTitle>{planet.name}</PageTitle>

      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Version</CardTitle>
        </CardHeader>
        <CardContent>{planet.version.version}</CardContent>
      </Card>

      <Button asChild variant="outline">
        <Link href="/environments">
          <ArrowLeft /> Back to Environments
        </Link>
      </Button>
    </>
  );
}
