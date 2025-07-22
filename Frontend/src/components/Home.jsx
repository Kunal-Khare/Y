import React from "react";
import Leftbar from "./Leftbar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";

function Home() {
  return (
    <div className="flex justify-between w-[80%] mx-auto " >
      <Leftbar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default Home;
