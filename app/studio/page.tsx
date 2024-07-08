"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import WorksHeader from "@/app/components/works-header/works-header";
import FooterImg from "@/app/components/footer-img/footer-img";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

const header = {
  title: "Buildings\n Into\n Wild",
  subtitle: "Celebrating a Century of Cinema",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nunc vel consectetur lobortis, est ex maximus nunc, sed hendrerit metus mi euismod urna.",
  image: "/studio.webp",
};

export default function Studio() {
  const textContainer = useRef<HTMLDivElement>(null);
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  let xPercent: number = 0;
  let direction: number = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main>
      <WorksHeader header={header} />
      <section className="services dark pb-[13vw]">
        <div className="px-[7.7vw]">
          <ul className="grid relative grid-cols-12 gap-2 mb-2 z-20">
            <li className="image col-start-1 col-end-5">
              <Image
                src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/1000x1415/filters:quality(90)"
                width="1500"
                height="2123"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
              />
            </li>
            <li className="image col-start-6 col-end-11 mt-[7vw]">
              <Image
                src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/1000x669/filters:quality(90)"
                width="1500"
                height="1003"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
              />
            </li>
            <li className="image col-start-10 col-end-12">
              <Image
                src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/1000x1422/filters:quality(90)"
                width="569"
                height="809"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 1000px"
              />
            </li>
          </ul>
          <div className="text grid relative grid-cols-12 gap-2 mt-[7vw] z-20">
            <h2 className="label col-start-1 col-end-3">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon h-[.8vw] w-[.8vw]"
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="text">Partners</div>
            </h2>
            <h2 className="title col-start-3 col-end-10 text-[3.6vw] leading-[3.9vw]">
              We partner with brands and businesses that create exceptional
              experiences where people live, work and unwind.
            </h2>
            <div className="body col-start-3 col-end-10 mt-[3.7vw] text-xs text-slate-400">
              <ul>
                <li>
                  <p>Interior Design &amp; Furniture</p>
                </li>
                <li>
                  <p>Architecture &amp; Real Estate</p>
                </li>
                <li>
                  <p>Hospitality, Travel &amp; Tourism</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="how-we-work light bg-black text-[#e0ccbb] py-[15vw]">
        <div className="px-[7.7vw]">
          <h2 className="label">
            <svg
              data-v-669b4a84=""
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-[.8vw] w-[.8vw]"
            >
              <path
                data-v-669b4a84=""
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text">How we work</div>
          </h2>
          <div className="intro w-[40vw] mt-[4.8vw] mb-[11.4vw] text-2xl">
            <p>
              We believe that all good things are achieved by those who are
              willing to put in passion, courage and craftsmanship.
            </p>
          </div>
          <div className="items grid relative grid-cols-12 gap-2 mb-2 z-20">
            <div className="item col-start-3 col-end-7 relative">
              <span className="index absolute left-[-3.125vw] top-[9.3vw] text-[1.11vw]">
                01
              </span>
              <h3 className="subtitle text-4xl mb-[1.7vw]">
                Elevating sophistication across all senses
              </h3>
              <div className="body text-xs max-w-[19vw]">
                <p>
                  We ensure that the high standards and sophistication of your
                  product are experienced by all senses while blurring the lines
                  between the physical and the digital world. We go deep into
                  details to provide a holistic experience that leaves a lasting
                  impression on your customers and fits seamlessly into your
                  existing ecosystem.
                </p>
              </div>
            </div>
            <div className="item col-start-8 col-end-12 relative">
              <span className="index absolute left-[-3.125vw] top-[9.3vw] text-[1.11vw]">
                02
              </span>
              <h3 className="subtitle text-4xl mb-[1.7vw]">
                To be human is our greatest quality
              </h3>
              <div className="body text-xs max-w-[19vw]">
                <p>
                  We believe that intuition is the most advanced technology we
                  have, and curiosity is our most powerful tool. Our team is
                  guided by the principles of compassion and honesty in our
                  day-to-day communications, and we understand that people value
                  feeling more than information. That´s why we pour a lot of
                  soul and passion into our work, delivering experiences that
                  touch people on a deeper level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="title col-start-1 col-end-13 text-[17vw] my-[10vw]">
          <div className="relative marquee flex gap-4 whitespace-nowrap">
            <div ref={firstText}>
              Forever Upwards
            </div>
            <div ref={secondText} className="absolute left-[128%]">
              Forever Upwards
            </div>
          </div>
        </h2>
        <div className="px-[7.7vw]">
          <div className="items grid relative grid-cols-12 gap-2 mb-2 z-20">
            <div className="item col-start-2 col-end-5 relative">
              <span className="index absolute left-[-3.125vw] top-[9.3vw] text-[1.11vw]">
                03
              </span>
              <h3 className="subtitle text-4xl mb-[1.7vw]">
                Simplicity is the dot on our horizon
              </h3>
              <div className="body text-xs max-w-[19vw]">
                <p>
                  In today´s world, we have become information-rich and
                  time-poor. It is those who focus on what really matters that
                  set the tone. We approach every project with a keen eye for
                  simplicity and elegance. Great digital design is the perfect
                  blend of form and function that focuses on the essentials and
                  leaves behind the frivolous.
                </p>
              </div>
            </div>
            <div className="item col-start-7 col-end-10 relative">
              <span className="index absolute left-[-3.125vw] top-[9.3vw] text-[1.11vw]">
                04
              </span>
              <h3 className="subtitle text-4xl mb-[1.7vw]">
                Uncompromising standard of excellence
              </h3>
              <div className="body text-xs max-w-[19vw]">
                <p>
                  We aim to push boundaries and exceed expectations with every
                  project, consistently delivering award-winning digital
                  experiences. We recognize that true art lies in the
                  intricacies, so we approach each project with a meticulous eye
                  for detail and a commitment to crafting tailor-made
                  experiences that capture the essence of your brand. Down to
                  earth but reaching for the stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="what-we-believe pt-[13vw]"
        id="e40531c8-a5f1-477a-8508-13454d52d2ac"
      >
        <div className="grid relative grid-cols-12 gap-2 mb-[10.5vw] mx-[8.3vw] z-20">
          <h2 className="label">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-[.8vw] w-[.8vw]"
            >
              <path
                data-v-669b4a84=""
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text">What we believe</div>
          </h2>
          <h2 className="title  text-[9vw] leading-[9vw] col-start-4 col-end-11 text-4xl mb-[4vw]">
            <div className="title-mask">
              <div className="title-line">Data </div>
            </div>
            <div className="title-mask">
              <div className="title-line">Informs,</div>
            </div>
            <div className="title-mask">
              <div className="title-line">— Emotion</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Converts</div>
            </div>
          </h2>
          <div className="body col-start-4 col-end-9">
            <p>
              We believe that the most effective outcomes are achieved when
              data-driven insights are used to inspire emotive experiences.
              Leading to increased brand loyalty, long-term customer engagement,
              and higher conversion rates.
            </p>
          </div>
          <blockquote className="quote col-start-10 col-end-12 text-xs self-end">
            ´´Our approach is informed by insight and research, but at the end
            of the day, we focus on making people feel.´´
          </blockquote>
        </div>
        <div className="image">
          <Image
            src="/studio2.webp"
            width="2500"
            height="1667"
            alt="exo ape"
            loading="lazy"
            sizes="(max-width: 1024px) 1280px, (max-width: 1280px) 1920px, 2400px"
          />
        </div>
        <div className="background">
          <div className="dark"></div> <div className="light"></div>
        </div>
      </section>
      <section className="the-apes text-[#e0ccbb] bg-black py-[13vw]">
        <div className="px-[7.7vw] grid relative grid-cols-12 gap-2 mb-2 z-20">
          <h2 className="label">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-[.8vw] w-[.8vw]"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text">The Apes</div>
          </h2>
          <h3 className="title col-start-4 col-end-13 text-[10vw] leading-[10vw] mb-[7vw]">
            <div className="title-mask">
              <div className="title-line">Design &amp;</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Technology</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Enthusiasts</div>
            </div>
          </h3>
          <div className="body col-start-4 col-end-8">
            <p>
              We are a team* of like-minded design enthusiasts and tech
              aficionados that explore the digital frontier with grit and
              dedication. Intrigued by beauty, fascinated by technology and
              fuelled with an everlasting devotion to digital craftsmanship and
              meaningful aesthetics.
            </p>
          </div>
          <div className="images flex col-start-2 col-end-12">
            <div className="image w-[33vw] mt-[10vw]">
              <Image
                src="https://a.storyblok.com/f/133769/1920x1280/b13859fdad/exo-ape-studio-mood-team-04.jpg/m/650x433/filters:quality(90)"
                width="1920"
                height="1280"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 430px, 650px"
              />
            </div>
            <div className="image w-[20vw] ml-auto">
              <Image
                src="https://a.storyblok.com/f/133769/1200x1790/ac2f6934ee/exo-ape-studio-mood-team-03.jpg/m/650x970/filters:quality(90)"
                width="1200"
                height="1790"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 430px, 650px"
              />
              <blockquote className="quote text-xs pt-[1.5vw] mt-[2vw]">
                *We believe in a fluid team approach that allows us to bring
                together the best designers, developers and agencies in the
                world in order to serve the needs of today’s clients.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <FooterImg />
    </main>
  );
}
