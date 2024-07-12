import React from "react";
import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa";

function FirstPage() {
  return (
    <div className=" bg-bgPrimary h-full">
      <div className="text-white ml-[50px] pt-10">
        <h1 className="text-[32px] font-normal">
          Sell or Rent your Property For Free
        </h1>
        <p className="text-[16px] font-light font-merriweatherSans mt-2">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your <br /> needs.
        </p>
      </div>

      <div className="flex justify-center text-white items-center gap-x-10 mt-10">
        <div>
          <p className="text-[20px] font-normal font-merriweatherSans">
            Upload your property in 4 simple <br /> steps
          </p>
          {Array.from({ length: 5 }).map((item, index) => (
            <div className="flex gap-x-2 mt-4 text-white">
              <div className="h-5 w-5 rounded-full bg-green-400 relative">
                <FaCheck className=" text-green-700 text-2xl  absolute bottom-[.8px] left-[1px]" />
              </div>
              <p className="text-[14px] font-merriweatherSans font-normal">
                sdf safsafsa fsavsa sa
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg w-[600px] text-black ">
          <div className=" bg-slate-100 py-2  rounded-t-lg ">
            <p className="ml-[50px] text-[20px] font-normal font-merriweatherSans">
              LETS GET YOU STARTED!
            </p>
          </div>

          <div className="w-[400px] ml-[50px] mt-10">
            <p className=" text-[18px] font-medium ">
              <span className=" text-red-500">*</span> I am:
            </p>
            <div className=" flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="same"
                  id="owner"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="owner"
                  className=" text-[16px] font-normal mx-2 font-inter text-black/85"
                >
                  Owner
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="same"
                  id="owner"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="owner"
                  className=" text-[16px] font-normal mx-2 font-inter text-black/85"
                >
                  Builder
                </label>
              </div>
            </div>
          </div>

          <div className=" w-[400px] ml-[50px] mt-10">
            <p>
              Your Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              className="border p-1 w-full border-black mt-1"
            />
          </div>

          <div className="flex justify-between items-center p-2 mt-5 rounded-b-lg bg-gray-100">
            <p className=" text-[12px] font-inter font-normal text-[#7A7A7A]">
              need help?{" "}
              <span className=" font-medium text-black">Call 99999999</span>
            </p>
            <button className="bg-gray-700 py-1 px-6 text-white rounded-md">
              <p className=" text-[10px]">NEXT</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
