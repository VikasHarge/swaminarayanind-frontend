import React from "react";
import { ProductCard } from "../../../../utils/data";
import StyledText from "@/components/Shared/StyledText";

type OurProduxtCard = {
  product: ProductCard;
};

const OurProductCard = ({ product }: OurProduxtCard) => {
  return (
    <li className="shadow-lg cursor-pointer px-6 py-6 relative flex flex-col justify-between items-center rounded-xl group bg-white border border-text-4">
      <div className="flex flex-col justify-center items-center gap-3" >
        <div className="border-4 border-primary absolute w-full h-full rounded-xl -z-20 top-0 left-0 transition-all ease-in-out duration-300 opacity-0 group-hover:opacity-100 group-hover:top-2 group-hover:left-2"></div>
        <div className="w-[200px]  h-[200px] relative  flex justify-center items-center ">
          <img
            className="absolute object-contain w-full h-full"
            src={product.img}
            alt={product.name}
          />
        </div>
        <div>
          <StyledText>{product.name}</StyledText>
          <p className="text-xs text-text-3 line-clamp-3 ">{product.discr}</p>
        </div>
      </div>
    </li>
  );
};

export default OurProductCard;
