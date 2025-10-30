import React from "react";

const Title = ({ title, subTitle, align = "center" }) => {
  const alignmentClass =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`flex flex-col justify-center ${alignmentClass}`}>
      <h1 className="font-semibold text-4xl md:text-[40px]">{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
