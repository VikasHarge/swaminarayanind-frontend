import React from "react";
import { Industry } from "../../../../utils/data";
import StyledText from "@/components/shared/icons/Components/StyledText";

type IndustryCardProps = {
  industry: Industry;
};

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <li className="flex group w-full h-fit relative justify-start items-center flex-col gap-2 bg-pr rounded-xl">
       <img src={industry.icon} alt={industry.title}  className="w-full h-full rounded-xl" />
      <div
        className="text-primary left-4 font-bold rounded-md group-hover:scale-110 transition-all ease-in-out duration-150  scale-100 px-2 py-2 right-4 bg-white absolute bottom-4 leading-none   text-center text-xs md:text-sm lg:text-sm"
        dangerouslySetInnerHTML={{
          __html: industry.title,
        }}
      ></div>
    </li>
  );
};

export default IndustryCard;
