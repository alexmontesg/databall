import EnvironmentListItem from "./environment-list-item";
import { type EnvironmentListItem as EnvironmentListItemType } from "../types/environment-list";

interface EnvironmentListProps {
  environments: Array<EnvironmentListItemType>;
}

export default function EnvironmentsList({
  environments,
}: EnvironmentListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {environments.map((environment) => (
        <EnvironmentListItem key={environment.id} environment={environment} />
      ))}
    </div>
  );
}
