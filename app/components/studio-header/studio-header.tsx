"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function StudioHeader({
  header,
}: {
  header: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}) {
  const { title, subtitle, description, image } = header;
  const headerContainer = useRef<HTMLDivElement>(null);
  const backgroundHeader = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([backgroundHeader.current], {
        top: 0,
      });
      const backgroundHeaderAnimation = gsap
        .timeline({ paused: false })
        .to([backgroundHeader.current], {
          top: -80,
        });

      ScrollTrigger.create({
        trigger: headerContainer.current,
        start: "top top",
        end: `bottom top`,
        animation: backgroundHeaderAnimation,
        scrub: true,
        //markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <header
      ref={headerContainer}
      className="min-h-screen relative overflow-hidden pb-[5rem] bg-slate-900"
    >
      <div className="px-[7.7vw]">
        <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 sm:pt-[7vw]">
          <div className="col-start-1 col-end-13 overflow-hidden mt-[8vw] mb-[6.8vw] text-slate-100 max-h-[65vw]">
            <h1 className="text-[15vw] leading-[15vw] sm:text-[10vw] sm:leading-[10vw] mb-4">
              {title &&
                title.split("\n ").map((text, i) => (
                  <div key={i} className="text-mask">
                    <div className="block text-left relative">{text}</div>
                  </div>
                ))}
            </h1>
            <h2 className="subtitle">
              <div className="text-mask">
                <div className="text-xs">{subtitle}</div>
              </div>
            </h2>
            <svg
              data-v-03cf5fcb=""
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-arrow  h-[.8vw] w-[.8vw]"
            >
              <path
                data-v-03cf5fcb=""
                d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {/* <div className="col-start-1 sm:col-start-1 col-end-13 sm:col-end-7 overflow-hidden mb-[6vw] text-slate-100">
            <p className="intro text-2xl">{ description }</p>
            <a
              href="https://columbia100.watson.la/"
              target="_blank"
              className="link"
            >
              <div className="wrap">
                <div className="circle">
                  <div className="circle-fill"></div>
                  <svg
                    data-v-5152decb=""
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-outline h-[.8vw] w-[.8vw]"
                  >
                    <circle data-v-5152decb="" cx="25" cy="25" r="23"></circle>
                  </svg>
                  <div className="circle-icon">
                    <svg
                      data-v-5152decb=""
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external h-[.8vw] w-[.8vw]"
                    >
                      <path
                        data-v-5152decb=""
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Visit website
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div> */}
        </div>
        <div className="grid relative grid-cols-12 mb-2 z-20 text-xs text-slate-100">
          <div className="body col-start-1 sm:col-start-7 col-end-13 sm:col-end-13 mb-4 sm:mt-[10vw]">
            <h3 className="text-xl">
              {`We explore and push the boundaries of digital for brands and
              businesses that strive to enhance people's lives through
              exceptional experiences.`}
            </h3>
          </div>
          <div className="body col-start-1 sm:col-start-7 col-end-13 sm:col-end-11">
            <p className="text-xs text-[#f8f8f8]">
              {`For over a decade, we've been using profound design aesthetics,
              meticulously crafted details, and surprising interactions to
              create digital experiences that spark conversation, inspire
              action, and drive desirability.`}
            </p>
          </div>
        </div>
      </div>
      <Image
        ref={backgroundHeader}
        src={image}
        alt={``}
        className={`absolute top-0 left-0 right-0 z-10`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        loading="lazy"
        width={500}
        height={800}
      />
    </header>
  );
}
