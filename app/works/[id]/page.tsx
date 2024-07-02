import WorksHeader from "@/app/components/works-header/works-header";
import WorksImagesSlider from "@/app/components/works-images-slider/works-images-slider";
import WorksParagraph from "@/app/components/works-paragraph/works-paragraph";
import WorksTitle from "@/app/components/works-title/works-title";

export default function WorkPAge() {
  return (
    <main>
      <WorksHeader />
      <WorksTitle />
      <WorksImagesSlider />
      <WorksParagraph />
    </main>
  );
}
