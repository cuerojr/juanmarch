
import SectionTitle from "../section-title";
import SingleImage from "../single-image/single-image";
import DobleImage from "../doble-image/doble-image";

const works = [
  {
    type: "singleImage",
    url: "/movies.webp",
    start: "col-start-1 sm:col-start-4",
    end: "col-end-13 sm:col-end-11",
  },
  {
    type: "dobleImage",
    url1: "/building.webp",
    start1: "col-start-1 sm:col-start-3",
    end1: "col-end-13 sm:col-end-9",
    url2: "/river.webp",
    start2: "col-start-1 sm:col-start-9",
    end2: "col-end-13 sm:col-end-13",
  },
  {
    type: "singleImage",
    url: "/dancer.webp",
    start: "col-start-1 sm:col-start-5",
    end: "col-end-13 sm:col-end-10",
  },
  {
    type: "dobleImage",
    url1: "/movies.webp",
    start1: "col-start-1 sm:col-start-3",
    end1: "col-end-13 sm:col-end-7",
    url2: "/building.webp",
    start2: "col-start-1 sm:col-start-7",
    end2: "col-end-13 sm:col-end-13",
  },
  {
    type: "singleImage",
    url: "/river.webp",
    start: "col-start-1 sm:col-start-5",
    end: "col-end-13 sm:col-end-10",
  },
  {
    type: "dobleImage",
    url1: "/dancer.webp",
    start1: "col-start-1 sm:col-start-3",
    end1: "col-end-13 sm:col-end-8",
    url2: "/movies.webp",
    start2: "col-start-1 sm:col-start-8",
    end2: "col-end-13 sm:col-end-13",
  },
];

export default function Works() {
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
