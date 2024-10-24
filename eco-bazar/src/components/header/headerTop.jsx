import { DropDown, MapIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-100 py-3">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <Image
            src={MapIcon}
            alt="map"
            className="w-[0.9375rem] h-[1.125rem]"
          />
          <span className="ml-2 text-tiny text-green-gray-600">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center pr-4">
            <div className="flex items-center mr-4">
              <span className="text-tiny text-gray-600 mr-2">Eng</span>
              <Image src={DropDown} alt="drop-down" />
            </div>
            <div className="flex items-center ">
              <span className="text-tiny text-gray-600 mr-2">Usd</span>
              <Image src={DropDown} alt="drop-down" />
            </div>
          </div>
          <div className="pl-4 border-l border-gray-100">
            <span className="text-tiny text-gray-600">Sign In</span>
            <span className="text-tiny text-gray-600 mx-2">/</span>
            <span className="text-tiny text-gray-600">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
