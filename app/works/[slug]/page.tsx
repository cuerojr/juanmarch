import WorksHeader from "@/app/components/works-header/works-header";
import WorksImagesSlider from "@/app/components/works-images-slider/works-images-slider";
import WorksParagraph from "@/app/components/works-paragraph/works-paragraph";
import WorksTitle from "@/app/components/works-title/works-title";

import { workData } from "@/lib/worksData";
import { redirect } from "next/navigation";

export default function WorkPAge({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data = workData.find((img) => img.slug === slug);
  if(!data) redirect("/");
  
  const { header, worksTitle, imagesSlider }: any = data;
  return (
    <main>
      <WorksHeader header={header}/>
      <WorksTitle worksTitle={worksTitle}/>
      <WorksImagesSlider />
      <WorksParagraph />
    </main>
  );
}
