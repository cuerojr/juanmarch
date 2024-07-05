"use client";

import { NavItem } from "@/app/components/nav/item";
import { Menu } from "@/app/components/nav/menu";
import { useGlobal } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@mantine/hooks";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export function Nav({ items = [] }: { items: any[] }) {
  const [open, setOpen] = useGlobal((s) => [s.isMenuOpen, s.setIsMenuOpen]);
  const stage = useGlobal((s) => s.stage);
  const scroller = useGlobal((s) => s.scroller);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const [isIndexOpen, setIsIndexOpen] = useGlobal((s) => [
    s.isIndexOpen,
    s.setIsIndexOpen,
  ]);

  // const [openModal, setOpenModal] = useState<boolean>(false);
  // function handleModal() {
  //   setIsIndexOpen(true);
  // }

  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (open) {
      scroller?.stop();
    } else {
      scroller?.start();
    }
  }, [open, scroller]);

  // Close menu when stage changes (i.e. when navigating to a new page)
  useEffect(() => {
    setOpen(false);
  }, [stage, pathname, setOpen]);

  // Close menu when resizing to a larger screen
  useEffect(() => {
    if (!isSmallScreen) setOpen(false);
  }, [isSmallScreen, setOpen]);

  return (
    <>
      <nav className={cn("md:flex gap-x-8 items-center")}>
        <div className="rounded-md p-2 cursor-pointer" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </nav>

      <button
        onClick={toggle}
        className="md:hidden relative z-60 text-slate-100"
      >
        {open ? "Close" : "Menu"}
      </button>

      <Menu open={open} items={items} />
    </>
  );
}
