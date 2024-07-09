
import FooterImg from "@/app/components/footer-img/footer-img";
import StudioServices from "../components/studio-services/studio-services";
import HowWeWork from "../components/studio-how-we-work/how-we-work";
import WhatWeBelielive from "../components/studio-what-we-believe/what-we-belielive";
import TheApes from "../components/studio-the-apes/the-apes";
import StudioHeader from "../components/studio-header/studio-header";

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
      <StudioHeader header={header} />
      <StudioServices />
      <HowWeWork />      
      <WhatWeBelielive />
      <TheApes />
      <FooterImg />
    </main>
  );
}
