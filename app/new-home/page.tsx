
import FooterImg from "../components/footer-img/footer-img";
import HeaderImg from "../components/header-img/header-img";
import MediaNews from "../components/media-img/media-img";
import VideoImg from "../components/video-img/video-img";
import WorksImg from "../components/works-img/works-img";

export default function MarinaHome() {
  return (
    <main>
      <HeaderImg />
      <WorksImg />
      <VideoImg />
      <MediaNews />
      <FooterImg />
    </main>
  );
}
