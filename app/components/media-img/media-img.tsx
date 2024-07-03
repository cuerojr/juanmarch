"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "@mantine/hooks";

export default function MediaNews() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const image0Ref = useRef<HTMLImageElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const image4Ref = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const newsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
        gsap.set(textRef.current, {
          y: 200,
        });

        const leftImagesAnimation = gsap
          .timeline({ paused: false })
          .to([image1Ref.current, image3Ref.current], {
            x: -150,
          });

        const rightImagesAnimation = gsap
          .timeline({ paused: false })
          .to([image2Ref.current, image4Ref.current], {
            x: 150,
          });

        const textsAnimation = gsap
          .timeline({ paused: false })
          .to(textRef.current, {
            y: -30,
          });

        ScrollTrigger.create({
          trigger: newsContainer.current,
          start: "top center",
          end: `bottom center`,
          animation: leftImagesAnimation,
          scrub: true,
        });

        ScrollTrigger.create({
          trigger: newsContainer.current,
          start: "top center",
          end: `bottom center`,
          animation: rightImagesAnimation,
          scrub: true,
        });

        ScrollTrigger.create({
          trigger: newsContainer.current,
          start: "center center",
          end: `bottom center`,
          animation: textsAnimation,
          scrub: true,
        });
      
    });

    return () => ctx.revert();
  }, [isSmallScreen]);

  return (
    <section
      ref={newsContainer}
      className="min-h-screen bg-slate-50 py-[13.8vw]"
    >
      <ul className="media-wrapper relative">
        <li className="media w-[26vw] m-auto">
          <Image
            ref={image0Ref}
            src="/city.webp"
            width="748"
            height="1278"
            alt="awwwards annual nominee"
            loading="lazy"
            sizes="(max-width: 1024px) 440px, (max-width: 1280px) 700px, 1200px"
          />
        </li>
        <li className={`media w-[22vw] absolute left-[29vw] top-[13vw]`}>
          {/* <video ref={image1Ref} loop muted>
            <source
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
              type="video/mp4"
            />
          </video> */}
          <Image
            ref={image1Ref}
            src="/river.webp"
            width="548"
            height="1078"
            alt="awwwards annual nominee"
            loading="lazy"
            sizes="(max-width: 1024px) 440px, (max-width: 1280px) 700px, 1200px"
          />
        </li>
        <li className="media w-[12vw] absolute left-[58vw] top-[4vw]">
          <Image
            ref={image2Ref}
            src="/dancer.webp"
            width="348"
            height="494"
            alt="ottografie site of the year"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
            // width={500}
            // height={800}
          />
        </li>
        <li className="media w-[18vw] absolute left-[19vw] top-[45vw]">
          <Image
            ref={image3Ref}
            src="/building.webp"
            width="758"
            height="508"
            alt="fwaawwward aebele interiors"
            loading="lazy"
            sizes="(max-width: 1024px) 440px, (max-width: 1280px) 700px, 1200px"
            id="3643672"
          />
        </li>
        <li className="media w-[26vw] absolute left-[54vw] top-[40vw]">
          <Image
            ref={image4Ref}
            src="/movies.webp"
            width="748"
            height="1278"
            alt="awwwards annual nominee"
            loading="lazy"
            sizes="(max-width: 1024px) 440px, (max-width: 1280px) 700px, 1200px"
          />
        </li>
      </ul>
      <div ref={textRef} className="text w-[40.5vw] m-auto text-center">
        <h2 className="label flex items justify-center gap-1">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[.8vw] w-[.83vw]"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text-xs ">In the media</div>
        </h2>
        <h1 className="title text-[9vw] leading-tight mt-[3.4vw] mb-[2vw]">
          <div className="title-mask">
            <div className="title-line">Spread</div>
          </div>
          <div className="title-mask">
            <div className="title-line">the News</div>
          </div>
        </h1>
        <div className="body w-[31.25vw] mx-auto mb-[3.4vw]">
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </p>
        </div>
        <a
          href="/news"
          id="ebecddd1-b648-46b0-88d7-54f763b44147"
          className="link is-dark"
        >
          <div className="wrap flex items-center justify-center gap-2">
            <div className="circle">
              <div className="circle-fill"></div>
              <svg
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-outline h-[.8vw] w-[.83vw]"
              >
                <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
              </svg>
              <div className="circle-icon">
                <svg
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-arrow h-[.8vw] w-[.83vw]"
                >
                  <path
                    d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                    fill="currentColor"
                    data-v-5152decb=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="label text-xs">
              Browse all news
              <div className="border"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
