import { create } from "zustand";
import { LogEvent } from "@/features/logs/types/log-event";

interface LogsState {
  logs: LogEvent[];
  addLog: (log: LogEvent) => void;
  clearLogs: () => void;
  isConnected: boolean;
  setConnected: (connected: boolean) => void;
}

const MAX_LOGS = 200;

export const useLogsStore = create<LogsState>((set) => ({
  logs: [],
  isConnected: false,

  clearLogs: () => set({ logs: [] }),

  addLog: (log) =>
    set((state) => ({
      logs: [log, ...state.logs].slice(0, MAX_LOGS),
    })),

  setConnected: (connected) => set({ isConnected: connected }),
}));
