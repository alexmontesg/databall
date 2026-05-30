import { Button } from "@/components/ui/button";
import { type EnvironmentListItem } from "../types/environment-list";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GlobeCheck, GlobeOff } from "lucide-react";

interface EnvironmentListItemProps {
  environment: EnvironmentListItem;
}

export default function EnvironmentListItem({
  environment,
}: EnvironmentListItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{environment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {environment.isUp ? (
          <div className="flex flex-row gap-2">
            <GlobeCheck className="text-cyan-400" />{" "}
            <span>Up and running</span>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <GlobeOff className="text-destructive" />{" "}
            <span>Not responding</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col">
        <Button asChild variant="outline" className="w-full py-6 text-base">
          <Link href={`/environments/${environment.id}`}>Open</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
