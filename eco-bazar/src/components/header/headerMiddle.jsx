import { BagIcon, HeartIcon, SearchIcon } from "@/assets/icons";
import { Logo } from "@/assets/images";
import Image from "next/image";
import React from "react";

const HeaderMiddle = () => {
  return (
    <div className="container mx-auto flex items-center justify-between my-6">
      <Image src={Logo} alt="logo" />

      <div className="flex">
        <div className="flex items-center border border-gray-100 rounded-l-md py-3 px-4 border-r-0 w-[25rem]">
          <Image src={SearchIcon} alt="heart" />
          <input placeholder="Search" type="text" className="ml-2 outline-none border-none"/>
        </div>
        <button className="bg-primary text-sm text-white px-6 py-[0.875rem] rounded-r-md">Search</button>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <div className="pr-4 border-r border-gray-200">
            <Image src={HeartIcon} alt="heart" />
          </div>
          <div className="pl-4">
            <Image src={BagIcon} alt="bag" />
          </div>
        </div>

        <div className="ml-3">
          <div className="text-[0.6875rem] text-green-gray-700">
            Shopping Cart
          </div>
          <div className="mt-2 text-[0.875rem] text-green-gray-900">$57.00</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
