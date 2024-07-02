"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function WorksImagesSlider() {
  const imageSliderContainer = useRef<HTMLDivElement>(null);
  const topSlider = useRef<HTMLDivElement>(null);
  const bottomSlider = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([bottomSlider.current], {
        x: -100,
      });

      const topSliderAnimation = gsap
        .timeline({ paused: false })
        .to([topSlider.current], {
          x: -50,
        });

      ScrollTrigger.create({
        trigger: imageSliderContainer.current,
        start: "top center",
        end: `bottom center`,
        animation: topSliderAnimation,
        scrub: true,
        markers: true
      });

      const bottomSliderAnimation = gsap
        .timeline({ paused: false })
        .to([bottomSlider.current], {
          x: 10,
        });

      ScrollTrigger.create({
        trigger: imageSliderContainer.current,
        start: "top center",
        end: `bottom center`,
        animation: bottomSliderAnimation,
        scrub: true,
        markers: true
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={imageSliderContainer} className="grid dark is-horizontal">
        <div className="">
          <div ref={topSlider} className="flex items-end gap-4 mb-4">
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/0eae58a8e2/columbia-pictures-grid-06-21-jumpstreet.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two men looking tough at a large outdoor party"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[40vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/4ee8f7e859/columbia-pictures-grid-02-equalizer.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A man with a tough gaze looks around behind a car"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[26vw]">
              <video loop muted>
                <source
                  src="https://a.storyblok.com/f/133769/x/996bf1f53a/columbia-pictures-grid-03-superbad.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/25f88fd2fa/columbia-pictures-grid-04-gilda.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A woman gambling among men"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
          </div>
          <div ref={bottomSlider} className="flex items-start gap-4">
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/6941e6c93c/columbia-pictures-grid-05-men-in-black.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two men on black suite with a flash device"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[26vw]">
              <video loop muted>
                <source
                  src="https://a.storyblok.com/f/133769/x/61193bb86f/columbia-pictures-grid-06-spiderman.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="media w-[40vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/639f440368/columbia-pictures-grid-07-the-social-network.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two guys chilling outside"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/d3cc9066eb/columbia-pictures-grid-08-stand-by-me.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A group of young boys in the forest"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default WorksImagesSlider