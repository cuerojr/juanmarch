import Image from 'next/image';
import SmallTitles from '../small-titles/small-titles';

function WhatWeBelielive() {
  return (
    <section className="what-we-believe pt-[13vw]">
        <div className="grid relative grid-cols-12 gap-2 mb-[10.5vw] mx-[8.3vw] z-20">
          <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-3 flex items-end">
            <SmallTitles title={"What we believe"} />
          </div>
          <h2 className="title text-[15vw] leading-[15vw] sm:text-[10vw] sm:leading-[10vw] col-start-1 col-end-13 sm:col-start-4 sm:col-end-11 text-4xl mb-[4vw]">
            <div className="title-mask">
              <div className="title-line">Data </div>
            </div>
            <div className="title-mask">
              <div className="title-line">Informs,</div>
            </div>
            <div className="title-mask">
              <div className="title-line text-nowrap">— Emotion</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Converts</div>
            </div>
          </h2>
          <div className="body col-start-1 col-end-13 sm:col-start-4 sm:col-end-9">
            <p>
              We believe that the most effective outcomes are achieved when
              data-driven insights are used to inspire emotive experiences.
              Leading to increased brand loyalty, long-term customer engagement,
              and higher conversion rates.
            </p>
          </div>
          <blockquote className="quote col-start-10 col-end-12 text-xs self-end hidden sm:block">
            {`"Our approach is informed by insight and research, but at the end
            of the day, we focus on making people feel"`}
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
  )
}

export default WhatWeBelielive