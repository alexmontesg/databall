"use client";

import { useEffect } from "react";
import { useLogsStore } from "@/features/logs/stores/logs-store";
const LOGS_API = "/api/logs/stream";

export function useLogsStream() {
  const addLog = useLogsStore((s) => s.addLog);
  const clearLogs = useLogsStore((state) => state.clearLogs);
  const setConnected = useLogsStore((state) => state.setConnected);

  useEffect(() => {
    clearLogs();
  }, [clearLogs]);

  useEffect(() => {
    const events = new EventSource(LOGS_API);

    events.onopen = () => {
      setConnected(true);
    };

    events.onmessage = (event) => {
      addLog(JSON.parse(event.data));
    };

    events.onerror = () => {
      setConnected(false);
    };

    return () => {
      events.close();
      setConnected(false);
    };
  }, [addLog, setConnected]);
}
