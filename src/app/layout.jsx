"use client";

import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../components/ui/theme-provider";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { SidebarProvider } from "./contexts/SideBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-col min-h-screen font-sans antialiased custom-scrollbar",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <Header />
            {/* Ensure main grows only if there's space, but also respects content */}
            <main className="flex-grow pt-14 lg:pt-[60px]">{children}</main>
            <Footer />
          </SidebarProvider>
          <NextTopLoader color="#1778f2" />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
