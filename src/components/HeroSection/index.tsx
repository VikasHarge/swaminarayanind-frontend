import Image from "next/image";
import React from "react";
import heroMain from "../../../public/images/main.png";
import classNames from "classnames";
import FadeText from "../shared/icons/Components/FadeText";
import { Button } from "../shared/icons/Components/Form/Button";


const HeroSection = () => {
  return (
    <div className="min-h-screen heroBg flex justify-center items-center">
      <div className="w-full  container flex mt-8 lg:mt-10 lg:px-12  flex-col-reverse md:flex-row gap-3 md:gap-8 lg:gap-10 lg:py-8">
        <div className="flex-[1.2]  flex flex-col justify-center gap-6">
          <div>
            <div
              className={classNames(
                "",
              )}
            >
              <FadeText
                fadeInterval={1750}
                wordsArray={[
                  "Leading,",
                  "Affortable,",
                  "Trusted,",
                  "Professional,",
                  "High Quality,",
                ]}
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold">Box Manufacturer</h1>
            <div className="text-4xl lg:text-6xl font-extrabold  relative w-fit">
              in Mumbai<span className="text-primary" >.</span>
              <small className="absolute left-1/2 -bottom-2">
                <svg
                  width="117"
                  height="19"
                  viewBox="0 0 117 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.804 16.321C12.385 6.214 19.891 1.492 24.32 2.155c6.645.994-5.645 14.93 1.595 14.55 7.24-.38 11.288-7.775 18.27-9.073 6.981-1.297-1.12 8.174 10.553 7.563 11.674-.612 17.875-9.052 28.662-9.618 10.788-.565 2.099 6.53 9.328 7.627 3.127.474 10.65-.495 22.57-2.909"
                    stroke="#0751bf"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                  />
                </svg>
              </small>
            </div>
          </div>
          <p className="text-xl md:text-xl lg:text-2xl text-text-2 font-semibold">
            Welcome to{" "}
            <span className="text-primary">Swami Narayan Industries</span>, your
            go-to source for high-quality, affordable corrugated boxes in
            Maharashtra and beyond!
          </p>

          <Button size="md" varient="primary" className="text-sm h-12" >
            Get Quote
          </Button>

        </div>

        <div className="flex-1 flex justify-center items-center  md:w-full">
          <Image src={heroMain} alt="heroMain" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
