import React from "react";

function SmallTitles({ title }: { title: string }) {
  return (
    <h2 className="label flex gap-2 items-center">
      <svg
        data-v-669b4a84=""
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon h-[.5rem] w-[.5rem]"
      >
        <path
          data-v-669b4a84=""
          d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
          fill="currentColor"
        ></path>
      </svg>
      <div className="text-xl sm:text-xs">{title}</div>
    </h2>
  );
}

export default SmallTitles;
