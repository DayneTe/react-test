import React from "react";
import Image from "next/image";

interface boxProps {
    color: string
    icon: string
    system: string
    name: string
}

const GameBox: React.FC<boxProps> = ({ color, icon, system, name }) => {
    return (
        <div className={`flex flex-col w-[12%] h-[90%] bg-${color} mx-1 rounded-sm min-w-15 border-2 border-gray-600 overflow-y-clip
         hover:-translate-y-5 hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-200 ease-out`}>
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
                <div>
                    <Image
                    className="mx-auto mt-2 mb-3"
                        src={icon}
                        width={80}
                        height={80}
                        quality={90}
                        alt={""}
                    />
                </div>
            </div>
            <div className="flex items-center text-center font-bold whitespace-pre-line w-full h-full justify-self-center" style={{ writingMode: 'vertical-rl'}}>{name}</div>
        </div>
    )
}

export default GameBox;