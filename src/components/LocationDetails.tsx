import React, { useState } from "react";

export default function LocationDetails() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-full h-[600px] overflow-y-scroll">
      <section className=" mt-5 w-4/5  mx-auto">
        <div className=" my-10 gap-x-10 flex justify-between">
          <div className=" w-full">
            <p className=" text-[16px] font-medium ">
              Building/ Society Name <span className=" text-red-500">*</span>
            </p>
            <select
              className=" border border-black w-full p-1  mt-1"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Enter Apartment Name</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
            </select>
          </div>
          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              Locality / Area <span className=" text-red-500">*</span>
            </p>

            <select
              className=" border border-black w-full p-1  mt-1"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Eg : sheetal nagar</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
            </select>
          </div>
        </div>
        <div className=" my-10 gap-x-10 flex justify-between">
          <div className=" w-full">
            <p className=" text-[16px] font-medium ">
              Landmark / Street Name <span className=" text-red-500">*</span>
            </p>
            <select
              className=" border border-black w-full p-1  mt-1"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Prominent Landmark</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
            </select>
          </div>
          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              City <span className=" text-red-500">*</span>
            </p>

            <select
              className=" border border-black w-full p-1  mt-1"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Mumbai, Maharashtra</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="vanilla">Vanilla</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}
