import React from "react";
import CreatePost from "./CreatePost";
import Tweets from "./Tweets";

function Feed() {
  return (
    <div className="w-[50%] border border-gray-200">

      <div>
        <CreatePost />
        <Tweets />
      </div>
    </div>
  );
}

export default Feed;
