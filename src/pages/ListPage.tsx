import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa";
import {
  availability,
  bhkType,
  propertyAge,
  tabMenu,
  tenantPreference,
} from "../utils/constants";
import PropertyDetails from "../components/PropertyDetails";
import LocationDetails from "../components/LocationDetails";
import FeaturesAmenities from "../components/FeaturesAmenities";
import PriceDetails from "../components/PriceDetails";
import PropertyImages from "../components/PropertyImages";
import { MyContext } from "../contexts/Context";

function ListPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { showModal, setShowModal } = useContext(MyContext);

  function buttonPress() {
    if (currentIndex == tabMenu.length - 1) {
      setShowModal((pre) => !pre);
    } else {
      setCurrentIndex((pre) =>
        currentIndex < tabMenu.length - 1 ? pre + 1 : pre
      );
    }
  }

  return (
    <div className=" h-full">
      <div className=" container rounded-lg border mx-auto mt-8">
        <div className=" h-20 flex justify-evenly">
          {tabMenu.map((item, index) => (
            <button
              key={index}
              className={` ${
                currentIndex == index
                  ? "text-bgPrimary bg-slate-200 border"
                  : "text-gray-500 bg-orange-50"
              } flex justify-center items-center p-2 w-full border-b-8 ${
                index < currentIndex ? "border-bgPrimary" : "border-gray-300"
              } `}
            >
              <p className=" font-normal text-[14px]">{item}</p>
            </button>
          ))}
        </div>

        {currentIndex == 0 && <PropertyDetails />}
        {currentIndex == 1 && <LocationDetails />}
        {currentIndex == 2 && <FeaturesAmenities />}
        {currentIndex == 3 && <PriceDetails />}
        {currentIndex == 4 && <PropertyImages />}
        <footer className="flex justify-between items-center py-4 px-20 mt-5 rounded-b-lg  bg-bgPrimary ">
          <p className=" text-[12px] font-inter font-normal text-white">
            need help? <span className=" font-medium ">Call 99999999</span>
          </p>
          <button
            onClick={buttonPress}
            className={`bg-gray-800  px-6 text-white rounded-md ${
              currentIndex == tabMenu.length - 1 ? "border border-white/70" : ""
            }`}
          >
            <p className=" text-[16px] font-bold font-merriweatherSans">
              {currentIndex == tabMenu.length - 1 ? "SAVE & POST" : "NEXT"}
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ListPage;
