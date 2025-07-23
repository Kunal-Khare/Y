
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

function CreatePost() {
  return (
    <div className="w-[100%]">
      {/* Tabs */}
      <div className="flex items-center gap-10 m-3">
        <div className="cursor-pointer">
          <h1 className="font-bold text-gray-600 text-lg">For you</h1>
        </div>
        <div className="cursor-pointer">
          <h1 className="font-bold text-gray-600 text-lg">Following</h1>
        </div>
      </div>
      {/* Avatar + Input */}
      <div className="flex items-start gap-4 m-3">
        <Avatar
          src="/src/assets/pfp.png"
          googleId="118096717852922241760"
          size="40"
          round={true}
        />
        <input type="text" />
      </div>
    </div>
  );
}

export default CreatePost;
