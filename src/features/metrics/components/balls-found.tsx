import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BallsFound() {
  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle>Dragon Balls Found</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 h-full">
        <div className="flex h-full w-full items-center justify-center">
          <div>
            <span className="font-black text-9xl">4</span>
            <span className="font-bold text-4xl">/7</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
