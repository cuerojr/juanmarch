
import SectionTitle from "../section-title";
import SingleImage from "../single-image/single-image";
import DobleImage from "../doble-image/doble-image";

const works = [
  {
    type: "singleImage",
    url: "https://mir-s3-cdn-cf.behance.net/projects/404/e9bc95192613105.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start: "col-start-4",
    end: "col-end-11",
  },
  {
    type: "dobleImage",
    url1: "https://mir-s3-cdn-cf.behance.net/projects/404/b07db2192608439.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start1: "col-start-3",
    end1: "col-end-9",
    url2: "https://mir-s3-cdn-cf.behance.net/projects/404/9919c4192012847.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start2: "col-start-9",
    end2: "col-end-13",
  },
  {
    type: "singleImage",
    url: "https://mir-s3-cdn-cf.behance.net/projects/404/e9bc95192613105.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start: "col-start-5",
    end: "col-end-10",
  },
  {
    type: "dobleImage",
    url1: "https://mir-s3-cdn-cf.behance.net/projects/404/35b1df191806115.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start1: "col-start-3",
    end1: "col-end-7",
    url2: "https://mir-s3-cdn-cf.behance.net/projects/404/cb4d2d165177243.Y3JvcCwyMTMxLDE2NjcsMTg0LDA.jpg",
    start2: "col-start-7",
    end2: "col-end-13",
  },
  {
    type: "singleImage",
    url: "https://mir-s3-cdn-cf.behance.net/projects/404/b3d8b7191983237.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start: "col-start-5",
    end: "col-end-10",
  },
  {
    type: "dobleImage",
    url1: "https://mir-s3-cdn-cf.behance.net/projects/404/73094e191902903.Y3JvcCwxNjEwLDEyNjAsMCww.jpg",
    start1: "col-start-3",
    end1: "col-end-8",
    url2: "https://alitwotimes.com/wp-content/uploads/2020/06/badya-life-imitates-art-1-800x600.webp",
    start2: "col-start-8",
    end2: "col-end-12",
  },
];
export default function Footer() {
  return (
    <section className="min-h-screen container bg-[#fcf6f4] py-[11.806vw] px-[6.25vw]">
      <SectionTitle
        props={{
          preTitle: `Contacto`,
          title: `Trabajos realizados`,
        }}
      />
      <div className="">
        {works &&
          works.map((work, index) =>
            work.type === "singleImage" ? (
              <SingleImage
                key={index}
                url={work.url as string}
                start1={work.start as string}
                end1={work.end as string}
              />
            ) : (
              <DobleImage
                key={index}
                url1={work.url1}
                start1={work.start1}
                end1={work.end1}
                url2={work.url2}
                start2={work.start2}
                end2={work.end2}
              />
            )
          )}
      </div>
    </section>
  );
}
