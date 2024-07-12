import React, { useContext, useState } from "react";
import { CiCamera } from "react-icons/ci";
import ConfirmationModal from "./Modals/ConfirmationModal";
import { MyContext } from "../contexts/Context";
import { useNavigate } from "react-router-dom";

export default function PropertyImages() {
  const [selectedOption, setSelectedOption] = useState("");
  const { showModal, setShowModal } = useContext(MyContext);

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    navigate("/confirmation", { replace: true });
  };

  return (
    <div className="w-full h-[600px] overflow-y-scroll">
      <section className=" mt-5 w-4/5  mx-auto">
        <p className="text-[18px] font-normal font-inter  text-black/85">
          Add Photos / videos to attract more tenants!{" "}
        </p>

        <div className="mt-10">
          <p className="text-[16px] font-medium font-inter  text-black/85">
            Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
            balcony, location map, neighborhood, etc
          </p>
          <div className="border mt-2 w-full h-[500px] relative flex justify-center items-center">
            <div className="flex flex-col items-center">
              <CiCamera className=" text-black text-xl" />
              <button className=" bg-bgPrimary text-white p-2 rounded-lg mt-2">
                + Add Photos Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <ConfirmationModal show={showModal} onClose={toggleModal}>
        <h2 className="text-lg font-medium text-gray-900">Modal Title</h2>
        <p className="mt-2 text-sm text-gray-500">
          Your modal content goes here.
        </p>
      </ConfirmationModal>
    </div>
  );
}
