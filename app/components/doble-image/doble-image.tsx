"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

function DobleImage({ url1, url2, start1, end1, start2, end2 }: any) {
  const sectionContainer = useRef<HTMLDivElement>(null);
  const imgContainer1 = useRef<HTMLDivElement>(null);
  const imgContainer2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([imgContainer1.current, imgContainer2.current], {
        y: 130,
        opacity: 0,
      });

      const titleAnimation = gsap
        .timeline({ paused: false })
        .to([imgContainer1.current, imgContainer2.current], {
          duration: 2.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.126,0.382 0.091,0.674 0.249,0.822 0.441,1.002 0.818,1.001 1,1 "
          ),
          y: 0,
          opacity: 1,
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
      className="grid relative grid-cols-12 gap-2 mb-2 l-e"
    >
      <div
        ref={imgContainer1}
        className={`${start1} ${end1} overflow-hidden opacity-0`}
      >
        <a href="#" data-transition="campaign">
          <div className="title absolute">
            <h3>
              <span> Du Telecom </span> Two for One Tickets
            </h3>
          </div>
          <div className="thumbnail">
            <img className="w-[100%]" src={url1} alt="de telecom too silly" />
            <video className="hidden" preload="none">
              <source
                src="https://alitwotimes.com/wp-content/uploads/2020/09/du-telecom-too-silly.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </a>
      </div>
      <div
        ref={imgContainer2}
        className={`${start2} ${end2} overflow-hidden opacity-0`}
        data-src="20"
      >
        <a href="#" data-transition="work">
          <div className="title absolute">
            <h3>
              <span> Badya Creative City </span> An Artful Life
            </h3>
          </div>
          <div className="thumbnail">
            <img
              className="w-[100%]"
              src={url2}
              alt="badya life imitates art"
            />
            <video className="hidden" preload="none">
              <source
                src="https://alitwotimes.com/wp-content/uploads/2020/04/badya-life-imitates-art.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DobleImage;
