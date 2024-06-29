"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function WorksImg() {
  const imagesContainer = useRef<HTMLDivElement>(null);
  // const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const image4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // gsap.set(image1Ref.current, {
      //   //y: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(-100)) + Math.ceil(-100)),
      // y:-70
      // });
      console.log(Math.floor(Math.random() * (Math.floor(100) - Math.ceil(-100)) + Math.ceil(-100)))
      gsap.set(image2Ref.current, {
        y: 100,
      });
      gsap.set(image3Ref.current, {
        y: -200,
      });
      gsap.set(image4Ref.current, {
        y: 100,
      });
  
      // const image1Tl = gsap.timeline({paused: true, scrollTrigger: {
      //   trigger: imagesContainer.current,
      //   start: "top center",
      //   end: `bottom bottom`,
      //   markers: false,
      //   scrub: true,
      // }}).to(image1Ref.current, {
      //   //y: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(-100)) + Math.ceil(-100)),
      //   y: 70
      // })
      const image2Tl = gsap.timeline({paused: true, scrollTrigger: {
        trigger: imagesContainer.current,
        start: "top center",
        end: `bottom center`,
        scrub: true,
      }}).to(image2Ref.current, {
        y: -100,
      })
      const image3Tl = gsap.timeline({paused: true, scrollTrigger: {
        trigger: imagesContainer.current,
        start: "top center",
        end: `bottom center`,
        scrub: true,
      }}).to(image3Ref.current, {
        y: 10,
      });
      const image4Tl = gsap.timeline({paused: true, scrollTrigger: {
        trigger: imagesContainer.current,
        start: "center center",
        end: `bottom center`,
        scrub: true,
      }}).to(image4Ref.current, {
        y: -100,
      })
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={imagesContainer} className="min-h-screen px-[7.7vw] py-[14.30vw]">
      <h2 className="block text-left  text-[16vw] leading-none text-slate-900 ml-[7.7vw] mb-[6.8vw]">
        Work
      </h2>
      <div className="grid  grid-cols-12 gap-2 mb-2 z-20">
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
              height={300}
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
          className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13 overflow-hidden mb-5 sm:mb-0 sm:mt-[29vw]"
        >
          <Image
            src={"/building.webp"}
            alt={"/building.webp"}
            sizes="100vw"
            className="w-full h-auto"
            width={500}
            height={300}
          />
          <div>
            <p className="mt-2 text-sm">
              <b>Lorem Ipsum</b>
              <span className="text-slate-400"> - Dolor sit amet</span>
            </p>
          </div>
        </div>
        <div
          ref={image3Ref}
          className="col-start-1 col-end-13 sm:col-start-6 sm:col-end-11 overflow-hidden mb-5 sm:mb-0 sm:mt-[11.5vw]"
        >
          <Image
            src={"/river.webp"}
            alt={"/river.webp"}
            sizes="100vw"
            className="w-full h-auto"
            width={500}
            height={300}
          />
          <div>
            <p className="mt-2 text-sm">
              <b>Lorem Ipsum</b>
              <span className="text-slate-400"> - Dolor sit amet</span>
            </p>
          </div>
        </div>
        <div
          ref={image4Ref}
          className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-5 overflow-hidden sm:mt-[-10vw]"
        >
          <Image
            className="w-full h-auto"
            src={"/dancer.webp"}
            alt={"/dancer.webp"}
            sizes="100vw"
            width={500}
            height={300}
          />
          <div>
            <p className="mt-2 text-sm">
              <b>Lorem Ipsum</b>
              <span className="text-slate-400"> - Dolor sit amet</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
