import "./style/globals.scss";
import "./global.scss";
import type { Metadata } from "next";
import { Client } from "@/app/components/client";

import { primaryFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Cursor from "@/app/components/custom-cursor/custom-cursor";
import Navbar from "@/app/components/navbar/navbar";
import {Header} from "@/app/components/parana-header/header";
import Indice from "@/app/components/nav/indice";

export const metadata: Metadata = {
  title: "Design",
  description: "Super design website",
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
        {/* <Navbar /> */}
        <Header />
        <Indice />
        {children}
      </body>
    </html>
  );
}
