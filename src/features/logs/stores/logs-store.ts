import { create } from "zustand";
import { LogEvent } from "@/features/logs/types/log-event";

interface LogsState {
  logs: LogEvent[];
  addLog: (log: LogEvent) => void;
  clearLogs: () => void;
}

const MAX_LOGS = 200;

export const useLogsStore = create<LogsState>((set) => ({
  logs: [],

  clearLogs: () => set({ logs: [] }),

  addLog: (log) =>
    set((state) => ({
      logs: [log, ...state.logs].slice(0, MAX_LOGS),
    })),
}));
