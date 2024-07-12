const ConfirmationModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
          <div className="bg-white rounded-lg shadow-lg z-20 min-w-[450px] p-[40px] text-center">
            <h2 className=" text-[16px] font-medium font-inter text-black mt-10">
              POST PROPERTY ON DYLAN ESTATE?
              <span className="text-red-500"> *</span>
            </h2>

            <button
              className="bg-bgPrimary hover:bg-gray-700 text-white font-bold py-1 px-4 rounded-md mt-5 w-full text-[16px]"
              onClick={onClose}
            >
              Continue
            </button>
            <p className="text-bgPrimary text-[12px] font-light font-merriweatherSans mt-1 mb-10">
              By continuing you agree to our{" "}
              <span className=" font-normal">
                Terms and Conditions & Privacy Policy
              </span>
            </p>
          </div>

          <div
            className="fixed top-0 left-0 w-full h-full bg-slate-900 opacity-50 z-10"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
