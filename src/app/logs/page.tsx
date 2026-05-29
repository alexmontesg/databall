"use client";

import { useLogsStream } from "@/features/logs/hooks/use-logs-stream";
import LogsTable from "@/features/logs/components/logs-table";
import PageTitle from "@/components/molecules/page-title";

export default function Logs() {
  useLogsStream();

  return (
    <>
      <PageTitle>Logs</PageTitle>

      <LogsTable />
    </>
  );
}
