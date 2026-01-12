import React, {  } from "react";

interface windowProps {
  isOpen: boolean;
  onClose: () => void;
}

const PageWindow: React.FC<windowProps> = ({ isOpen, onClose }) => {
 

  if (!isOpen) return null;

  return (
    <div className="w-120 h-100 bg-gray-100 absolute top-1/4 left-1/4 border-2 border-blue-600 rounded-t-lg">
      <div className="w-full h-7 bg-gradient-to-b from-blue-400 via-blue-600 via-20% to-blue-700 to-90% flex justify-end items-center gap-1">
        <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700">
          <p className="pb-4 pl-1">_</p>
        </button>

        <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700">
          <p className="pb-2 pl-1">□</p>
        </button>

        <button
          className="w-[22px] h-[22px] bg-gradient-to-br from-red-300 to-red-500 to-35% border border-white text-white text-3xl leading-none rounded-sm flex items-center cursor-pointer hover:from-red-600 hover:to-red-600"
          onClick={onClose}
        >
          <p className="pb-1">×</p>
        </button>
      </div>
    </div>
  );
};
export default PageWindow;
