import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/molecules/page-title";
import EnvironmentDetail, {
  type EnvironmentDetailPlanet,
} from "@/features/environments/components/environment-detail";

export default async function EnvironmentDetailPage({
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

  const planet: EnvironmentDetailPlanet = await res.json();

  return (
    <>
      <PageTitle>{planet.name}</PageTitle>

      <EnvironmentDetail planet={planet} />

      <Button asChild variant="outline">
        <Link href="/environments">
          <ArrowLeft /> Back to Environments
        </Link>
      </Button>
    </>
  );
}
