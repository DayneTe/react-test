import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface IconProps {
  name: string;
  icon: string;
  onOpen: () => void;
}

const Icon: React.FC<IconProps> = ({ name, icon, onOpen }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const iconRef = useRef<HTMLDivElement | null>(null);

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        setActive((prev) => !prev);
        break;
      case 2:
        onOpen();
        break;
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-22" ref={iconRef}>
      <button onClick={toggleActive} className="cursor-pointer">
        <div
          className={`w-22 pt-2 hover:bg-white/25 ${
            isActive ? "bg-white/25" : ""
          }`}
        >
          <Image
            className="pb-1 mx-auto"
            src={icon}
            width={48}
            height={48}
            alt={""}
          />
          <p className="pb-1 w-18 text-xs text-wrap mx-auto text-shadow-[0px_0px_3px_rgb(0_0_0)]">
            {name}
          </p>
        </div>
      </button>
    </div>
  );
};
export default Icon;
