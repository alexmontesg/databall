import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ErrorState() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Error</CardTitle>
      </CardHeader>
      <CardContent>
        <p>There was an error</p>
      </CardContent>
    </Card>
  );
}
