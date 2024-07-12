import React, { useState } from "react";

export default function PriceDetails() {
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
              Rent <span className=" text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="₹"
              className=" border border-black w-full p-1 mt-1"
            />
          </div>
          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              Security <span className=" text-red-500">*</span>
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="₹"
              className=" border border-black w-full p-1 mt-1"
            />
          </div>
        </div>
        <div className=" my-10 gap-x-10 flex justify-between">
          <div className=" w-full">
            <p className=" text-[16px] font-medium ">
              Maintenance <span className=" text-red-500">*</span>
            </p>

            <div>
              <select
                className=" border border-black w-full p-1  mt-1"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Maintenance</option>
                <option value="chocolate">Include in Rent</option>
                <option value="strawberry">Extra Maintainance</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <p className=" text-[16px] font-medium ">
              Maintenance <span className=" text-red-500">*</span>
            </p>

            <div className="flex items-center gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Maintenance"
                className=" border border-black w-full p-1 mt-1"
              />
              <select
                className=" border border-black w-full p-1  mt-1"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Monthly</option>
                <option value="chocolate">Chocolate</option>
                <option value="strawberry">Strawberry</option>
                <option value="vanilla">Vanilla</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <p className=" text-[16px] font-medium ">
            Additional Pricing details to convey to agent?{" "}
            <span className=" text-red-500"></span>
          </p>
          <textarea
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
            name=""
            id=""
            cols={130}
            rows={4}
            className="border p-2 w-full"
          />
        </div>
      </section>
    </div>
  );
}
