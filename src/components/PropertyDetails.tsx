import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  availability,
  bhkType,
  propertyAge,
  propertyType,
  tenantPreference,
} from "../utils/constants";

export default function PropertyDetails() {
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);
  return (
    <section className="w-full h-[600px] overflow-y-scroll">
      <div className=" mt-5 w-4/5  mx-auto">
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> I am:
          </p>
          <div className=" flex justify-between items-center pr-10">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Rent
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Sale
              </label>
            </div>
            <div className="w-full"></div>
          </div>
        </div>

        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Property Type :
          </p>
          <div className=" flex justify-between items-center pr-10">
            {propertyType.map((item, index) => (
              <button
                key={index}
                onClick={() => setPropertyTypeOptions(item.options)}
                className="flex items-center w-full"
              >
                <input type="radio" name="sa" id="sa" className="w-5 h-5" />
                <label
                  htmlFor="sa"
                  className=" text-[16px] font-normal mx-4 font-inter text-black/85"
                >
                  {item.name}
                </label>
              </button>
            ))}
          </div>

          <div className=" flex items-center gap-x-5 mt-4">
            {propertyTypeOptions?.map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-4 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className=" my-10 gap-x-10 flex justify-between">
          <div className=" w-full">
            <p className=" text-[16px] font-medium ">
              Built up Area <span className=" text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Sq. Ft."
              className=" border border-black w-full p-1 placeholder:text-end"
            />
          </div>
          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              Carpet Area <span className=" text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Sq. Ft."
              className=" border border-black w-full p-1 placeholder:text-end"
            />
          </div>
        </div>
        <div className=" my-10 gap-x-10 flex justify-between">
          <div className="w-full flex gap-x-5">
            <div className=" w-full">
              <p className=" text-[16px] font-medium ">
                Property on Floor <span className=" text-red-500">*</span>
              </p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Sq. Ft."
                className=" border border-black w-full p-1 placeholder:text-end"
              />
            </div>
            <div className=" w-full">
              <p className=" text-[16px] font-medium ">
                Total Floors <span className=" text-red-500">*</span>
              </p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Sq. Ft."
                className=" border border-black w-full p-1 placeholder:text-end"
              />
            </div>
          </div>

          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              Property Facing <span className=" text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Sq. Ft."
              className=" border border-black w-full p-1 placeholder:text-end"
            />
          </div>
        </div>

        <div className="w-full">
          <p className=" text-[16px] font-medium ">
            Property Age <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {propertyAge.map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-4 rounded-full"
              >
                {item} Year
              </button>
            ))}
          </div>
        </div>
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            BHK Type <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {bhkType.map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-4 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Bathrooms/ Toilets <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {Array.from({ length: 6 }).map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-6 rounded-full"
              >
                {index + 1}
                {index == 5 ? "+" : ""}
              </button>
            ))}
          </div>
        </div>
        {/* Balcony option */}
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Balcony <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {Array.from({ length: 5 }).map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-6 rounded-full"
              >
                {index}
                {index == 4 ? "+" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Tenant Preference option */}
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Tenant Preference <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {tenantPreference.map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-4 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Availability options */}
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Availability <span className=" text-red-500">*</span>
          </p>
          <div className=" flex items-center gap-x-5 mt-2">
            {availability.map((item, index) => (
              <button
                key={index}
                className=" border border-black py-1 px-4 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Property Description section */}
        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Property Description <span className=" text-red-500">*</span>
          </p>
          <textarea
            placeholder="Add a description for your property to attract the best tenant"
            name=""
            id=""
            cols="130"
            rows="4"
            className="border p-2"
          />
        </div>
      </div>
    </section>
  );
}
