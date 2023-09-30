import { Industry } from "@util/data";
import React from "react";


type IndustryCardProps = {
  industry: Industry;
};

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <li className="flex group w-full h-fit relative justify-start items-center flex-col md:gap-2 rounded-full">
       <img src={industry.icon} alt={industry.title}  className="w-full h-full aspect-square rounded-full" />
      <div
        className="text-primary left-4 font-bold rounded-md transition-all ease-in-out duration-150  px-2 py-2 right-4 bg-white  leading-none   text-center text-xs md:text-sm lg:text-sm"
        dangerouslySetInnerHTML={{
          __html: industry.title,
        }}
      ></div>
    </li>
  );
};

export default IndustryCard;
