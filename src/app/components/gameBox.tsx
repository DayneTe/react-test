import React from "react";
import Image from "next/image";

interface boxProps {
    color: string
    icon: string
    system: string
    name: string
    openPage: () => void;
}

const GameBox: React.FC<boxProps> = ({ color, icon, system, name, openPage }) => {


    return (
        <div className={`@container flex flex-col w-[12%] h-[90%] bg-${color} cursor-pointer mx-1 rounded-sm min-w-15 border-2 border-gray-600 overflow-y-clip
         hover:mb-6 hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-200 ease-out`} onClick={openPage}>
            <div>
                <div className="bg-white rounded-t-sm border-b-2 border-black">
                    <Image
                        className="mx-auto pt-2 pb-1"
                        src={system}
                        width={20}
                        height={45}
                        quality={90}
                        alt={""}
                    />
                </div>
                <div className="relative w-14 h-14 mx-auto">
                    <Image
                        className="p-1"
                        src={icon}
                        fill
                        quality={90}
                        alt={""}
                    />
                </div>
            </div>
            <div className="flex items-center font-bold whitespace-pre-line w-full h-full pt-2" style={{ writingMode: 'vertical-rl' }}>{name}</div>
        </div>
    )
}

export default GameBox;