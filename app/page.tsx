
import FooterImg from "@/app/components/footer-img/footer-img";
import HeaderImg from "@/app/components/header-img/header-img";
import MediaNews from "@/app/components/media-img/media-img";
import VideoImg from "@/app/components/video-img/video-img";
import WorksImg from "@/app/components/works-img/works-img";

import { Toaster } from '@/components/ui/toaster';

export default function Home() {  
  
  return (
    <main id="a-main" className="relative overflow-x-hidden">
      <HeaderImg />
      <WorksImg />
      <VideoImg />
      <MediaNews />
      <FooterImg />
    </main>
  )
}
