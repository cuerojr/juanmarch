import Image from 'next/image';
import SmallTitles from '../small-titles/small-titles';

function TheApes() {
  return (
    <section className="the-apes text-[#e0ccbb] bg-black py-[13vw]">
        <div className="px-[7.7vw] grid relative grid-cols-12 gap-2 mb-2 z-20">
          <div className="col-start-1 col-end-3 flex items-end">
            <SmallTitles title={"The Apes"} />
          </div>
          <h3 className="title col-start-4 col-end-13 text-[10vw] leading-[10vw]">
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
          <div className="body col-start-4 col-end-8 mt-[7vw]">
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
  )
}

export default TheApes