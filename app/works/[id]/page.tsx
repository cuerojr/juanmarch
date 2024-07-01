import Image from "next/image";

export default function WorkPAge() {
  return (
    <main>
      <header className="min-h-screen relative overflow-hidden pb-[5rem]">
        <div className="px-[7.7vw]">
          <div className="grid relative grid-cols-12 gap-2 mb-2 z-20">
            <div className="col-start-1 col-end-13 overflow-hidden mt-[8vw] mb-[6.8vw] text-slate-100">
              <h1 className="text-[10vw]  leading-tight">
                <div className="text-mask">
                  <div className="block text-left relative">Experiencia</div>
                </div>
                <div className="text-mask">
                  <div className="block text-left relative">Diseño</div>
                </div>
                <div className="text-mask">
                  <div className="block text-left relative">Digital</div>
                </div>
              </h1>
              <h2 className="subtitle">
                <div className="text-mask">
                  <div className="text-xs">Celebrating a Century of Cinema</div>
                </div>
              </h2>
              <svg
                data-v-03cf5fcb=""
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-arrow  h-[.8vw] w-[.8vw]"
              >
                <path
                  data-v-03cf5fcb=""
                  d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="col-start-1 sm:col-start-1 col-end-7 sm:col-end-7 overflow-hidden mb-[6vw] text-slate-100">
              <p className="intro text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vestibulum nec lorem nec posuere. Sed mattis ipsum
                leo, in semper turpis mollis in. Sed laoreet, augue gravida
                ornare pellentesque, sem ligula semper turpis, eget sagittis mi
                odio non est. Quisque.
              </p>
              <a
                data-v-5152decb=""
                data-v-03cf5fcb=""
                href="https://columbia100.watson.la/"
                target="_blank"
                className="link"
                id="47c37ff5-09a3-4d6f-bef4-1a54037b2b14"
              >
                <div data-v-5152decb="" className="wrap">
                  <div data-v-5152decb="" className="circle">
                    <div data-v-5152decb="" className="circle-fill"></div>
                    <svg
                      data-v-5152decb=""
                      viewBox="0 0 50 50"
                      xmlns="http://www.w3.org/2000/svg"
                      className="circle-outline h-[.8vw] w-[.8vw]"
                    >
                      <circle
                        data-v-5152decb=""
                        cx="25"
                        cy="25"
                        r="23"
                      ></circle>
                    </svg>
                    <div data-v-5152decb="" className="circle-icon">
                      <svg
                        data-v-5152decb=""
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-external h-[.8vw] w-[.8vw]"
                      >
                        <path
                          data-v-5152decb=""
                          d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div data-v-5152decb="" className="label">
                    Visit website
                    <div data-v-5152decb="" className="border"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 text-xs text-slate-100">
            <ul className="col-start-1 sm:col-start-1 col-end-3 sm:col-end-3">
              <li>
                <b>Client</b>
              </li>
              <li>Watson Design Group</li>
            </ul>
            <ul className="col-start-3 sm:col-start-3 col-end-5 sm:col-end-5">
              <li>
                <b>Services</b>
              </li>
              <li className="service">Visual Design</li>
              <li className="service">UI &amp; UX Design</li>
              <li className="service">Web Development</li>
            </ul>
            <ul className="col-start-5 sm:col-start-5 col-end-7 sm:col-end-7">
              <li className="industry">
                <b>Industries</b>
              </li>
              <li className="industry">Entertainment</li>
            </ul>
            <ul className="col-start-7 sm:col-start-7 col-end-9 sm:col-end-9">
              <li>
                <b>Date</b>
              </li>
              <li>
                <time>February ‘2024</time>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={`/movies.webp`}
          alt={``}
          className={`absolute top-0 left-0 right-0 z-10`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          loading="lazy"
          width={500}
          height={800}
        />
      </header>
      <section className="text py-[5rem] dark align-left">
        <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 px-[8.3vw]">
          <h2 className="title is-large col-start-4 sm:col-start-4 col-end-13 sm:col-end-13 text-[10vw] leading-tight mb-[1rem]">
            <div className="title-mask">
              <div className="title-line">Celebrating</div>
            </div>
            <div className="title-mask">
              <div className="title-line">a Century</div>
            </div>
            <div className="title-mask">
              <div className="title-line">of Cinema</div>
            </div>
          </h2>
          <h2 className="text-xs col-start-2 sm:col-start-2 col-end-4 sm:col-end-4">
            <div className="flex items-center gap-1">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon w-[.8vw] h-[.8vw]"
              >
                <path
                  data-v-669b4a84=""
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div data-v-669b4a84="" className="text">
                Objective
              </div>
            </div>
          </h2>
          <div className="text-xs col-start-4 sm:col-start-4 col-end-8 sm:col-end-8">
            <p className="text-slate-400">
              For a century, Columbia Pictures has brought drama, suspense,
              laughter, and love to the big screen. With stories, memories, and
              quotes spanning a hundred years, it's truly a celebration of
              fandom.
              <br />
              <br />
              As a tribute to this fandom, Watson Design Group commissioned us
              to craft a digital quiz, inviting fans to dive back into the films
              and series they love most and reintroduce them to others they may
              have missed.
            </p>
          </div>
        </div>
      </section>
      <section className="grid dark is-horizontal">
        <div className="">
          <div className="flex items-end gap-4 mb-4">
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/0eae58a8e2/columbia-pictures-grid-06-21-jumpstreet.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two men looking tough at a large outdoor party"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[40vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/4ee8f7e859/columbia-pictures-grid-02-equalizer.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A man with a tough gaze looks around behind a car"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[26vw]">
              <video loop muted>
                <source
                  src="https://a.storyblok.com/f/133769/x/996bf1f53a/columbia-pictures-grid-03-superbad.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/25f88fd2fa/columbia-pictures-grid-04-gilda.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A woman gambling among men"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/6941e6c93c/columbia-pictures-grid-05-men-in-black.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two men on black suite with a flash device"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[26vw]">
              <video loop muted>
                <source
                  src="https://a.storyblok.com/f/133769/x/61193bb86f/columbia-pictures-grid-06-spiderman.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="media w-[40vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/639f440368/columbia-pictures-grid-07-the-social-network.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="Two guys chilling outside"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
            <div className="media w-[19vw]">
              <img
                src="https://a.storyblok.com/f/133769/1920x1080/d3cc9066eb/columbia-pictures-grid-08-stand-by-me.jpg/m/800x450/filters:quality(90)"
                width="1920"
                height="1080"
                alt="A group of young boys in the forest"
                loading="lazy"
                sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 800px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
