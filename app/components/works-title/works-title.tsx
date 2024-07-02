import React from 'react'

function WorksTitle() {
  return (
    <section className="text py-[5rem] dark align-left">
        <div className="grid relative grid-cols-12 gap-2 mb-2 z-20 px-[8.3vw]">
          <h2 className="title is-large col-start-4 sm:col-start-4 col-end-13 sm:col-end-13 text-[10vw] leading-tight mb-[1rem]">
            <div className="title-mask">
              <div className="title-line">Lorem </div>
            </div>
            <div className="title-mask">
              <div className="title-line">ipsum dolor</div>
            </div>
            <div className="title-mask">
              <div className="title-line">el sit</div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vestibulum nec lorem nec posuere. Sed mattis ipsum
              leo, in semper turpis mollis in. Sed laoreet, augue gravida ornare
              pellentesque, sem ligula semper turpis, eget sagittis mi odio non
              est. Quisque
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vestibulum nec lorem nec posuere. Sed mattis ipsum
              leo, in semper turpis mollis in. Sed laoreet, augue gravida ornare
              pellentesque, sem ligula semper turpis, eget sagittis mi odio non
              est. Quisque
            </p>
          </div>
        </div>
      </section>
  )
}

export default WorksTitle