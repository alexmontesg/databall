export async function GET() {
  const data = [
    { id: 1, version: "Saiyan" },
    { id: 2, version: "Super Saiyan" },
    { id: 3, version: "Super Saiyan 2" },
    { id: 4, version: "Super Saiyan 3" },
  ];

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
