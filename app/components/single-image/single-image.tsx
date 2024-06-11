"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function SingleImage({ start1, end1, url }: { start1: string, end1: string, url: string }) {
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
          ease: "easeOut",
          duration: 1,
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
            <img className="w-[100%]" src={url} alt="cleaning crew" />
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