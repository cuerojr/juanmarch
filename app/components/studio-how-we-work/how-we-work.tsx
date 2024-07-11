"use client";

import React, { useCallback } from "react";
import SmallTitles from "../small-titles/small-titles";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

function HowWeWork() {
  const textContainer = useRef<HTMLDivElement>(null);
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  let xPercent: number = 0;
  let direction: number = -1;

  const animation = useCallback(() => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }, [xPercent, direction]);

  useEffect(() => {
    requestAnimationFrame(animation);
  }, [animation]);

 
  return (
    <section className="how-we-work light bg-black text-[#e4e0db] py-[15vw]">
      <div className="px-[7.7vw]">
        <SmallTitles title={"How we work"} />
        <div className="intro w-full sm:w-[40vw] mt-[4.8vw] mb-[11.4vw] text-2xl">
          <p>
            We believe that all good things are achieved by those who are
            willing to put in passion, courage and craftsmanship.
          </p>
        </div>
        <div className="items grid relative grid-cols-12 gap-2 mb-2 z-20">
          <div className="item col-start-1 col-end-13 mb-[18vw] sm:mb-0 sm:col-start-2 sm:col-end-7 relative">
            <div className="grid relative grid-cols-10">
              <span className="index text-[#e5e1dccc] text-base sm:text-xs col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 flex sm:items-end">
                01
              </span>
              <h3 className="subtitle col-start-3 col-end-10 text-4xl sm:text-[3vw] sm:leading-[3.3vw]">
                Elevating sophistication across all senses
              </h3>
              <div className="body col-start-3 col-end-10 text-xs sm:max-w-[19vw] mt-[6vw] sm:mt-4">
                <p className="text-[#e5e1dccc] text-lg sm:text-sm">
                  We ensure that the high standards and sophistication of your
                  product are experienced by all senses while blurring the lines
                  between the physical and the digital world. We go deep into
                  details to provide a holistic experience that leaves a lasting
                  impression on your customers and fits seamlessly into your
                  existing ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-start-1 col-end-13 sm:mb-0 sm:col-start-7 sm:col-end-12 relative sm:mt-[10vw]">
            <div className="grid relative grid-cols-10">
              <span className="index text-[#e5e1dccc] text-base sm:text-xs col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 flex sm:items-end">
                02
              </span>
              <h3 className="subtitle col-start-3 col-end-10 text-4xl sm:text-[3vw] sm:leading-[3.3vw]">
                To be human is our greatest quality
              </h3>
              <div className="body col-start-3 col-end-10 text-xs sm:max-w-[19vw] mt-[6vw] sm:mt-4">
                <p className="text-[#e5e1dccc] text-lg sm:text-sm">
                  We believe that intuition is the most advanced technology we
                  have, and curiosity is our most powerful tool. Our team is
                  guided by the principles of compassion and honesty in our
                  day-to-day communications, and we understand that people value
                  feeling more than information. That´s why we pour a lot of
                  soul and passion into our work, delivering experiences that
                  touch people on a deeper level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title col-start-1 col-end-13 text-[17vw] my-[10vw]">
        <div className="relative marquee flex gap-4 whitespace-nowrap">
          <div ref={firstText}>Forever Upwards</div>
          <div ref={secondText} className="absolute left-[128%]">
            Forever Upwards
          </div>
        </div>
      </h2>
      <div className="px-[7.7vw]">
        <div className="items grid relative grid-cols-12 gap-2 mb-2 z-20">
          <div className="item col-start-1 col-end-13 mb-[18vw] sm:mb-0 sm:col-start-1 sm:col-end-6 relative">
            <div className="grid relative grid-cols-10">
              <span className="index text-[#e5e1dccc] text-base sm:text-xs col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 flex sm:items-end">
                03
              </span>
              <h3 className="subtitle col-start-3 col-end-10 text-4xl sm:text-[3vw] sm:leading-[3.3vw]">
                Simplicity is the dot on our horizon
              </h3>
              <div className="body col-start-3 col-end-10 text-xs sm:max-w-[19vw] mt-[6vw] sm:mt-4">
                <p className="text-[#e5e1dccc] text-lg sm:text-sm">
                  In today´s world, we have become information-rich and
                  time-poor. It is those who focus on what really matters that
                  set the tone. We approach every project with a keen eye for
                  simplicity and elegance. Great digital design is the perfect
                  blend of form and function that focuses on the essentials and
                  leaves behind the frivolous.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-start-1 col-end-13 sm:mb-0 sm:col-start-6 sm:col-end-11 relative sm:mt-[10vw]">
            <div className="grid relative grid-cols-10">
              <span className="index text-[#e5e1dccc] text-base sm:text-xs col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 flex sm:items-end">
                04
              </span>
              <h3 className="subtitle col-start-3 col-end-10 text-4xl sm:text-[3vw] sm:leading-[3.3vw]">
                Uncompromising standard of excellence
              </h3>
              <div className="body col-start-3 col-end-10 text-xs sm:max-w-[19vw] mt-[6vw] sm:mt-4">
                <p className="text-[#e5e1dccc] text-lg sm:text-sm">
                  We aim to push boundaries and exceed expectations with every
                  project, consistently delivering award-winning digital
                  experiences. We recognize that true art lies in the
                  intricacies, so we approach each project with a meticulous eye
                  for detail and a commitment to crafting tailor-made
                  experiences that capture the essence of your brand. Down to
                  earth but reaching for the stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
