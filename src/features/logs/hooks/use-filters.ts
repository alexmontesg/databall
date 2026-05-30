import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LogLevel } from "../types/log-event";

export default function useFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const levels =
    (searchParams
      .get("levels")
      ?.split(",")
      .filter(Boolean) as Array<LogLevel>) ?? [];

  function toggleFilter(level: LogLevel) {
    const addLevel = () => [...levels, level];
    const removeLevel = () => levels.filter((l) => l !== level);
    const next = levels.includes(level) ? removeLevel() : addLevel();

    const params = new URLSearchParams(searchParams.toString());
    if (next.length === 0) {
      params.delete("levels");
    } else {
      params.set("levels", next.join(","));
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return { levels, toggleFilter };
}
