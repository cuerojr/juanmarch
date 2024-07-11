import React from "react";
import SmallTitles from "../small-titles/small-titles";

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
  console.log("🚀 ~ paragraph1:", paragraph1);

  return (
    <section className="text py-[5rem] dark align-left">
      <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 px-[8.3vw]">
        <h2 className="title is-large col-start-1 sm:col-start-4 col-end-13 sm:col-end-13 text-[15vw] leading-[15vw] sm:text-[10vw] sm:leading-[10vw] mb-[1rem]">
          {title &&
            title.split("\n ").map((text, i) => (
              <div key={i} className="text-mask">
                <div className="title-line">{text}</div>
              </div>
            ))}
        </h2>
        <div className="col-start-1 sm:col-start-2 col-end-13 sm:col-end-4">
          <SmallTitles title={"Objective"} />
        </div>
        <div className="text-xs col-start-1 sm:col-start-4 col-end-13 sm:col-end-8">
          <p className="text-[#0d0e1399] mb-8 sm:mb-4 text-xl sm:text-sm">
            {paragraph1}
          </p>
          <p className="text-[#0d0e1399] text-xl sm:text-sm">{paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
