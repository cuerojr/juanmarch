"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

export default function VideoImg() {
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    //videoRef.current?.play();
    let ctx = gsap.context(() => {
        gsap.set(videoRef.current, {
            scale: 0.25,
          });
      const titleAnimation = gsap
        .timeline({ paused: false })
        .to(videoRef.current, {
          //duration: 2.5,
          ease: "linear",
          scale: 1,
          onStart: () => { 
            videoRef.current?.play();
            videoContainer.current?.classList.add("sticky", "top-0");
          }, 
          onComplete: () => { 
            videoContainer.current?.classList.remove("sticky", "top-0");
          },         
        });

      ScrollTrigger.create({
        trigger: videoContainer.current,
        start: "top center",
        end: "bottom center",
        animation: titleAnimation,
        markers: false,
        scrub: true,
        onLeave: () => { 
            videoRef.current?.pause();
        },
        onEnterBack: () => {
            videoRef.current?.play();
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={videoContainer} className="min-h-screen bg-slate-900 my-[11vw]">
      <video ref={videoRef} loop muted className="video scale-50">
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
