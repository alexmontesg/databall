import { LogEvent, LogLevel } from "@/features/logs/types/log-event";
import { messages } from "@/app/api/logs/stream/messages";

export const dynamic = "force-dynamic";

const levels: LogLevel[] = ["INFO", "WARNING", "CRITICAL"];

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let cancelled = false;

      async function pushLogs() {
        while (!cancelled) {
          const log: LogEvent = {
            id: crypto.randomUUID(),
            message: messages[Math.floor(Math.random() * messages.length)],
            level: levels[Math.floor(Math.random() * levels.length)],
            timestamp: Date.now(),
          };

          try {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(log)}\n\n`),
            );
          } catch (err) {
            if (err instanceof Error) {
              console.log("Failed to enqueue message", err.message);
              cancelled = true;
            }
          }

          const delay = Math.random() * 1000;

          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }

      pushLogs();

      return () => {
        cancelled = true;
      };
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
