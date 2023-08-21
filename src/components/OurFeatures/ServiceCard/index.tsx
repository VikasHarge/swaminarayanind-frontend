import React from "react";
import {  ServiceCad } from "..";

type ServiceCardProps = {
  card: ServiceCad;
};

const OurServiceCard = ({ card }: ServiceCardProps) => {
  return (
    <li className="flex flex-row gap-4 items-center">
      <div className="min-w-[4rem]  h-14 " >
        <img src={card.icon} alt={card.heading} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1 items-start justify-center" >
        <h2 className="text-base md:text-lg font-bold text-secondary">{card.heading}</h2>
        <p className="text-xs md:text-sm font-semibold text-text-3 ">{card.discr}</p>
      </div>
    </li>
  );
};

export default OurServiceCard;
