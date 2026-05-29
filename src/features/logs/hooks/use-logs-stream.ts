"use client";

import { useEffect } from "react";
import { useLogsStore } from "@/features/logs/stores/logs-store";
const LOGS_API = "http://localhost:3000/api/logs/stream";

export function useLogsStream() {
  const addLog = useLogsStore((s) => s.addLog);
  const clearLogs = useLogsStore((state) => state.clearLogs);

  useEffect(() => {
    clearLogs();
  }, [clearLogs]);

  useEffect(() => {
    const events = new EventSource(LOGS_API);

    events.onmessage = (event) => {
      addLog(JSON.parse(event.data));
    };

    return () => {
      events.close();
    };
  }, [addLog]);
}
