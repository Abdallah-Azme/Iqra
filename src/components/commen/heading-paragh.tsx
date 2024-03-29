import React from "react";
type HeadingParagraphProps = {
  headingText: string;
  pargraphText: string | string[];
  id: string;
};

export default function HeadingParagraph({
  headingText,
  pargraphText,
  id,
}: HeadingParagraphProps) {
  return (
    <div id={id} className="text-white text-center text-lg ">
      <h3 className="text-2xl  lg:text-4xl text-white my-5 inline-flex rounded-3xl p-5 tracking-wider leading-10 bg-slate-500/60 ">
        {headingText}
      </h3>
      <p className="text-md md:text-xl"> {pargraphText}</p>
    </div>
  );
}
