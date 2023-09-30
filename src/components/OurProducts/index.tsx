import React from "react";
import { ourProducts } from "../../../utils/data";
import OurProductCard from "./OurProductCard";

const OurProducts = () => {
  return (
    <div className="container py-8 lg:px-12">
      <div className="flex flex-col gap-8">
        <div>
          {/* <StyledText className="text-lg md:text-xl lg:text-2xl text-center w-full">
            Our Products
          </StyledText> */}
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-text-2">
            We offer a wide range of corrugated boxes with premium export
            quality
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" >
          {ourProducts.map((product) => (
            <OurProductCard key={product.name} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurProducts;
