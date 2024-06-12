"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../works/works";
import { CustomEase } from 'gsap/dist/CustomEase'

export default function Header() {
  const sectionContainer = useRef<HTMLDivElement>(null);
  const headerContainer = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".text-reveal", {
        y: 30,
        opacity: 0,
        transform: "rotate(6deg)",
      });

      gsap.timeline({ paused: false }).to(".text-reveal", {
        duration: 2.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.042,0.663 0.172,0.854 0.32,1.071 0.818,1.001 1,1 "
        ),
        y: 0,
        opacity: 1,
        stagger: 0.02,
        transform: "rotate(0deg)",
      });

      gsap.set(headerContainer.current, {
        y: headerContainer.current?.offsetHeight! + 10,
        transform: "rotate(6deg)",
      });

      gsap.timeline({ paused: false }).to(headerContainer.current, {
        duration: 2.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.042,0.663 0.172,0.854 0.32,1.071 0.818,1.001 1,1 "
        ),
        transform: "rotate(0deg)",
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
          className="w-[34.72vw] ml-auto translate-y-44 rotate-6"
          src="https://alitwotimes.com/wp-content/themes/aliali/src/assets/svg/logo-ali-black.svg"
          alt="Ali Ali"
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute bottom-[6.25vw] left-[6.25vw]">
          <h1 className="hidden">Juan March</h1>
          <div className="overflow-hidden">
            <a
              className="text-reveal translate-y-28 rotate-6 block"
              target="_blank"
              href="mailto:al@gmail.com"
            >
              <span>juanmarch@gmail.com</span>
            </a>
          </div>

          <h2 className="font-semibold text-4xl leading-8 tracking-tight">
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">Diseño</div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">
                Creación
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">2024</div>
            </div>
          </h2>
        </div>
        <div className="absolute bottom-[6.25vw] right-[6.25vw] text-right">
          <h3 className="mb-7">
            <div className="overflow-hidden font-semibold">
              <div className="text-reveal translate-y-28 rotate-6">
                *(juanmarch)
              </div>
            </div>
          </h3>
          <div className="text-xs">
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">
                Juan March es un diseñador creativo
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">
                de Rosario—Argentina y el
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-reveal translate-y-28 rotate-6">
                fundador de Estudio NAP
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
