import { Headroom } from "@/app/components/parana-header/headroom";
import { Nav } from "@/app/components/nav";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export async function Header() {

  return (
    <Headroom>
      <header className="fixed top-0 w-full bg-transparent py-6 z-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-lg font-semibold hover:underline underline-offset-4"
            >
              {/* <Image
                src={"/images/logo.png"}
                alt="logo Parana Extremoo"
                width={50}
                height={50}
                priority
              /> */}
              logo
            </Link>
            <Nav items={[{
              title: "Home",
              href: "/",
              id: "home",
            }]} />
          </div>
        </div>
      </header>
    </Headroom>
  );
}
