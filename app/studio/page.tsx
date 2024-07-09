"use client";
import Image from "next/image";

import WorksHeader from "@/app/components/works-header/works-header";
import FooterImg from "@/app/components/footer-img/footer-img";

import SmallTitles from "../components/small-titles/small-titles";
import StudioServices from "../components/studio-services/studio-services";
import HowWeWork from "../components/studio-how-we-work/how-we-work";
import WhatWeBelielive from "../components/studio-what-we-believe/what-we-belielive";
import TheApes from "../components/studio-the-apes/the-apes";

const header = {
  title: "Buildings\n Into\n Wild",
  subtitle: "Celebrating a Century of Cinema",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nunc vel consectetur lobortis, est ex maximus nunc, sed hendrerit metus mi euismod urna.",
  image: "/studio.webp",
};

export default function Studio() {

  return (
    <main>
      <WorksHeader header={header} />
      <StudioServices />
      <HowWeWork />      
      <WhatWeBelielive />
      <TheApes />
      <FooterImg />
    </main>
  );
}
