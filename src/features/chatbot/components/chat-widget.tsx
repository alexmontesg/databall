"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-8 right-8 md:bottom-16 md:right-16 z-50 p-0 bg-transparent hover:bg-transparent active:bg-transparent focus-visible:ring-0 shadow-none cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image
          src="/giru.webp"
          alt="Talk to support"
          height={80}
          width={80}
          className="rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
      </Button>

      {open ? (
        <Card className="fixed bottom-20 right-4 w-80 h-[500px] z-50 shadow-xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 border-b">
            <CardTitle className="text-sm font-medium">Chat</CardTitle>

            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="text-sm">Giru Giru! How can I help?</div>
          </CardContent>

          <CardFooter className="p-2 border-t">
            <div className="flex w-full gap-2 justify-between items-center">
              <Input placeholder="Type a message..." className="text-sm" />
              <Button size="sm">Send</Button>
            </div>
          </CardFooter>
        </Card>
      ) : null}
    </>
  );
}
