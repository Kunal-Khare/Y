import React from "react";
import Avatar from "react-avatar";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { LuSave } from "react-icons/lu";

function Tweets() {
  return (
    <div>
      <div>
        <div className="flex p-4">
          <Avatar
            src="/src/assets/pfp.png"
            googleId="118096717852922241760"
            size="40"
            round={true}
          />

          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1>kunal</h1>
              <p className="text-gray-500 text-sm ml-1">@kharesaab</p>
            </div>
            <div>
              <p>X/Twitter is so mid!</p>
            </div>

            <div className="flex justify-between my-3 ">
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <BiSolidCommentDetail size="19px" />
                </div>
                <span className="ml-1">0</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <IoIosHeart size="20px" />
                </div>
                <span className="ml-1">0</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <LuSave size="20px" />
                </div>
                <span className="ml-1">0</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
