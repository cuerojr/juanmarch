"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "@mantine/hooks";

export default function FooterImg() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const footerContainer = useRef<HTMLDivElement>(null);
  const footerContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!isSmallScreen) {
        gsap.set([footerContent.current], {
          y: -300,
        });
  
        const backgroundHeaderAnimation = gsap
          .timeline({ paused: false })
          .to([footerContent.current], {
            y: 0,
            duration: 3,
            ease: "none",
          });
  
        ScrollTrigger.create({
          trigger: footerContainer.current,
          start: "-250px center",
          end: `center center`,
          animation: backgroundHeaderAnimation,
          scrub: true,
        });
      }
    });
    return () => ctx.revert();

  }, [isSmallScreen]);

  return (
    <section ref={footerContainer} className="min-h-screen bg-slate-950 z-10 overflow-hidden">
      <div ref={footerContent} className="mx-[8.3vw] grid grid-cols-12 gap-2 pt-[13vw] pb-[5vw] z-0">
        <div className="col-start-1 col-end-10 sm:col-start-1 sm:col-end-6 title text-[#e0ccbb] text-[16vw] sm:text-[10vw] leading-tight mb-[1.5vw]">
          <div className="title-mask">
            <div className="title-line leading-[1]">Our</div>
          </div>
          <div className="title-mask">
            <div className="title-line leading-[1]">Story</div>
          </div>
        </div>
        <p className="body text-[#e0ccbb] col-start-1 col-end-11 sm:col-end-5">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
        </p>
        <div className="divider col-start-1 col-end-13 my-[4vw] bg-[#e0ccbb] h-[1px]"></div>
        <ul className="address text-[#e0ccbb] text-xs col-start-1 col-end-4">
          <li className="item">
            <a rel="noopener" target="_blank" href="#">
              San Lorenzo 833
              <br />
              2000 C.P., Rosario
              <br />
              Argentina
            </a>
          </li>
          <li className="item">
            <a href="#" className="footer-link">
              hello@cristalstudio.com
            </a>
          </li>
        </ul>
        <ul className="nav text-[#e0ccbb] text-xs col-start-4 col-end-6">
          <li className="item">
            <a href="/works" className="footer-link">
              Work
            </a>
          </li>
          <li className="item">
            <a href="/studio" className="footer-link">
              Studio
            </a>
          </li>
          <li className="item">
            <a href="/news" className="footer-link">
              News
            </a>
          </li>
          <li className="item">
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="social text-[#e0ccbb] text-xs col-start-6 col-end-9">
          <li className="item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Behance
            </a>
          </li>
          <li className="item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Dribbble
            </a>
          </li>
          <li className="item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
          </li>
          <li className="item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </li>
        </ul>
        <a href="/story" className="link">
          <div className="wrap">
            <div className="circle">
              <div className="circle-fill"></div>
              <svg
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-outline  h-[.8vw] w-[.8vw]"
              >
                <circle cx="25" cy="25" r="23"></circle>
              </svg>
              <div className="circle-icon">
                <svg
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-arrow h-[.8vw] w-[.8vw]"
                >
                  <path
                    d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                    fill="currentColor"
                    data-v-5152decb=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="label">
              Our Story
              <div className="border"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
