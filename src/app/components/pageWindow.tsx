import React, { useRef } from "react";

interface windowProps {
  windowName: string;
  isOpen: boolean;
  onClose: () => void;
  zCounter: (el: HTMLDivElement | null) => void;
}

const PageWindow: React.FC<windowProps> = ({
  windowName,
  isOpen,
  onClose,
  zCounter,
}) => {
  const currWindow = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const mouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !currWindow.current) return;

    const newX = e.clientX - startX.current;
    const newY = e.clientY - startY.current;

    startX.current = e.clientX;
    startY.current = e.clientY;

    let nextLeft = currWindow.current.offsetLeft + newX;
    let nextTop = currWindow.current.offsetTop + newY;

    const maxLeft = window.innerWidth - currWindow.current.offsetWidth;
    const maxTop = window.innerHeight - currWindow.current.offsetHeight;

    nextLeft = Math.max(0, Math.min(nextLeft, maxLeft));
    nextTop = Math.max(0, Math.min(nextTop, maxTop));

    currWindow.current.style.left = nextLeft + "px";
    currWindow.current.style.top = nextTop + "px";
  };

  const mouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  const mouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currWindow.current) return;

    zCounter(currWindow.current);
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={currWindow}
      onMouseDown={() => zCounter(currWindow.current)}
      className="w-120 h-100 bg-gray-100 absolute top-1/4 left-1/4 border-2 border-blue-600 rounded-t-lg"
    >
      <div
        onMouseDown={mouseDown}
        className="w-full h-7 bg-gradient-to-b from-blue-400 via-blue-600 via-20% to-blue-700 to-90% flex justify-between items-center select-none"
      >
        <span className="ml-2">{windowName}</span>

       <div className="flex gap-1">
          <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700">
            <span className="pb-4 pl-[5px]">_</span>
          </button>
  
          <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700">
            <span className="pb-2 pl-[3px]">□</span>
          </button>
  
          <button
            className="w-[22px] h-[22px] bg-gradient-to-br from-red-300 to-red-500 to-35% border border-white text-white text-3xl leading-none rounded-sm flex items-center cursor-pointer hover:from-red-600 hover:to-red-600"
            onClick={onClose}
          >
            <span className="pb-[6px]">×</span>
          </button>
       </div>
      </div>
    </div>
  );
};
export default PageWindow;
