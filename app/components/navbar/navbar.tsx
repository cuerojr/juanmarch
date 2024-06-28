"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className=" w-screen z-50 fixed">
        <div className="flex item-center justify-between px-[6.25vw] py-[3.25vw]">
          <Link className="text-xs nav-link" href={"/"}>Home</Link>
          <ul className="flex items-center gap-4">
            <li className="">
              <Link
              className="text-xs nav-link"
                href="/works"
              >
                Works
              </Link>
            </li>
            <li className="">
              <Link
              className="text-xs nav-link"
                href="/new-home"
              >
                New home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
