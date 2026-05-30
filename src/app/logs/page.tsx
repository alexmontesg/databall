"use client";

import { Suspense } from "react";
import { useLogsStream } from "@/features/logs/hooks/use-logs-stream";
import LogsTable from "@/features/logs/components/logs-table";
import PageTitle from "@/components/molecules/page-title";
import { LogsFilter } from "@/features/logs/components/logs-filter";

export default function Logs() {
  useLogsStream();

  return (
    <>
      <PageTitle>Logs</PageTitle>
      <Suspense>
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <LogsFilter />
          <LogsTable />
        </div>
      </Suspense>
    </>
  );
}
