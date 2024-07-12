import React from "react";

export default function FeaturesAmenities() {
  return (
    <div className="w-full h-[600px] overflow-y-scroll">
      <section className=" mt-5 w-4/5  mx-auto">
        <p className=" text-[18px] font-medium ">General Features</p>
        {/* non veg section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Non-Veg
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Allowed
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Not Allowed
              </label>
            </div>
            <div className="w-full"></div>
          </div>
        </div>

        {/* pets allowed section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Pets Allowed
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                No
              </label>
            </div>
            <div className="w-full"></div>
          </div>
        </div>

        {/* Electricity section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Electricity
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Rare/No Powercut
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Frequent Powercut
              </label>
            </div>
            <div className="w-full"></div>
          </div>
        </div>

        {/* water Supply section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Water Supply
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Municipal Corporation (BMC)
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Borewell
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Both
              </label>
            </div>
          </div>
        </div>

        <div className="border border-1 my-10"></div>

        {/* Furnishing section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Furnishing
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Fully Furnished
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Semi Furnished
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" name="same" id="owner" className="w-5 h-5" />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Unfurnished
              </label>
            </div>
          </div>
        </div>

        <div className="border border-1 my-10"></div>
        {/* Additional Features section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Additional Features
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Air Conditioning
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Ceiling Fans
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Refrigerator
              </label>
            </div>
          </div>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Washing machine
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Microwave
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                oven
              </label>
            </div>
          </div>
        </div>

        <div className="border border-1 my-10"></div>

        {/* Tites section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Tiles
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Normal White Tiles
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Marble
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Vitrified Tiles
              </label>
            </div>
          </div>
        </div>
        <div className="border border-1 my-10"></div>

        {/* Safety section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> Safety
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex items-center  w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                24/7 Security personnel (Gated Security)
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                Security Systems- CCTV
              </label>
            </div>
            <div className="flex items-center w-full"></div>
          </div>
        </div>
        <div className="border border-1 my-10"></div>

        {/* Society amenities section */}
        <div className=" mt-10">
          <p className=" text-[18px] font-medium ">
            <span className=" text-red-500">*</span> SOCIETY AMENITIES
          </p>
          <div className=" flex justify-between items-center mt-4">
            <div className="flex flex-col items-center  w-full">
              <label
                htmlFor="owner"
                className=" text-[16px] font-normal mx-2 font-inter text-black/85"
              >
                24/7 Security
              </label>
              <input
                type="radio"
                name="same"
                id="owner"
                className="w-5 h-5 appearance-none border border-black rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
