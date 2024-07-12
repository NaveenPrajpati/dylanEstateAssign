import { LuLanguages, LuUser2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-gray-200 py-2 px-6 flex justify-between items-end sticky top-0 z-20">
      <div className="">
        <img src="" alt="logo" />
        <p className=" text-[18px] font-bold text-[#B0854C]">Dylan Estate</p>
      </div>
      <div className="flex items-center gap-x-4 ">
        <p className=" text-[14px] font-bold">PROPERTIES</p>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "active underline" : ""} text-[14px] font-bold`
          }
        >
          MY DASHBOARD/ACTIVITY
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive, isPending }) =>
            `${isActive ? "active underline" : ""} text-[14px] font-bold`
          }
        >
          LIST YOUR PROPERTY
        </NavLink>
        <p className=" text-[14px] font-bold">CONATACT US</p>
        <p className=" text-[14px] font-bold">MORE</p>
        <p className=" text-[14px] font-bold">|</p>
        <LuLanguages />
        <LuUser2 className="text-[17px] font-bold" />
      </div>
    </div>
  );
}
