"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "@mantine/hooks";

export default function WorksImg() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const imagesContainer = useRef<HTMLDivElement>(null);
  // const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const image4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!isSmallScreen) {
        const image2Tl = gsap
          .timeline({
            paused: true,
          })
          .to(image2Ref.current, {
            y: 100,
            duration: 6,
          });

        ScrollTrigger.create({
          trigger: imagesContainer.current,
          start: "top center",
          end: `bottom center`,
          scrub: true,
          animation: image2Tl,
        });

        const image3Tl = gsap
          .timeline({
            paused: true,
          })
          .to(image3Ref.current, {
            y: 130,
            duration: 6,
          });

        ScrollTrigger.create({
          trigger: imagesContainer.current,
          start: "center center",
          end: `bottom center`,
          scrub: true,
          animation: image3Tl,
        });
      }
    });

    return () => ctx.revert();
  }, [imagesContainer, isSmallScreen]);

  return (
    <section className="min-h-screen px-[7.7vw] py-[14.30vw]">
      <div ref={imagesContainer} className="relative grid grid-cols-12 gap-2 mb-2 z-20">
        <div className="sm:absolute sm:top-[29vw] col-start-1 col-end-13 sm:col-start-9 sm:col-end-13">
          <h2 className="label flex gap-2 items-center">
            <svg
              data-v-669b4a84=""
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-[.8vw] w-[.8vw]"
            >
              <path
                data-v-669b4a84=""
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-xs">Featured Projects</div>
          </h2>
        </div>
        <h2 className="block col-start-1 col-end-13 sm:col-start-2 sm:col-end-8 text-left text-[17vw] leading-[17vw] text-slate-900 my-[5vw] sm:mb-[6.8vw]">
          Work
        </h2>
        <div className="sm:absolute sm:right-0 sm:top-[32vw] col-start-1 col-end-13 sm:col-start-9 sm:col-end-13 mb-[2rem] sm:mb-0">
          <p className="text-2xl sm:text-sm md:text-lg w-full">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        <div
          // ref={image1Ref}
          className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-8 overflow-hidden mb-5 sm:mb-0"
        >
          <Link href={`/works/columbia-pictures`}>
            <Image
              src={"/movies.webp"}
              alt={"/movies.webp"}
              sizes="100vw"
              className="w-full h-auto"
              width={500}
              height={620}
            />
            <div>
              <p className="mt-2 text-sm">
                <b>Lorem Ipsum</b>
                <span className="text-slate-400"> - Dolor sit amet</span>
              </p>
            </div>
          </Link>
        </div>
        <div
          ref={image2Ref}
          className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13 overflow-hidden mb-5 sm:mb-0 sm:mt-[20vw]"
        >
          <Link href={`/works/buildings-into-the-wild`}>
            <Image
              src={"/building.webp"}
              alt={"/building.webp"}
              sizes="100vw"
              className="w-full h-auto img-grow"
              width={500}
              height={620}
            />
            <div>
              <p className="mt-2 text-sm">
                <b>Lorem Ipsum</b>
                <span className="text-slate-400"> - Dolor sit amet</span>
              </p>
            </div>
          </Link>
        </div>
        <div
          ref={image3Ref}
          className="col-start-1 col-end-13 sm:col-start-6 sm:col-end-11 overflow-hidden mb-5 sm:mb-0 sm:mt-[11.5vw]"
        >
          <Link href={`/works/mistique-river`}>
            <Image
              src={"/river.webp"}
              alt={"/river.webp"}
              sizes="100vw"
              className="w-full h-auto img-grow"
              width={500}
              height={620}
            />
            <div>
              <p className="mt-2 text-sm">
                <b>Lorem Ipsum</b>
                <span className="text-slate-400"> - Dolor sit amet</span>
              </p>
            </div>
          </Link>
        </div>
        <div
          ref={image4Ref}
          className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-5 overflow-hidden sm:mt-[-10vw]"
        >
          <Link href={`/works/blue-dancer`}>
            <Image
              className="w-full h-auto img-grow"
              src={"/dancer.webp"}
              alt={"/dancer.webp"}
              sizes="100vw"
              width={500}
              height={620}
            />
            <div>
              <p className="mt-2 text-sm">
                <b>Lorem Ipsum</b>
                <span className="text-slate-400"> - Dolor sit amet</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
