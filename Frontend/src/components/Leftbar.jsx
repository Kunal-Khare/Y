import React from "react";
import { TiHome } from "react-icons/ti";
import { SiZincsearch } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

function Leftbar() {
  return (
    <div className="flex w-[20%]">
      <div>
        <div>
          <img width={70} src="src/assets/logo__z_.png" alt="" />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <TiHome size="24px" />{" "}
            </div>

            <span>Home</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <SiZincsearch size="22px" />{" "}
            </div>

            <span>Explore</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <MdNotificationsActive size="24px" />{" "}
            </div>

            <span>Notification</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <FaUser size="22px" />{" "}
            </div>

            <span>Profile</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <PiBookmarkSimpleFill size="24px" />{" "}
            </div>

            <span>Bookmark</span>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-md">
            <div>
              <IoLogOut size="24px" />{" "}
            </div>

            <span>Logout</span>
          </div>
        </div>
        <button className="px-4 py-2 border-none text-md bg-gray-400 hover:bg-gray-300 hover:cursor-pointer w-full rounded-2xl">
          Zeke
        </button>
      </div>
    </div>
  );
}

export default Leftbar;
