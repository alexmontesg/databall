export type LogLevel = "INFO" | "WARNING" | "CRITICAL";

export interface LogEvent {
  id: string;
  message: string;
  level: LogLevel;
  timestamp: number;
}
