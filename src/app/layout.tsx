import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Train hard. Log honest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />
          {children}
        </FitLogProvider>
      </body>
    </html>
  );
}
