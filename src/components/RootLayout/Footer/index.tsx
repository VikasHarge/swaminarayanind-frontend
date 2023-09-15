import { Button } from "@/components/Shared/Form/Button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  TelIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/Shared/Icons";
import StyledText from "@/components/Shared/StyledText";
import React from "react";
import ContactNumber from "./ContactNumber";
import FooterSectionContainer, {
  FooterSectionList,
} from "./FooterSectionContainer";

const ResourcesData: FooterSectionList[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
];

const ProductListData: FooterSectionList[] = [
  {
    href: "/corrugated-boxes",
    label: "Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "Corrugated Rolls",
  },
  {
    href: "/corrugated-boxes",
    label: "Corrugated Sheets & Pads",
  },
  {
    href: "/corrugated-boxes",
    label: "3Ply Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "5Ply Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "7Ply Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "9Ply Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "Printed Corrugated Boxes",
  },
  {
    href: "/corrugated-boxes",
    label: "Customized Corrugated Boxes",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-slate-100 ">
      <div className="w-full flex flex-col gap-8 container items-center  lg:py-8 lg:px-12 border-b border-b-text-1 py-4 footerBg">
        <div className="flex flex-col gap-2 justify-center items-center">
          <StyledText className="text-lg md:text-3xl text-center">
            Simplify Packing, Amplify Success.
          </StyledText>
          <Button className="text-base md:text-lg font-bold">
            Lets Connect
          </Button>
        </div>
        <div className="py-4 flex w-full gap-6">
          <div className=" h-full flex flex-col lg:flex-row md:gap-4 gap-6">
            {/* # footer sections */}
            <div className="flex-[1] md:mr-10">
              {" "}
              <div className=" h-full flex flex-col justify-center items-center md:items-start md:justify-start gap-4">
                <div className="flex flex-row gap-4 ">
                  <img
                    src="/snLogowt.png"
                    alt="main logo"
                    className=" object-cover h-12"
                  />
                  <div className="flex flex-col list-none font-extrabold text-xs">
                    <p>SWAMI</p>
                    <p className="text-secondary-2">NARAYAN</p>
                    <p>INDUSTRIES</p>
                  </div>
                </div>
                <p className="text-text-2 text-center md:text-left text-xs md:text-sm font-semibold ">
                  {` We are a team of dedicated professionals in the
              corrugated box manufacturing and packing solutions industry. With
              a keen eye for detail and a commitment to delivering quality, we
              contribute to our company's mission of providing innovative
              packaging solutions that meet our clients' unique needs.`}
                </p>
              </div>
            </div>
            <div className="flex-[2] flex flex-col md:flex-row gap-6" >
              <div className="flex-1 lg:pl-8">
                <FooterSectionContainer
                  title="Resources"
                  sectionList={ResourcesData}
                />
              </div>
              <div className="flex-1">
                <FooterSectionContainer
                  title="Products"
                  sectionList={ProductListData}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <StyledText className="text-xl">Connect with us</StyledText>
              <div className="flex flex-col gap-6">
                <div className="md:flex grid grid-cols-2 md:flex-col gap-2 divide-x">
                  <ContactNumber telNumber="9764839434" />
                  <ContactNumber telNumber="8421117770" />
                  <address className="text-text font-extrabold text-base flex flex-row gap-2 ">
                    <a href="mailto:someone@example.com">
                      swaminarayanind@gmail.com
                    </a>
                  </address>
                </div>

                <ul className="flex flex-row gap-3 md:justify-start md:items-start w-full justify-center items-center">
                  <li>
                    <a>
                      <WhatsappIcon className="w-8 h-8 fill-text-2 " />
                    </a>
                  </li>
                  <li>
                    <a>
                      <InstagramIcon className="w-8 h-8 fill-text-2 " />
                    </a>
                  </li>
                  <li>
                    <a>
                      <TwitterIcon className="w-8 h-8 fill-text-2 " />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FacebookIcon className="w-8 h-8 fill-text-2 " />
                    </a>
                  </li>
                  <li>
                    <a>
                      <LinkedIcon className="w-8 h-8 fill-text-2 " />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  flex flex-col justify-center items-center text-white gap-2 py-4 text-sm bg-slate-900 ">
        <img
          src="/snLogowt.png"
          alt="main logo"
          className=" object-cover w-10 md:w-16"
        />
        <p className="text-xs md:text-base" >
          &copy; {new Date().getFullYear()}. Swaminarayan Industries. All Rights
          Reserved
        </p>
        <p className="text-[8px] md:text-xs" >
          Designed and Developed by 
          <a className="text-primary-2 ml-1 cursor-pointer" href="https://www.linkedin.com/in/vikas-harge/" target="_blank" >Vikas Harge</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
