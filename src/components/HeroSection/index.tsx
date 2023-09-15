import Image from "next/image";
import React, { useState } from "react";
import heroMain from "../../../public/images/main.png";
import classNames from "classnames";
import { Button } from "../Shared/Form/Button";
import FadeText from "../Shared/FadeText";
import QuotationForm from "../QuotationForm/Index";

const HeroSection = () => {


  return (
    <div className="min-h-screen heroBg flex justify-end  md:pb-0 md:justify-center items-end md:items-center">
      <div className="w-full h-screen md:h-auto pb-20 md:pb-0  container mt-0 md:mb-0 flex md:mt-8 lg:mt-10 lg:px-12  flex-col-reverse md:flex-row gap-3 md:gap-8 lg:gap-10 lg:py-8">
        <div className="flex-1 md:flex-[1.2]  flex flex-col justify-end items-center md:items-start md:justify-center gap-3 md:gap-6">
          <div>
            <div className={classNames("text-center md:text-left")}>
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
            <p className="text-3xl text-center md:text-left  lg:text-6xl font-extrabold">
              Box Manufacturer
            </p>
            <div className="text-3xl  lg:text-6xl font-extrabold  relative w-full md:w-fit">
              <p className="text-center md:text-left">in Mumbai<span className="text-primary">.</span></p>
              <small className="absolute left-1/2 -bottom-1 md:-bottom-2">
                <svg
                  // width="117"
                  // height="19"
                  viewBox="0 0 117 19"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-28 md:h-5 w-14 "
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
          <p className=" text-center md:text-left text-base md:text-lg lg:text-2xl text-text-2 font-semibold ">
            Welcome to{" "}
            <span className="text-primary">Swami Narayan Industries</span>, <br></br> your
            go-to source for high-quality, <br></br>affordable corrugated boxes <br></br> in
            Maharashtra and beyond!
          </p>
          <QuotationForm/>


        </div>

        <div className="hidden md:flex-1 md:flex justify-center items-center  md:w-full">
          {/* <Image src={heroMain} alt="heroMain" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
