import StyledText from "@/components/Shared/StyledText";
import Link from "next/link";
import React from "react";

export type FooterSectionList = {
  label: string;
  href: string;
};

type FooterSectionContainerProps = {
  title: string;
  sectionList: FooterSectionList[];
};

const FooterSectionContainer = ({
  title,
  sectionList,
}: FooterSectionContainerProps) => {
  return (
    <div className="flex flex-col gap-1" >
      <StyledText className="text-xl" >{title}</StyledText>
      <ul className="md:flex md:flex-col gap-2  grid grid-cols-2 " >
        {sectionList.map((item) => (
          <li key={item.label} className="flex flex-row gap-1 justify-start items-center leading-none">
            <small className="text-text-3 font-extrabold text-xs md:text-sm w-4">-&gt;</small>
            <div className="w-fit group" >
            <Link className="text-text-2 text-xs md:text-sm font-medium  pb-1 hover:text-primary-1" href={item.href}>{item.label}</Link>
            <div className="transition-all ease-in-out duration-150 group-hover:w-full w-0 border-b-2 border-b-primary-1" ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSectionContainer;
