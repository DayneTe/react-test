import Post from "@/app/components/post";
import React from "react";

const FoodPage: React.FC = ()  => {
    return (
       <div className="">
      <div className="w-full bg-[#c9a890] h-[5em]">
        <p className="text-5xl font-bold text-white text-center pt-3">Food</p>
      </div>
      <Post title={"This is a Title"}>
        <div className="w-20 h-20 bg-red-500 mx-auto"></div>
        <p>this is a food description</p>
      </Post>
    </div>
    )
}

export default FoodPage;