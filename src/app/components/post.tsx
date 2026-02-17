import React, { ReactNode } from "react";

interface postProps {
  title: string;
  children?: ReactNode;
}

const Post: React.FC<postProps> = ({ title, children }) => {
  return (
    <div>
      <div className="w-5/6 bg-[#d6a07a] mx-auto text-center my-5">
        <h1>{title}</h1>
       {children}
      </div>
    </div>
  );
};

export default Post;
