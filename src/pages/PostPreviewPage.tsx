import { BiCctv } from "react-icons/bi";
import { CiCamera, CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { LuAreaChart, LuBath } from "react-icons/lu";
import { MdOutlineBed, MdOutlineFileUpload } from "react-icons/md";

export default function PostPreviewPage() {
  return (
    <div className="container mx-auto ">
      <div className="mt-10">
        <FaArrowLeft />
      </div>

      <div className="flex mt-5 gap-x-10 ">
        <div className="  flex-1 overflow-y-auto">
          <section className="">
            <h1 className="text-2xl font-bold">
              1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 (545
              Sq.ft.)
            </h1>
            <div className="flex justify-between items-baseline">
              <p className="text-gray-500 mb-4 flex items-center">
                <FaLocationDot /> Gokul village chs 2 Shanti Park, near st.
                Xaviours High school
              </p>
              <div className="flex gap-x-2">
                <div className=" rounded-full p-2 bg-white shadow-md">
                  <CiHeart />
                </div>
                <div className=" rounded-full p-2 bg-white shadow-md">
                  <MdOutlineFileUpload />
                </div>
              </div>
            </div>

            <div className="relative bg-[#C4C4C4] h-[380px] flex items-center justify-between ">
              <div className="bg-white p-2">
                <IoIosArrowBack />
              </div>
              <div className="flex flex-col items-center">
                <CiCamera className=" text-black text-xl" />
                <button className=" bg-bgPrimary text-white p-2 rounded-lg mt-2">
                  + Add Photos Now
                </button>
              </div>
              <div className="bg-white p-2">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="pl-4 text-gray-500 bg-gray-200 flex items-center justify-between">
              Property ID : 999999999
              <div className="bg-white px-4 flex gap-x-2 items-center">
                Reject this property <IoMdClose />
              </div>
            </div>
          </section>

          <section className=" p-10 mt-5  border-b-2">
            <div className=" flex justify-between items-end">
              <h2 className="text-[32px] font-normal font-merriweatherSans ">
                Property Overview
              </h2>
              <p className="text-[16px] font-medium font-inter text-gray-500">
                Society | Gokul Vilage
              </p>
            </div>
            <div className="">
              {Array.from({ length: 6 }).map((item, index) => (
                <div className="mt-8 grid grid-cols-3 gap-2 space-x-4">
                  <div className="flex gap-x-2  ">
                    <MdOutlineBed className="mt-1" />
                    <div className="">
                      <p className=" font-medium text-[16px] font-inter text-bgPrimary">
                        Two (2)
                      </p>
                      <p className="text-[14px] font-medium text-gray-500">
                        Bedrooms
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2  ">
                    <LuBath className="mt-1" />
                    <div className="">
                      <p className="font-medium text-[16px] font-inter text-bgPrimary">
                        One (1)
                      </p>
                      <p className="text-[14px] font-medium text-gray-500">
                        Bathrooms
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2  ">
                    <LuAreaChart className="mt-1" />
                    <div className="">
                      <p className="font-medium text-[16px] font-inter text-bgPrimary">
                        530
                      </p>
                      <p className="text-[14px] font-medium text-gray-500">
                        Bathrooms
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className=" p-10 mt-5  border-b-2">
            <div className=" flex justify-between items-end">
              <h2 className="text-[32px] font-normal font-merriweatherSans ">
                Amenities
              </h2>
            </div>
            <div className="">
              {Array.from({ length: 3 }).map((item, index) => (
                <div className="mt-8 grid grid-cols-4  ">
                  <div className="flex flex-col items-center gap-2">
                    <BiCctv className="text-xl" />
                    <p className="text-[14px]  font-medium text-gray-500 ">
                      CCTV Camera
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BiCctv className="text-xl" />
                    <p className="text-[14px] font-medium text-gray-500 ">
                      CCTV Camera
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BiCctv className="text-xl" />
                    <p className="text-[14px] font-medium text-gray-500 ">
                      CCTV Camera
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BiCctv className="text-xl" />
                    <p className="text-[14px] font-medium text-gray-500 ">
                      CCTV Camera
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className=" p-10 mt-5  border-b-2">
            <div className=" ">
              <h2 className="text-[32px] font-normal font-merriweatherSans ">
                Description
              </h2>

              <p className="text-[16px] font-inter font-normal mt-5">
                Spread over 510 sqft. this home is an ideal place to live in.
                Access to bus station & medical stores is very easy & convenient
                from this house.
              </p>
              <p className="text-[16px] font-inter font-normal mt-4">
                If you are a frequent traveller, then you'll be happy to note
                that train station is less than 10 minutes from this house. With
                PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can
                catch your favourite movies running & never worry about missing
                a show because of traffic.
              </p>
              <p className="text-[16px] font-inter font-normal mt-4">
                Never miss out on lifestyle as Rassaz Mall......
              </p>
              <p className="text-[16px] font-inter font-bold underline mt-3">
                Show more
              </p>
            </div>
          </section>
        </div>
        <div className="w-1/3   rounded-lg sticky top-20 h-screen">
          <div className=" bg-[#F6EFE6] flex justify-between border p-4">
            <div className="w-full text-center">
              <div className="text-xl font-bold">₹ 20,000 / Month</div>
              <div className="text-black">(Rent-Negotiable)</div>
            </div>
            <div className="w-full text-center">
              <div className="text-xl font-bold">₹ 20,000</div>
              <div className="text-gray-500">(Deposit)</div>
            </div>
          </div>
          <div className="p-4 border mt-4 bg-[#FDFAF7]">
            <h2 className="text-lg font-bold ">
              Send an Inquiry for this property?
            </h2>
            <form className="space-y-4 ">
              <div>
                <label className="block text-gray-700">
                  Contact Person: Melvin Lasrado
                </label>
                <div className="flex items-center mt-1 border  p-2 bg-white font-semibold">
                  <span className="mr-2">
                    <FaPhoneAlt />
                  </span>
                  <span>+91-9999999999</span>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="+91"
                  className="w-16 border p-2 rounded mr-2"
                  required
                />
                <input
                  type="text"
                  placeholder="999-999-9999"
                  className="flex-1 border p-2 rounded"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="I would like more information about Sector 5, shanti nagar, anubhav society"
                  className="w-full border p-4 rounded placeholder:font-inter placeholder:font-medium text-[14px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-bgPrimary font-bold text-[16px] text-white py-2 rounded font-merriweatherSans"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <p>Explore Neighborhood</p>
      </div>
    </div>
  );
}
