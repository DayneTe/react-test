import React, { ReactNode, useEffect, useRef, useState } from "react";

interface windowProps {
  windowName: string;
  isOpen: boolean;
  onClose: () => void;
  isMinimized: boolean;
  onMinimize: () => void;
  isMaximized: boolean;
  onMaximize: () => void;
  zCounter: number;
  onFocus: () => void;
  children?: ReactNode;
}

const PageWindow: React.FC<windowProps> = ({
  windowName,
  isOpen,
  onClose,
  isMinimized,
  onMinimize,
  isMaximized,
  onMaximize,
  zCounter,
  onFocus,
  children,
}) => {
  const currWindow = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);


  const startWidth = useRef(0);
  const startHeight = useRef(0);
  type ResizeDir =
    | "left"
    | "right"
    | "bottom"
    | "top"
    | "se"
    | "sw"
    | "ne"
    | "nw";

  const resizeDir = useRef<ResizeDir | null>(null);

  const startLeft = useRef(0);
  const startTop = useRef(0);

  const [size, setSize] = useState({ w: 480, h: 320 })
  const [pos, setPos] = useState({ x: 80, y: 80 })

  useEffect(() => {
    if (isMaximized && currWindow.current) {
      currWindow.current.style.top = "0px"
      currWindow.current.style.left = "0px"
    }
  }, [isMaximized])

  const resizeMove = (e: MouseEvent) => {
    if (!resizeDir.current || !currWindow.current) return;

    let dx = e.clientX - startX.current;
    let dy = e.clientY - startY.current;

    let width = startWidth.current;
    let height = startHeight.current;
    let left = startLeft.current;
    let top = startTop.current;

    const minW = 300;
    const minH = 200;

    if (
      resizeDir.current === "left" ||
      resizeDir.current === "sw" ||
      resizeDir.current === "nw"
    ) {
      const maxDx = startWidth.current - minW;
      dx = Math.min(dx, maxDx);
    }

    if (
      resizeDir.current === "top" ||
      resizeDir.current === "ne" ||
      resizeDir.current === "nw"
    ) {
      const maxDy = startHeight.current - minH;
      dy = Math.min(dy, maxDy);
    }

    switch (resizeDir.current) {
      case "left":
        width = startWidth.current - dx;
        left = startLeft.current + dx;
        break;

      case "right":
        width = startWidth.current + dx;
        break;

      case "bottom":
        height = startHeight.current + dy;
        break;

      case "top":
        height = startHeight.current - dy;
        top = startTop.current + dy;
        break;

      case "se":
        width = startWidth.current + dx;
        height = startHeight.current + dy;
        break;

      case "sw":
        width = startWidth.current - dx;
        height = startHeight.current + dy;
        left = startLeft.current + dx;
        break;

      case "ne":
        width = startWidth.current + dx;
        height = startHeight.current - dy;
        top = startTop.current + dy;
        break;

      case "nw":
        width = startWidth.current - dx;
        height = startHeight.current - dy;
        left = startLeft.current + dx;
        top = startTop.current + dy;
        break;
    }

    setSize({ w: width, h: height })
    setPos({ x: left, y: top })
  };

  const resizeUp = () => {
    resizeDir.current = null;
    document.removeEventListener("mousemove", resizeMove);
    document.removeEventListener("mouseup", resizeUp);
  };

  const resizeDown = (
    e: React.MouseEvent,
    dir: "left" | "right" | "top" | "bottom" | "se" | "sw" | "ne" | "nw",
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currWindow.current) return;
    if (isMinimized || isMaximized) return;

    resizeDir.current = dir;

    startX.current = e.clientX;
    startY.current = e.clientY;

    startWidth.current = currWindow.current.offsetWidth;
    startHeight.current = currWindow.current.offsetHeight;
    startLeft.current = currWindow.current.offsetLeft;
    startTop.current = currWindow.current.offsetTop;

    document.addEventListener("mousemove", resizeMove);
    document.addEventListener("mouseup", resizeUp);
  };

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

    setPos({ x: nextLeft, y: nextTop })
  };

  const mouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  const mouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!currWindow.current) return;
    if (isMinimized) return;
    if (isMaximized) return;

    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };


  if (!isOpen || isMinimized) return null;

  return (
    <div
      ref={currWindow}
      onMouseDown={onFocus}
      style={{
        zIndex: zCounter,
        width: isMaximized ? "100vw" : size.w,
        height: isMaximized ? "calc(100vh - 40px)" : size.h,
        left: isMaximized ? 0 : pos.x,
        top: isMaximized ? 0 : pos.y,
      }}
      className="absolute border-2 border-blue-600 bg-gray-100 rounded-t-lg"
    >

      {/* Left */}
      <div
        onMouseDown={(e) => resizeDown(e, "left")}
        className="absolute left-0 top-0 w-1 h-full cursor-ew-resize"
      />

      {/* Right */}
      <div
        onMouseDown={(e) => resizeDown(e, "right")}
        className="absolute right-0 top-0 w-1 h-full cursor-ew-resize"
      />

      {/* Top */}
      <div
        onMouseDown={(e) => resizeDown(e, "top")}
        className="absolute top-0 left-0 h-1 w-full cursor-ns-resize z-20"
      />

      {/* Bottom */}
      <div
        onMouseDown={(e) => resizeDown(e, "bottom")}
        className="absolute bottom-0 left-0 h-1 w-full cursor-ns-resize"
      />

      <div
        onMouseDown={(e) => resizeDown(e, "se")}
        className="absolute bottom-0 right-0 w-[10px] h-[10px] cursor-se-resize z-30"
      />

      {/* Bottom-left */}
      <div
        onMouseDown={(e) => resizeDown(e, "sw")}
        className="absolute bottom-0 left-0 w-[10px] h-[10px] cursor-sw-resize z-30"
      />

      {/* Top-right */}
      <div
        onMouseDown={(e) => resizeDown(e, "ne")}
        className="absolute top-0 right-0 w-[10px] h-[10px] cursor-ne-resize z-30"
      />

      {/* Top-left */}
      <div
        onMouseDown={(e) => resizeDown(e, "nw")}
        className="absolute top-0 left-0 w-[10px] h-[10px] cursor-nw-resize z-30"
      />

      <div
        onMouseDown={mouseDown}
        className="w-full h-7 bg-gradient-to-b from-blue-400 via-blue-600 via-20% to-blue-700 to-90% flex justify-between items-center select-none absolute"
      >
        <span className="ml-2">{windowName}</span>

        <div className="flex gap-1">
          <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700"
            onClick={onMinimize}>
            <span className="pb-4 pl-[5px]">_</span>
          </button>

          <button className="w-[22px] h-[22px] bg-gradient-to-br from-blue-300 to-blue-600 to-35% border border-white text-white text-2xl leading-none font-bold rounded-sm flex items-center hover:from-blue-700 hover:to-blue-700"
            onClick={onMaximize}>
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
      {children}
    </div>
  );
};
export default PageWindow;
