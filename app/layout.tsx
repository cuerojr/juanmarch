import "./style/globals.scss";
import "./global.scss";
import type { Metadata } from "next";
import { Client } from "@/app/components/client";

import { primaryFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Cursor from "@/app/components/custom-cursor/custom-cursor";
import Navbar from "@/app/components/navbar/navbar";


export const metadata: Metadata = {
  title: "ROJO ARQ",
  description: "Arquitectura, diseño y construcción.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(primaryFont.variable)}>
      <body>
        <Client />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
