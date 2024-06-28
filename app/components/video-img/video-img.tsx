"use client";

import { useEffect, useRef } from "react";
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

      gsap.timeline({ paused: false, scrollTrigger: {
        trigger: videoContainer.current,
        start: "top top",
        end: "+=1000",
        scrub: true,        
      } })
      .to(playRef.current , {
        x: 0,
        ease: "linear",
      })
      gsap.timeline({ paused: false, scrollTrigger: {
        trigger: videoContainer.current,
        start: "top top",
        end: "+=1000",
        scrub: true,        
      } })
      .to(reelRef.current , {
        x: 0,
        ease: "linear",
      });

      const titleAnimation = gsap
        .timeline({ paused: false })
        .to(videoRef.current, {
          //duration: 2.5,
          ease: "linear",
          scale: 1,
          onStart: () => {
            videoRef.current?.play();
          },
          onComplete: () => { 
            videoRef.current?.pause();
          }
        })

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
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={videoContainer}
      className={`h-[${videoContainer.current?.offsetHeight}px] bg-slate-900 relative`}
    >
      <h2 className={`inset-0 h-[${videoContainer.current?.offsetHeight}px] absolute w-screen flex justify-center items-center z-20 gap-5`}>
        <div ref={playRef} className="title-mask">
          <div className="title-line text-[6rem] text-slate-100">Play</div>
        </div>
        <div ref={reelRef} className="title-mask">
          <div className="title-line text-[6rem] text-slate-100">Reel</div>
        </div>
      </h2>
      <video ref={videoRef} loop muted className="video scale-50 z-10">
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          type="video/mp4"
        />
      </video>
      <div className={`h-[${videoContainer.current?.offsetHeight}px] inset-0 bg-slate-900 opacity-60 absolute`}></div>
    </section>
  );
}
