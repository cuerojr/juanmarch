"use client";

import Image from "next/image";
import { useGlobal } from "@/lib/store";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Scale } from "lucide-react";

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

export default function Works() {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleContainer = useRef<HTMLDivElement>(null);
  const scroller = useGlobal((s) => s.scroller);
  const [img, setImg] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const onScrolled = useCallback(
    (event: any): any => {
      if (isAnimating) return;

      setIsAnimating(true);

      const scrollValue = Math.round(event.deltaY * 0.01);
      console.log(
        "🚀 ~ onScrolled ~ scrollValue:",
        titleContainer.current?.offsetHeight!
      );

      const upperThumbnail = {
        //clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        yPercent: -101,
        scale: 0.5,
      };
      const downerThumbnail = {
        //clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        yPercent: 101,
        scale: 0.5,
      };

      const tl = gsap.timeline({
        paused: false,
      });
      tl.set(
        [".img-thumbnail"],
        scrollValue > 0 ? upperThumbnail : downerThumbnail
      );

      const upperBg = {
        //clipPath: "polygon(0 100%, 100% 70%, 100% 100%, 0 100%)",
        yPercent: 150,
        scale: 1.5,
      };
      const downerBg = {
        //clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 60%)",
        yPercent: -150,
        scale: 1.5,
      };
      const tlBg = gsap.timeline({ paused: false });
      tlBg.set([".img-background"], scrollValue > 0 ? upperBg : downerBg);

      const upperTitle = {
        yPercent: 131,
      };
      const downerTitle = {
        yPercent: -101,
      };
      const tlTitle = gsap.timeline({
        paused: false,
        onComplete: () => setIsAnimating(false),
      });
      tlTitle.set([".img-title"], scrollValue > 0 ? upperTitle : downerTitle);

      setImg((img) => {
        if (img + scrollValue === data.length) return 0;
        if (img + scrollValue < 0) return data.length - 1;

        return img + scrollValue;
      });

      const animData = {
        duration: 1,
        delay: 0.3,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        //clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        yPercent: 0,
        scale: 1,
      };

      tl.to([".img-thumbnail"], animData);
      tlBg.to([".img-background"], animData);
      tlTitle.to([".img-title"], {
        duration: 1,
        delay: 0.7,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        //clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        yPercent: 0,
      });
    },
    [isAnimating]
  );

  useEffect(() => {
    window.addEventListener("wheel", onScrolled, { passive: true });
    return () => window.removeEventListener("wheel", onScrolled);
  }, [onScrolled, isAnimating]);

  return (
    <div className="h-screen w-screen fixed bg-neutral-900">
      <div className="h-full w-full flex items-center justify-center gap-10">
        <div className="overflow-hidden absolute left-[16vw] z-20">
          <h2
            ref={titleContainer}
            className="text-white text-4xl grid  img-title"
          >
            {data &&
              data[img]?.title
                .split("\n ")
                .map((word, i) => <span key={i}>{word}</span>)}
          </h2>
          <p className="m-0 text-xs">Casaca</p>
        </div>

        <div className="overflow-hidden absolute z-20">
          {data &&
            data.map((item, i) => (
              <Image
                key={item.title}
                src={item.img}
                alt={item.title}
                height={420}
                width={300}
                sizes="(max-width: 300px) 100vw, 33vw"
                className={`${i === img ? "block" : "hidden"} img-thumbnail`}
              />
            ))}
        </div>

        <div className="absolute inset-0 z-10">
          {data &&
            data.map((item, i) => (
              <Image
                key={item.title}
                src={item.img}
                alt={item.title}
                fill
                quality={80}
                sizes="100vw"
                className={`${
                  i === img ? "block" : "hidden"
                } img-background object-cover object-top`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
