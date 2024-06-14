"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "@/app/components/section-title";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

function Contact() {
  const sectionContainer = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const headerContainer = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const animData = {
        duration: 1.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
        ),
        y: 0,
        opacity: 1,
        stagger: 0.02,
        transform: "rotate(0deg)",
      };

      const textAnimation = gsap
        .timeline({ paused: false })
        .to(".uppercase-reveal", animData);

      ScrollTrigger.create({
        trigger: textContainer.current,
        start: "top center",
        end: `bottom bottom`,
        animation: textAnimation,
        markers: false,
        scrub: false,
      });

      const titleAnimation = gsap
        .timeline({ paused: false })
        .to(headerContainer.current, animData);

      ScrollTrigger.create({
        trigger: sectionContainer.current,
        start: "top center",
        end: `bottom bottom`,
        animation: titleAnimation,
        markers: false,
        scrub: false,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionContainer}
      className="min-h-screen container bg-[#fcf6f4] py-[11.806vw] px-[6.25vw]"
    >
      <SectionTitle
        props={{
          preTitle: `Contacto`,
          title: `Contacto`,
        }}
      />
      <div className="mb-[9.028vw] ml-[22.153vw] overflow-hidden">
        <h2
          ref={headerContainer}
          className="translate-y-44 rotate-6 font-semibold text-[12vw] leading-[11.25vw] space-x-[-0.05em] whitespace-nowrap tracking-tighter"
        >
          <a
            className="hover-title block"
            href="https://alitwotimes.com/contact/"
            data-transition="contact"
          >
            <div className="font-base tracking-tighter relative">
              <div>Contactos</div>
              <span className=" w-full block bg-[#100f0f] h-[3px] mt-4"></span>
            </div>
          </a>
        </h2>
      </div>
      <div ref={textContainer} className="mb-[5.556vw] ml-[22.153vw]">
        <div className="mb-4">
          <h3 className="font-semibold text-[4.167vw] leading-[4.67vw] tracking-tighter uppercase">
            <div className="line overflow-hidden">
              <div className="uppercase-reveal translate-y-44 rotate-6">
                Me demoro
              </div>
            </div>
            <div className="line overflow-hidden">
              <div className="uppercase-reveal translate-y-44 rotate-6">
                en contestar
              </div>
            </div>
            <div className="line overflow-hidden">
              <div className="uppercase-reveal translate-y-44 rotate-6">
                los correos
              </div>
            </div>
          </h3>
        </div>
        <p className="font-semibold gap-[0.15rem] items-end flex text-[0.972vw] leading-[1.111vw] tracking-tighter uppercase">
          ¿Estás apurado? por favor
          <a href="https://alitwotimes.com/contact/" data-transition="contact">
            contactá
          </a>
          a mi equipo
        </p>
      </div>
    </section>
  );
}

export default Contact;
