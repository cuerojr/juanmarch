"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../footer/footer";

export default function Header() {
  const sectionContainer = useRef<HTMLDivElement>(null);
  const headerContainer = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".text-reveal", {
        y: 30,
      });

      gsap
        .timeline({ paused: false })
        .to(".text-reveal", {
          ease: "easeOut",
          duration: 1.2,
          y: 0,
          stagger: 0.15,
          delay: 0.1
        })

      gsap.set(headerContainer.current, {
        y: headerContainer.current?.offsetHeight! + 10,
      });

      gsap.timeline({ paused: false }).to(headerContainer.current, {
        ease: "easeOut",
        duration: 1,
        y: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={sectionContainer}
      id="h-hero"
      className="w-screen h-screen relative container"
    >
      <div className="heading flex top-[50%] absolute left-[6.25vw] right-[6.25vw] translate-y-[-8.25vw] overflow-hidden">
        <img
          ref={headerContainer}
          className="w-[34.72vw] ml-auto translate-y-44"
          src="https://alitwotimes.com/wp-content/themes/aliali/src/assets/svg/logo-ali-black.svg"
          alt="Ali Ali"
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute bottom-[6.25vw] left-[6.25vw]">
          <h1>Juan March</h1>
          <div className="overflow-hidden">
            <a
              className="text-reveal translate-y-28 text-xs"
              target="_blank"
              href="mailto:al@gmail.com"
            >
              juanmarch@gmail.com
            </a>
          </div>

          <h2 className="font-semibold text-4xl leading-8 tracking-tight">
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">Diseño</div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">Creación</div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">2024</div>
            </div>
          </h2>
        </div>
        <div className="absolute bottom-[6.25vw] right-[6.25vw] text-right">
          <h3 className="mb-7">
            <div className="overflow-hidden font-semibold">
              <div className="text-reveal translate-y-28"> *(juanmarch) </div>
            </div>
          </h3>
          <div className="text-xs">
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">
                Juan March es un diseñador creativo
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">de Rosario—Argentina y el</div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28">fundador de Estudio NAP</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
