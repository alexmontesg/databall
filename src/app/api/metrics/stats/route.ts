export async function GET() {
  const data = [
    { name: "Health", value: 2 },
    { name: "Ki", value: 3 },
    { name: "Attack", value: 3 },
    { name: "Defense", value: 2 },
    { name: "Speed", value: 3 },
  ];

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
