// old code ------
/*
import React from "react";
import Avatar from "react-avatar";

function CreatePost() {
  return (
    <div className="flex w-[100%]">
      <div className="m-3">
        <div className="flex items-center gap-50 ">
          <div className="cursor-pointer">
            <h1 className="font-bold text-gray-600 text-lg ">For you</h1>
          </div>
          <div className="cursor-pointer">
            <h1 className="font-bold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <Avatar
              src="/src/assets/pfp.png"
              googleId="118096717852922241760"
              size="40"
              round={true}
            />
          </div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

*/

import React from "react";
import Avatar from "react-avatar";
import { IoImage } from "react-icons/io5";

function CreatePost() {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 flex-1 text-center">
            <h1 className="font-semibold text-gray-600 text-lg px-4 py-3">
              For you
            </h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 flex-1 text-center">
            <h1 className="font-semibold text-gray-600 text-lg px-4 py-3">
              Following
            </h1>
          </div>
        </div>
      </div>
      {/* Avatar + Input */}
      <div className="flex items-start gap-4 m-4 py-4">
        <Avatar
          src="/src/assets/pfp.png"
          googleId="118096717852922241760"
          size="40"
          round={true}
        />
        <input
          className="w-full outline-none border-none text-lg py-1.5"
          type="text"
          placeholder="what's up!"
        />
      </div>
      <div className="flex items-center justify-between py-5 border-b border-gray-300">
        <div>
          <IoImage className="mx-3"/>
        </div>
        <button className="px-4 py-2 mx-3 border-none text-md text-white bg-gray-500 hover:bg-gray-400 hover:cursor-pointer rounded-2xl">
          Zeke
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
