import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import SiteHeader from "@/components/organisms/header";
import Sidebar from "@/components/organisms/sidebar";
import SiteFooter from "@/components/organisms/footer";
import QueryProvider from "@/components/providers/query-provider";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Databall",
  description: "Your Dataperro-like dashboard for Dragon Ball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans">
          <SiteHeader />

          <div className="grid grid-cols-1 md:grid-cols-[225px_1fr] flex-1">
            <Sidebar />
            <main className="flex flex-1 flex-col gap-8 w-full py-8 px-4 md:px-12">
              <QueryProvider>{children}</QueryProvider>
            </main>
          </div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
