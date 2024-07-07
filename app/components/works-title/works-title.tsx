import React from "react";

export default function WorksTitle({
  worksTitle,
}: {
  worksTitle: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
}) {
  const { title, paragraph1, paragraph2 } = worksTitle;
  console.log("🚀 ~ paragraph1:", paragraph1)

  return (
    <section className="text py-[5rem] dark align-left">
      <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 px-[8.3vw]">
        <h2 className="title is-large col-start-4 sm:col-start-4 col-end-13 sm:col-end-13 text-[10vw] leading-[10vw] mb-[1rem]">
          {title &&
            title.split("\n ").map((text, i) => (
              <div key={i} className="text-mask">
                <div className="title-line">{text}</div>
              </div>
            ))}
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
          <p className="text-slate-400 mb-4">{paragraph1}</p>
          <p className="text-slate-400">{paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
