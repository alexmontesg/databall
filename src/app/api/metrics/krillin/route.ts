export async function GET() {
  const data = [
    { saga: "Original DB", probability: 5 },
    { saga: "Saiyan", probability: 95 },
    { saga: "Namek", probability: 100 },
    { saga: "Androids", probability: 70 },
    { saga: "Cell", probability: 85 },
    { saga: "Buu", probability: 90 },
    { saga: "Battle of Gods", probability: 60 },
    { saga: "Tournament of Power", probability: 80 },
  ];

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
