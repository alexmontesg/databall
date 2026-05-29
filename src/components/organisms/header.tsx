"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/molecules/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b px-4 md:px-24 py-6 bg-background">
      <div className="flex place-content-between min-w-full">
        <div className="flex items-center gap-6">
          <Image
            src="/logo.webp"
            width={40}
            height={40}
            alt="Logo of Databall"
            loading="eager"
          />
          <h1 className="text-2xl md:text-4xl font-black md:tracking-wider">
            Databall
          </h1>
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="cursor-pointer md:hidden p-0"
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </div>

      {isMenuOpen ? (
        <Navigation className="md:hidden mt-8 z-50 sticky" />
      ) : null}
    </header>
  );
}
