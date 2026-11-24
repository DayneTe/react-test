import React from "react";
import Perspective from "./Posts/ArtPosts/Perspective";

const DrawPage: React.FC = () => {
  return (
    <div className="h-full">
      <div className="w-full bg-[#c9a890] h-[5em]">
        <p className="text-5xl font-bold text-white text-center pt-3">Art</p>
      </div>

      <Perspective />

    </div>
  );
};

export default DrawPage;
