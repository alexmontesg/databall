import { navItems } from "@/lib/nav";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  return (
    <aside className="hidden md:block border-r px-4 py-6">
      <div className="px-2 py-3">
        <h2 className="text-sm font-semibold uppercase">DB OPS</h2>
        <p className="text-xs text-muted-foreground">Kinto Cloud management</p>
      </div>

      <Separator className="my-4" />

      <nav className="flex flex-col gap-1">
        {navItems.map((i) => {
          const Icon = i.icon;
          return (
            <Link
              key={i.href}
              href={i.href}
              className="flex items-center gap-2 p-2 text-sm"
            >
              <Icon className="h-4 w-4" />
              {i.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
