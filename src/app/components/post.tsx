import React, { ReactNode } from "react";

interface postProps {
  title: string;
  children?: ReactNode;
}

const Post: React.FC<postProps> = ({ title, children }) => {
  return (
    <div className="w-5/6 bg-[#ffb179] mx-auto my-5">
      <h1 className="text-4xl text-center mb-10 pt-5 font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default Post;
