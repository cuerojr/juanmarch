"use client";

import Image from "next/image";
import { useGlobal } from "@/lib/store";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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

export default function Works() {

  const imagesList = useRef<(HTMLImageElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleContainer = useRef<HTMLDivElement>(null);
  const scroller = useGlobal((s) => s.scroller);
  const [img, setImg] = useState<number>(0);  
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const onScrolled = useCallback(
    (event: any): void => {
      if (isAnimating) return;
      setIsAnimating(true);

       const imagen = imageRef.current!;
       imagen.style.backgroundImage = `url('${data[img].img}')`;
       imagen.style.backgroundPosition= "top";
       imagen.style.backgroundSize= "cover";

      const scrollValue = (Math.round(event.deltaY)>= 0? 1:-1);
      const nextImg = (img + scrollValue + data.length) % data.length;
      const prevImg = (img - scrollValue + data.length) % data.length;
      
      //thumbnail
      const tl = gsap.timeline({
        paused: false,
      });
      tl.set([imagesList.current[prevImg]], {
        zIndex: 19
      });
      tl.set([imagesList.current[img]], {
        zIndex: 20
      });
      tl.set([imagesList.current[nextImg]], {
        y: scrollValue > 0 ? -420 : 420,
        zIndex: 21,
        scale: 1.75
      });

      //bg
      const tlBg = gsap.timeline({ paused: false });
      tlBg.set([".img-background"], {
        //clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        yPercent: scrollValue > 0 ? 150 : -150,
        scale: 1.5,
      });

      //title     
      const tlTitle = gsap.timeline({
        paused: false,
        onComplete: () => setIsAnimating(false),
      });
      tlTitle.set([".img-title"], {
        yPercent: scrollValue > 0 ? 131 : -101,
      });

      setImg((prev: number) => {
        if (prev + scrollValue === data.length) return 0;
        if (prev + scrollValue < 0) return data.length - 1;
        return prev + scrollValue;
      });

      tl.to([imagesList.current[nextImg]], {
        duration: 1,
        delay: 0.3,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        y: 0,
        scale: 1,
      });

      tlBg.to([".img-background"], {
        duration: 1,
        delay: 0.3,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        //clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        yPercent: 0,
        scale: 1,
      });

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
    [isAnimating, img]
  );

  useEffect(() => {
    window.addEventListener("wheel", onScrolled, { passive: true });
    return () => window.removeEventListener("wheel", onScrolled);
  }, [onScrolled, isAnimating, img]);

  return (
    <div className="h-screen w-screen fixed ">
      <div
        className="h-full w-full flex items-center justify-center gap-10 bg-neutral-900"
        ref={imageRef}
      >
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

        <div className="overflow-hidden relative z-20 h-[300px] w-[240px]">
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
                className={`${i===0? 'z-[20]':'z-[19]'} img-thumbnail absolute`}
              />
            ))}
        </div>

        <div className="absolute inset-0 z-10 bg-transparent">
          {data &&
            data.map((item, i) => (
              <Image
                key={item.title}
                src={item.img}
                alt={item.title}
                fill
                sizes="100vw"
                className={`
                  ${i === img ? "z-[21]" : "z-20"} 
                  img-background object-cover object-top`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
