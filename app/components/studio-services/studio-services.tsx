"use client";

import Image from "next/image";
import SmallTitles from "../small-titles/small-titles";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function StudioServices() {
  const imagesContainer = useRef<HTMLDivElement>(null);
  const image1 = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([image2.current], {
        y: -200,
      });
      const topSliderAnimation = gsap
        .timeline({ paused: false })
        .to([image1.current], {
          y: -150,
        });

      ScrollTrigger.create({
        trigger: imagesContainer.current,
        start: "-=500 center",
        end: `bottom center`,
        animation: topSliderAnimation,
        scrub: true,
      });

      const bottomSliderAnimation = gsap
        .timeline({ paused: false })
        .to([image2.current], {
          y: 0,
        });

      ScrollTrigger.create({
        trigger: imagesContainer.current,
        start: "+=100 center",
        end: `bottom center`,
        animation: bottomSliderAnimation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={imagesContainer} className="services dark pb-[13vw]">
      <div className="px-[7.7vw]">
        <ul className="grid relative grid-cols-12 gap-2 mb-2 z-20">
          <li className="image col-start-1 col-end-5">
            <Image
              ref={image1}
              src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/1000x1415/filters:quality(90)"
              width="1500"
              height="2123"
              alt="exo ape"
              loading="lazy"
              sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
            />
          </li>
          <li className="image col-start-6 col-end-11 mt-[7vw]">
            <Image
              src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/1000x669/filters:quality(90)"
              width="1500"
              height="1003"
              alt="exo ape"
              loading="lazy"
              sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
            />
          </li>
          <li className="image col-start-10 col-end-12">
            <Image
              ref={image2}
              src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/1000x1422/filters:quality(90)"
              width="569"
              height="809"
              alt="exo ape"
              loading="lazy"
              sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
            />
          </li>
        </ul>
        <div className="text grid relative grid-cols-12 gap-2 z-20">
          <div className="label col-start-1 col-end-3">
            <SmallTitles title={"Partners"} />
          </div>
          <h2 className="title col-start-3 col-end-10 text-[3.6vw] leading-[3.9vw]">
            We partner with brands and businesses that create exceptional
            experiences where people live, work and unwind.
          </h2>
          <div className="body col-start-3 col-end-10 mt-[3.7vw] text-xs text-slate-400">
            <ul>
              <li className="mb-2">
                <p>Interior Design &amp; Furniture</p>
              </li>
              <li className="mb-2">
                <p>Architecture &amp; Real Estate</p>
              </li>
              <li className="mb-2">
                <p>Hospitality, Travel &amp; Tourism</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioServices;
