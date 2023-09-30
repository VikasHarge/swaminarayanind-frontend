
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className=" w-full z-10 fixed top-0 right-0 left-0  py-4 bg-white shadow-md ">
      <div className="container flex justify-between items-center lg:px-12">
        <div className=" h-8 md:h-10 lg:h-12">
          <img src="/snLogoSmall.png" alt='main logo' className=" object-cover w-full h-full" />
        </div>
        <div>
          {/* <Button size="md" varient="primary" className="text-xs py-2 h-10" >
            Contact Us
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
