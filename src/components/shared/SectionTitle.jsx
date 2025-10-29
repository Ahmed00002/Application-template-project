import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <>
      <div className="py-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-base text-gray-400">{subTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
