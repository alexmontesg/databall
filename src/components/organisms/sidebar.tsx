import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/molecules/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden md:block border-r px-4 py-6">
      <div className="px-2 py-3">
        <h2 className="text-sm font-semibold uppercase">DB OPS</h2>
        <p className="text-xs text-muted-foreground">Nimbus Cloud management</p>
      </div>

      <Separator className="my-4" />

      <Navigation />
    </aside>
  );
}
