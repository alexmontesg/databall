export async function GET() {
  const data = [{ powerLevel: 9001 }];

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
