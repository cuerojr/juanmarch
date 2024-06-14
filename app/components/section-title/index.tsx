"use client";
import React, { useEffect, useRef } from "react";
import s from "./style.module.scss";
import { Title } from "@/app/types/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StripesContainer from "../common/stripes";

export default function SectionTitle({ props }: { props: Title }) {
  const { title, preTitle, titleColor = "#1e1e1c" } = props;
  const sectionContainer = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const preTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.set([titleRef.current, preTitleRef.current], {
      //   y: 20,
      //   opacity: 0,
      // });

      const titleAnimation = gsap
        .timeline({ paused: false })
        .to([titleRef.current, preTitleRef.current], {
          opacity: 1,
          y: 0,
        });

      // scroll trigger titulo imagen pineada
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
    <div ref={sectionContainer} className="px-8">
      <div className="head">
        <h2
          ref={titleRef}
          className="uppercase text-xs opacity-0 translate-y-4"
        >
          {title}
        </h2>
        <span 
          style={{
            height: "1px",
            width: "0.833vw",
            content: "",
            display: "block",
            background: "#100f0f",
          }}
        ></span>
      </div>
    </div>
  );
}
