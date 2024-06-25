"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

function SingleImage({
  start1,
  end1,
  url,
}: {
  start1: string;
  end1: string;
  url: string;
}) {
  const sectionContainer = useRef<HTMLDivElement>(null);
  const imgContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(imgContainer.current, {
        y: 130,
        opacity: 0,
      });

      const titleAnimation = gsap
        .timeline({ paused: false })
        .to(imgContainer.current, {
          duration: 2.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
          ),
          y: 0,
          opacity: 1,
          stagger: 1.5,
        });

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
    <div
      ref={sectionContainer}
      className="grid relative grid-cols-12 gap-2 mb-2 l-d"
    >
      <div
        ref={imgContainer}
        className={`${start1} ${end1} overflow-hidden opacity-0`}
        data-src="422"
      >
        <a href="#" data-transition="work">
          <div className="title absolute">
            <h3>
              <span> Heineken </span> The Cleaners
            </h3>
          </div>
          <div className="thumbnail">
            <Image
              src={url}
              alt="cleaning crew"
              height={420}
              width={420}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <video className="hidden" preload="none">
              <source
                src="https://alitwotimes.com/wp-content/uploads/2023/03/heineken-the-cleaners.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SingleImage;
