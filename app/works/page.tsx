"use client";
import { useGlobal } from "@/lib/store";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";

const data = [
  {
    title: "100 Years\n Columbia\n Pictures",
    description: "Description",
    img: "https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)",
  },
  {
    title: "Pixelflakes",
    description: "Description",
    img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
  },
  {
    title: "Studio D",
    description: "Description",
    img: "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/2400x2990/filters:quality(80)",
  },
  {
    title: "Plugged\n Live\n Show",
    description: "Description",
    img: "https://a.storyblok.com/f/133769/2400x2990/fab67b71d9/plugged-live-shows-hero.jpg/m/2400x2990/filters:quality(80)",
  },
];
export default function Works() {
  const scroller = useGlobal((s) => s.scroller);
  const [img, setImg] = useState(0);
  const [title, setTitle] = useState(data[0].title);

  const onScroll = useCallback((event: any) => {
    setImg((img) => {
      
      if ((img + event.deltaY * 0.01) === data.length) {
        return 0;
      } 

      if ((img + event.deltaY * 0.01) < 0) {
        return data.length - 1;
      }

      return img + event.deltaY * 0.01;
    });
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("wheel", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url('${data[img].img}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="h-screen w-screen fixed"
      >
        <div className="h-full w-full flex items-center justify-center gap-10">
          <h2 className="text-white text-4xl grid">{
            data && data[img].title.split('\n ').map((word) => (
              <span>{word}</span>
            ))
            }</h2>
          <img className="w-[15rem]" src={data[img].img} alt={title} />
        </div>
      </div>
    </div>
  );
}
