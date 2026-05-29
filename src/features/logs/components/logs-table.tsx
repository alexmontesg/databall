"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogsStore } from "@/features/logs/stores/logs-store";

export default function LogsTable() {
  const logs = useLogsStore((s) => s.logs);

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
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="w-[140px] text-xs text-muted-foreground">
                {new Date(log.timestamp).toLocaleTimeString()}
              </TableCell>

              <TableCell className="text-xs">{log.level}</TableCell>

              <TableCell className="font-mono text-xs">{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
