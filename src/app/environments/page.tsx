import { headers } from "next/headers";

import PageTitle from "@/components/molecules/page-title";
import EnvironmentsList from "@/features/environments/components/environments-list";

export default async function Environments() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const res = await fetch(`${protocol}://${host}/api/planets`);
  const environments = await res.json();

  return (
    <>
      <PageTitle>Environments</PageTitle>
      <EnvironmentsList environments={environments} />
    </>
  );
}
