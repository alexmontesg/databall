import { navItems } from "@/lib/nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex flex-col gap-1", className)}>
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
  );
}
