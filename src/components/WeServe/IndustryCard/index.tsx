import React from "react";
import { Industry } from "../../../../utils/data";
import StyledText from "@/components/shared/icons/Components/StyledText";

type IndustryCardProps = {
  industry: Industry;
};

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <li className="flex justify-start items-center flex-col gap-2">
      <div className="flex justify-center items-center w-14 md:w-16 lg:w-20 aspect-square" >
        <img src={industry.icon} alt={industry.title}  className="w-full h-full" />
      </div>
      <div
        className="text-primary font-semibold  text-center text-xs md:text-sm lg:text-base"
        dangerouslySetInnerHTML={{
          __html: industry.title,
        }}
      ></div>
    </li>
  );
};

export default IndustryCard;
