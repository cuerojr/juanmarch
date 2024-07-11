"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function VideoImg() {
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(videoRef.current, {
        scale: 0.25,
      });

      gsap.set(playRef.current, {
        x: -200,
      });

      gsap.set(reelRef.current, {
        x: 200,
      });

      gsap
        .timeline({
          paused: false,
          scrollTrigger: {
            trigger: videoContainer.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        })
        .to(playRef.current, {
          x: 0,
          ease: "linear",
        });
      gsap
        .timeline({
          paused: false,
          scrollTrigger: {
            trigger: videoContainer.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        })
        .to(reelRef.current, {
          x: 0,
          ease: "linear",
        });

      const titleAnimation = gsap
        .timeline({ paused: true })
        .to(videoRef.current, {
          //duration: 2.5,
          ease: "linear",
          scale: 1,
          onStart: () => {
            videoRef.current?.play();
          },
          onComplete: () => {
            videoRef.current?.pause();
          },
        });

      ScrollTrigger.create({
        trigger: videoContainer.current,
        start: "top top",
        end: "+=1000",
        animation: titleAnimation,
        scrub: true,
        pin: true,
        onLeave: () => {
          videoRef.current?.pause();
        },
        onEnterBack: () => {
          videoRef.current?.play();
        },
        onLeaveBack: () => {
          videoRef.current?.pause();
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={videoContainer}
      className={`h-[100dvh] flex items-center bg-slate-950 relative overflow-hidden`}
    >
      <div>
        <h2 className="label text-white absolute flex top-[3.5rem] gap-2 sm:top-[2rem] w-screen justify-center items-center z-20 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon h-[.8vw] w-[.8vw]"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text text-lg sm:text-xs">
            Work in motion
          </div>
        </h2>
        <h2
          className={`inset-0 h-screen absolute w-screen flex justify-center items-center z-20 gap-5`}
        >
          <div ref={playRef} className="title-mask">
            <div className="title-line text-[6rem] text-slate-100">Play</div>
          </div>
          <div ref={reelRef} className="title-mask">
            <div className="title-line text-[6rem] text-slate-100">Reel</div>
          </div>
        </h2>
        <div className="body text-white absolute flex bottom-[3.5rem] sm:bottom-[2rem] justify-center items-center z-20  w-screen">
          <p className="text-center w-[80vw] sm:w-[30vw] mx-auto text-lg sm:text-xs">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
        </div>
      </div>
      <video ref={videoRef} loop muted className="video scale-50 z-10">
        <source
          src="/reel.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className={`h-screen inset-0 bg-slate-900 opacity-60 bottom-0 absolute z-10`}
      ></div>
    </section>
  );
}
