"use client";

import Image from "next/image";
import WorksHeader from "@/app/components/works-header/works-header";
import { useRef } from "react";

function Studio() {
  const index1 = useRef<HTMLDivElement>(null);
  const index2 = useRef<HTMLDivElement>(null);
  const index3 = useRef<HTMLDivElement>(null);
  const index4 = useRef<HTMLDivElement>(null);

  return (
    <main>
      <WorksHeader />
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
      <section className="how-we-work light bg-black text-[#e4e0db] py-[15vw]">
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
              <h3 ref={index1} className="subtitle text-4xl mb-[1.7vw]">
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
                  feeling more than information. That's why we pour a lot of
                  soul and passion into our work, delivering experiences that
                  touch people on a deeper level.
                </p>
              </div>
            </div>
            <h2 className="title col-start-1 col-end-13 text-[17vw] my-[17vw] whitespace-nowrap">
              <div className="marquee flex items-center whitespace-nowrap">
                <div className="line">
                  Forever Upwards
                  <svg
                    viewBox="0 0 169 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon h-[10vw] w-[10vw]"
                  >
                    <path
                      d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="line">
                  Forever Upwards
                  <svg
                    viewBox="0 0 169 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon  h-[10vw] w-[10vw]"
                  >
                    <path
                      d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </h2>
            <div className="item col-start-2 col-end-5 relative">
              <span className="index absolute left-[-3.125vw] top-[9.3vw] text-[1.11vw]">
                03
              </span>
              <h3 className="subtitle text-4xl mb-[1.7vw]">
                Simplicity is the dot on our horizon
              </h3>
              <div className="body text-xs max-w-[19vw]">
                <p>
                  In today's world, we have become information-rich and
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
            "Our approach is informed by insight and research, but at the end of
            the day, we focus on making people feel."
          </blockquote>
        </div>
        <div className="image">
          <img
            src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/2400x1600/filters:quality(90)"
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
      <section className="the-apes text-[#e4e0db] bg-black py-[13vw]">
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
              <img
                src="https://a.storyblok.com/f/133769/1920x1280/b13859fdad/exo-ape-studio-mood-team-04.jpg/m/650x433/filters:quality(90)"
                width="1920"
                height="1280"
                alt="exo ape"
                loading="lazy"
                sizes="(max-width: 1024px) 350px, (max-width: 1280px) 430px, 650px"
              />
            </div>
            <div className="image w-[20vw] ml-auto">
              <img
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
    </main>
  );
}

export default Studio;
