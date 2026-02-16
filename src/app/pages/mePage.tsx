import React from "react";
import Image from "next/image";

const MePage: React.FC = () => {
    return (
        <div className="w-full h-full text-black pt-6 overflow-y-auto">
            <div className="grid grid-cols-[minmax(0,210px)_1fr] grid-rows-[15%_1fr] h-full">
                <div className="bg-[#ee8c6b] relative">
                    <Image
                        src={"/chicken.webp"}
                        fill
                        quality={10}
                        alt={""}
                    />
                </div>
                <div className="bg-[#ee8c6b]" />
                <div className="bg-[#714D41] h-full">
                    <div className="flex flex-col gap-15 pt-8">
                        <Image
                            className="mx-auto rounded-xl border-3 border-white"
                            src={"/mePage/draw/drawBut.png"}
                            width={170}
                            height={48}
                            quality={90}
                            alt={""}
                        />
                        <Image
                            className="mx-auto rounded-xl border-3 border-white"
                            src={"/mePage/Food/foodBut.png"}
                            width={170}
                            height={48}
                            quality={90}
                            alt={""}
                        />

                    </div>
                </div>
                <div className="bg-[#ffd6b8] h-full">

                </div>
            </div>
        </div>
    )
}
export default MePage