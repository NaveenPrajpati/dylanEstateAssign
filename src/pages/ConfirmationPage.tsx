import React from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen bg-white p-[70px] font-inter text-black/85">
      <p className="text-[24px] font-inter font-normal">
        Thank you for listing your property with us,
      </p>
      <p className="text-[18px] font-inter font-normal mt-5">
        Your listing will be reviewed and will go live within 24 hours.
      </p>
      <p className="text-[18px] font-inter font-normal mt-5">
        We will now manage your listing and get in touch with you after finding
        the best suitable tenant as per your preference.
      </p>
      <p className="text-[16px]  font-normal mt-10 font-jacques">
        -Dylan Estates
      </p>

      <div className="flex gap-x-8 mt-20">
        <button className=" bg-bgPrimary py-2 px-4 rounded-md text-white text-[16px] font-inter">
          Edit Property Listing
        </button>
        <button
          onClick={() => navigate("/previewPage", { replace: true })}
          className=" bg-bgPrimary py-2 px-4 rounded-md text-white text-[16px] font-inter"
        >
          Preview Property Listing
        </button>
      </div>
    </div>
  );
}
