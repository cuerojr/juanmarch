"use client";

import Image from "next/image";
import { useGlobal } from "@/lib/store";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

const data = [
  {
    title: "100 Years\n Columbia\n Pictures",
    description: "Description",
    img: "/movies.webp",
  },
  {
    title: "Pixelflakes",
    description: "Description",
    img: "/building.webp",
  },
  {
    title: "Studio D",
    description: "Description",
    img: "/river.webp",
  },
  {
    title: "Plugged\n Live\n Show",
    description: "Description",
    img: "/dancer.webp",
  },
];

export default function WorksMainSlider() {
  const imagesList = useRef<(HTMLImageElement | null)[]>([]);
  const imagesBgList = useRef<(HTMLImageElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleContainer = useRef<HTMLDivElement>(null);
  const slideNumberRef = useRef<HTMLDivElement>(null);

  const scroller = useGlobal((s) => s.scroller);

  const [img, setImg] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const onScrolled = useCallback(
    (event: any): void => {
      if (isAnimating) return;
      setIsAnimating(true);

      const scrollValue = Math.round(event.deltaY) >= 0 ? 1 : -1;
      const nextImg = (img + scrollValue + data.length) % data.length;
      const prevImg = (img - scrollValue + data.length) % data.length;

      //thumbnail
      const tl = gsap.timeline({
        paused: false,
      });
      tl.set([imagesList.current[prevImg]], {
        zIndex: 19,
      });
      tl.set([imagesList.current[img]], {
        zIndex: 20,
      });
      tl.set([imagesList.current[nextImg]], {
        y: scrollValue > 0 ? -520 : 520,
        zIndex: 21,
        scale: 1.75,
        clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 10%)",
      });

      //bg
      const tlBg = gsap.timeline({ paused: false });
      tlBg.set([imagesBgList.current[prevImg]], {
        zIndex: 19,
        transform: "rotate(0deg)",
        display: "none",
      });
      tlBg.set([imagesBgList.current[img]], {
        zIndex: 20,
        transform: "rotate(0deg)",
        display: "block",
      });
      tlBg.set([imagesBgList.current[nextImg]], {
        yPercent: scrollValue > 0 ? 150 : -150,
        zIndex: 21,
        scale: 1.5,
        transform: "rotate(0deg)",
        display: "block",
      });

      //slide text
      const slideNumber = gsap.timeline({ paused: false,
        onComplete: () => setIsAnimating(false), });      
      slideNumber.set([".slide-number"], {
        yPercent: 0,
      });

      setImg((prev: number) => {
        if (prev + scrollValue === data.length) return 0;
        if (prev + scrollValue < 0) return data.length - 1;
        return prev + scrollValue;
      });

      tl.to([imagesList.current[nextImg]], {
        duration: 1,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        y: 0,
        scale: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });

      const secondBgTl = gsap.timeline({ paused: false });
      secondBgTl.to([imagesBgList.current[img]], {
        duration: 1,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        scale: 1.5,
        transform: "rotate(12deg)",
      });

      tlBg.to([imagesBgList.current[nextImg]], {
        duration: 1,
        delay: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        //clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        yPercent: 0,
        scale: 1,
      });

      slideNumber.to([".slide-number"], {
        duration: 0.45,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        yPercent: scrollValue > 0 ? 150 : -150,
        opacity: 0
      }).set(".slide-number", {
        yPercent: scrollValue > 0 ? -150 : 150,
      }).to([".slide-number"], {
        duration: .9,
        delay: .3,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        yPercent: 0,
        opacity: 1
      });

    },
    [isAnimating, img]
  );

  useEffect(() => {
    window.addEventListener("wheel", onScrolled, { passive: true });
    return () => window.removeEventListener("wheel", onScrolled);
  }, [onScrolled, isAnimating, img]);

  return (
    <section
      className="h-full w-full flex items-center justify-center gap-10 bg-neutral-900"
      ref={imageRef}
    >
      <div className=" absolute left-[16vw] z-20">
        <h2
          ref={titleContainer}
          className="text-white  text-4xl grid "
        >
          {data &&
            data[img]?.title
              .split("\n ")
              .map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <div className="slide-number">{word}</div>
                </div>
              ))}
        </h2>
        <p className="m-0 text-xs hidden">Casaca</p>
      </div>

      <div className="overflow-hidden absolute right-[3.5vw] bottom-[3.5vw] z-20 text-slate-100">
        <p className="m-0 text-xs overflow-hidden flex items-center gap-1">
          <span ref={slideNumberRef} className="slide-number w-100 block">0{img + 1}</span> / 0{data.length}
        </p>
      </div>

      <div className="overflow-hidden relative z-20 h-[380px] w-[280px]">
        {data &&
          data.map((item, i) => (
            <Image
              ref={(el) => {
                imagesList.current[i] = el;
              }}
              key={item.title}
              src={item.img}
              alt={item.title}
              height={420}
              width={300}
              sizes="(max-width: 300px) 100vw, 33vw"
              className={`${i === 0 ? "z-[20]" : "z-[19]"} absolute`}
            />
          ))}
      </div>

      <div className="absolute inset-0 z-10 bg-transparent">
        {data &&
          data.map((item, i) => (
            <Image
              ref={(el) => {
                imagesBgList.current[i] = el;
              }}
              key={item.title}
              src={item.img}
              alt={item.title}
              fill
              sizes="100vw"
              className={`
                  ${i === 0 ? "block" : "hidden"} 
                  img-background object-cover object-top`}
            />
          ))}
      </div>
    </section>
  );
}
