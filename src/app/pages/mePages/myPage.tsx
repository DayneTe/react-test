import Post from "@/app/components/post";
import React from "react";
import SanD from "./Posts/MePosts/SanD";

const MyPage: React.FC = () => {
  return (
    <div className="">
      <div className="w-full bg-[#c9a890] h-[5em]">
        <p className="text-5xl font-bold text-white text-center pt-3">Me</p>
      </div>

      <SanD />

      <Post title={"This is a Me Title"}>
        <div className="w-20 h-20 bg-blue-500 mx-auto"></div>
        <p>this is a description</p>
      </Post>


    </div>
  );
};

export default MyPage;
