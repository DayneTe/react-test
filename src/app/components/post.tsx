import React, { ReactNode } from "react";

interface postProps {
  title: string;
  content?: ReactNode;
}

const Post: React.FC<postProps> = ({ title, content }) => {
  return (
    <div>
      <div className="w-5/6 bg-[#d6a07a] mx-auto text-center my-5">
        <h1>{title}</h1>
       {content}
      </div>
    </div>
  );
};

export default Post;
