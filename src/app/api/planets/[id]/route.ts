import { notFound } from "next/navigation";
import { planets } from "../planets";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const data = planets.find((p) => p.id === parseInt(id));

  if (!data) {
    return notFound();
  }

  const origin = new URL(req.url).origin;
  const versionsRes = await fetch(`${origin}/api/versions`);
  const versions = await versionsRes.json();

  return new Response(
    JSON.stringify({
      ...data,
      version: versions.find((v: { id: number }) => v.id === data?.version),
      availableVersions: versions,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
