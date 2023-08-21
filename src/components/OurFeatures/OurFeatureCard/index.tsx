import React from "react";
import { FeatureCad } from "..";

type OurFeatureCardProps = {
  card: FeatureCad;
};

const OurFeatureCard = ({ card }: OurFeatureCardProps) => {
  return (
    <li className="flex-1 group flex flex-col gap-1 rounded-md shadow-md p-3 border-2 border-text-4 border-opacity-10 transition-shadow ease-linear duration-300 hover:shadow-lg">
      <div className="flex lflex-col gap-2 items-center" >
        <div className="w-3 md:w-4 opacity-90 aspect-square transition-all ease-linear duration-300 bg-text-4 rounded-full group-hover:bg-primary" >
        </div>
        <h2 className=" text-base lg:text-lg font-bold text-primary">{card.heading}</h2>
      </div>
      <p className="text-xs ld:text-sm font-semibold text-text-3 ">{card.discr}</p>
    </li>
  );
};

export default OurFeatureCard;
