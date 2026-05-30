"use client";

import { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogsStore } from "@/features/logs/stores/logs-store";
import { cn } from "@/lib/utils";
import type { LogEvent } from "@/features/logs/types/log-event";
import useFilters from "../hooks/use-filters";

const levelStyles = {
  INFO: "text-cyan-400",
  WARNING: "text-yellow-400",
  CRITICAL: "text-red-500",
};

const LogsTableRow = memo(function LogsTableRow({ log }: { log: LogEvent }) {
  return (
    <TableRow>
      <TableCell className="w-[140px] text-xs text-muted-foreground">
        {new Date(log.timestamp).toLocaleTimeString()}
      </TableCell>

      <TableCell
        className={cn("text-xs font-semibold", levelStyles[log.level])}
      >
        {log.level}
      </TableCell>

      <TableCell className="font-mono text-xs">{log.message}</TableCell>
    </TableRow>
  );
});

export default function LogsTable() {
  const logs = useLogsStore((s) => s.logs);
  const { levels } = useFilters();
  const filteredLogs = logs.filter((l) => {
    return levels.length === 0 || levels.includes(l.level);
  });

  return (
    <div className="max-h-[600px] overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredLogs.map((log) => (
            <LogsTableRow key={log.id} log={log} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
