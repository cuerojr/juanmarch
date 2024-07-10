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
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1031.8 233.2"
                className="fill-[#ffffff] w-[4rem] h-[1rem]"
              >
                <g>
                  <g>
                    <path
                      className="st0"
                      d="M49.1,210.1c0,13-10.3,22.9-23.8,22.9H6.9v-45.9h18.5C38.9,187.1,49.1,197,49.1,210.1z M43.8,210.1
			c0-10.4-8.1-18.2-18.4-18.2H12.2v36.2h13.4C35.8,228.2,43.8,220.4,43.8,210.1z"
                    />
                    <path
                      className="st0"
                      d="M188.1,187.1v4.8h-25.9v15.4h23.1v4.8h-23.1v16H189v4.8h-32v-45.9H188.1z"
                    />
                    <path
                      className="st0"
                      d="M311.3,192c-5.9,0-9.8,2.4-9.8,6.3c0,11.9,25.8,5.7,25.8,22.3c0,7.6-6.8,12.5-16.6,12.5
			c-6.7,0-13.2-2.9-17.6-7l2.4-4.5c4.3,4.1,10.1,6.4,15.3,6.4c6.6,0,10.7-2.7,10.7-7.1c0.1-12.3-25.8-5.8-25.8-22.2
			c0-7.2,6.4-11.8,15.9-11.8c5.3,0,10.7,1.7,14.6,4.3l-2.2,4.7C319.8,193.2,315,192,311.3,192z"
                    />
                    <path
                      className="st0"
                      d="M441.6,187.1V233h-5.2v-45.9H441.6z"
                    />
                    <path
                      className="st0"
                      d="M585.8,210.6h4.7v16.6c-4.5,3.6-10.9,6-17,6c-13.3,0-23.9-10.2-23.9-23.1c0-12.9,10.7-23.1,24.2-23.1
			c6.4,0,12.5,2.4,16.9,6.3l-3,3.8c-3.7-3.3-8.8-5.3-13.9-5.3c-10.5,0-18.9,8.1-18.9,18.3c0,10.2,8.5,18.4,18.9,18.4
			c4.1,0,8.5-1.4,12.1-3.9V210.6z"
                    />
                    <path
                      className="st0"
                      d="M706.9,187.1l27.5,37.3v-37.3h5.2V233h-5.4l-27.5-37.2V233h-5.2v-45.9H706.9z"
                    />
                    <path
                      className="st0"
                      d="M883.1,187.1v4.8h-25.9v15.4h23.1v4.8h-23.1v16h26.7v4.8h-32v-45.9H883.1z"
                    />
                    <path
                      className="st0"
                      d="M1022.9,233l-9.6-14.7c-0.9,0.1-1.9,0.1-2.9,0.1h-12.2V233h-5.2v-45.9h17.4c11.5,0,18.1,5.6,18.1,15.4
			c0,7.5-3.7,12.7-10.4,14.8l10.8,15.7H1022.9z M1010.3,213.6c8.3,0,13-3.7,13-10.9c0-7-4.7-10.7-13-10.7h-12.2v21.6H1010.3z"
                    />
                  </g>
                  <path
                    className="st0"
                    d="M117.2,134.3l-0.4-59.8l-28.5,48H68.8L40.3,76.5v57.8H0V3h36.4l42.8,70l41.6-70h36.4l0.4,131.3H117.2z"
                  />
                  <path
                    className="st0"
                    d="M265.6,3h-43.5l-57.4,131.3h45l8.8-22.9h49.9l8.8,22.9H323L265.6,3z M230.7,79.5l11.4-29.5h2.7l11.4,29.5
		H230.7z"
                  />
                  <path
                    className="st0"
                    d="M543.9,101.3H374.4v33h-44.3V3h220.7c36.6,0,59.8,19.1,59.8,49.5c0,18.9-9,33.2-24.8,41.3l27.6,40.5h-47.3
		L543.9,101.3z M548,37.1H374.4v30.8H548c12.2,0,18-5.8,18-15.4S560.2,37.1,548,37.1z"
                  />
                  <path
                    className="st0"
                    d="M622.1,68.6C622.1,28.3,653,0,695.2,0c25.7,0,45.9,9.4,58.9,26.3l-27.9,24.9c-7.7-9.8-16.9-15.4-28.7-15.4
		c-18.4,0-30.8,12.8-30.8,32.8c0,20.1,12.4,32.8,30.8,32.8c11.8,0,21-5.6,28.7-15.4l27.9,24.9c-12.9,16.9-33.2,26.3-58.9,26.3
		C653,137.3,622.1,109,622.1,68.6z"
                  />
                  <path
                    className="st0"
                    d="M1031.8,3v131.3h-44.3V85.9H811.1v48.4h-44.3V3h44.3v46.5h176.4V3H1031.8z"
                  />
                </g>
              </svg>
            </Link>
            <Nav
              items={[
                {
                  title: "Home",
                  href: "/",
                  id: "home",
                },
              ]}
            />
          </div>
        </div>
      </header>
    </Headroom>
  );
}
