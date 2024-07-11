import "./style/globals.scss";
import "./global.scss";
import type { Metadata } from "next";
import { Client } from "@/app/components/client";

import { primaryFont } from "@/lib/fonts";
import { SITE_NAME, SITE_DESCRPTION, SITE_URL, SITE_LANG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Cursor from "@/app/components/custom-cursor/custom-cursor";
import {Header} from "@/app/components/parana-header/header";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRPTION,
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={SITE_LANG} className={cn(primaryFont.variable)}>
      <body className=" w-screen overflow-x-hidden">
        <Client />
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
