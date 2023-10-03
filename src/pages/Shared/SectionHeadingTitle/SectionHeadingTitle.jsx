import React from "react";

const SectionHeadingTitle = ({ sectionTitle, sectionHeading }) => {
  return (
    <div className="w-[350px] mx-auto text-center">
      <h1 className="text-semibold mb-2">----{sectionTitle}------</h1>
      <h1 className="border-t-4 py-2 border-b-4 text-semibold text-2xl text-warning">{sectionHeading}</h1>
    </div>
  );
};

export default SectionHeadingTitle;
