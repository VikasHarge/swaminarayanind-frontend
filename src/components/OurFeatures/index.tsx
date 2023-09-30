import StyledText from "@components/Shared/StyledText";
import React from "react";
import OurFeatureCard from "./OurFeatureCard";
import OurServiceCard from "./ServiceCard";


export type ServiceCad = { icon: string; heading: string; discr: string };

const serviceCards: ServiceCad[] = [
  {
    heading: "Full Customised Service",
    discr: "We are trained as packaging material consultants so that they can provide the most cost-effective solutions to your multicolour packaging needs.",
    icon: "./customisation.png",
  },
  {
    heading: "Structural & Graphic Design",
    discr:
      "You can relie on us for all the help you need from the start to end of the process including graphic design.",
    icon: "./graphicdesign.png",
  },
  {
    heading: "Transportation",
    discr:
      "We go the extra mile to assure on-time delivery. We work with huge network of trucks and tempo operators to make sure that your shipment is not delayed for the lack of transport vehicle.",
    icon: "./transportation.png",
  },
];

export type FeatureCad = { heading: string; discr: string };

const featureCards: FeatureCad[] = [
  {
    heading: "Affordable",
    discr: "We offers  premium export quality at an affordable price. ",
  },
  {
    heading: "Quality",
    discr:
      "We maintain export quality standard and do not compromise in our quality productions",
  },
  {
    heading: "Durability",
    discr:
      "We maintain export quality standard and do not compromise in our quality productions",
  },
  {
    heading: "Reliability",
    discr:
      "We maintain export quality standard and do not compromise in our quality productions",
  },
];

const OurFeatures = () => {
  return (
    <div className="container py-8 lg:px-12">
      <div className="flex flex-col gap:1 lg:gap-2 items-center">
        <StyledText className="text-lg md:text-xl lg:text-2xl text-center w-full">
          Complete, Stand Alone Packing Solutions.
        </StyledText>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-text-2">
          We are One of the Leading Corrugated Box Manufacturers <br></br> &
          Suppliers in Mumbai, India
        </h1>

        <div className="py-2 lg:py-4">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 py-4 mb-4">
            {featureCards.map((card, index) => (
              <OurFeatureCard key={card.heading} card={card} />
            ))}
          </ul>

          <div className="w-full flex gap-10 lg:flex-row flex-col">
            <div className="flex-1 relative h-fit w-fit">
              <div>
                <img
                  src="./boxcoveyer.jpg"
                  alt="our feature box"
                  className=" rounded-2xl object-cover"
                />
              </div>
              <div className=" absolute top-4 -z-10 left-4 border-x-4 border-y-4 rounded-2xl border-primary w-full h-full "></div>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className=" md:pl-4">
                <StyledText className="text-lg md:text-xl lg:text-2xl text-center md:text-left  mb-4">
                  We Manufacture All Types of Corrugated Boxes, Carton Boxes,
                  Corrugated Sheets & Pads within your budget.
                </StyledText>

                <ul className="flex pl-2 md:pl-4 flex-col h-full justify-between gap-6 md:gap-8">
                  {serviceCards.map((card, index) => (
                    <OurServiceCard card={card} key={card.heading} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
