import React from "react";
import SmallTitles from "../small-titles/small-titles";

function WorksParagraph() {
  return (
    <section className="text py-[5rem] dark align-left">
      <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 px-[8.3vw]">
        <div className="col-start-1 sm:col-start-2 col-end-13 sm:col-end-4">
          <SmallTitles title={"Solution"} />
        </div>
        <div className="text-xs col-start-1 sm:col-start-4 col-end-13 sm:col-end-8">
          <p className="text-[#0d0e1399] mb-8 sm:mb-4 text-xl sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum nec lorem nec posuere. Sed mattis ipsum leo,
            in semper turpis mollis in. Sed laoreet, augue gravida ornare
            pellentesque, sem ligula semper turpis, eget sagittis mi odio non
            est. Quisque
          </p>
          <p className="text-[#0d0e1399] text-xl sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vestibulum nec lorem nec posuere. Sed mattis ipsum leo,
            in semper turpis mollis in. Sed laoreet, augue gravida ornare
            pellentesque, sem ligula semper turpis, eget sagittis mi odio non
            est. Quisque
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorksParagraph;
