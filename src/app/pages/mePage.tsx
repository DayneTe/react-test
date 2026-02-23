import React, { useState } from "react";
import Image from "next/image";
import DrawPage from "./mePages/artPage";
import FoodPage from "./mePages/foodPage";
import MyPage from "./mePages/myPage";

const MePage: React.FC = () => {

    const [activeView, setActiveView] = useState<"Me" | "Draw" | "Food">("Me");

    return (
        <div className="w-full h-full text-black pt-6 overflow-y-auto">
            <div className="grid grid-cols-[minmax(0,210px)_1fr] grid-rows-[15%_1fr] h-full">
                <div className="bg-[#ee8c6b] relative">
                    <Image
                        src={"/chicken.webp"}
                        fill
                        quality={10}
                        alt={""}
                        unoptimized
                    />
                </div>
                <div className="bg-[#ee8c6b]">
                    <div className="w-2/3 h-3/4 relative mx-auto mt-4">
                        <Image className="rounded-2xl"
                            src={"/mePage/my/Illustration.png"}
                            fill
                            alt={""}
                            onClick={() => setActiveView("Me")}
                        />
                    </div>
                </div>
                <div className="bg-[#815e53] h-full">
                    <div className="flex flex-col gap-15 pt-8">
                        <Image
                            className="mx-auto rounded-xl border-3 border-white cursor-pointer"
                            src={"/mePage/my/meBut.png"}
                            width={170}
                            height={48}
                            quality={90}
                            alt={""}
                            onClick={() => setActiveView("Me")}
                        />
                        <Image
                            className="mx-auto rounded-xl border-3 border-white cursor-pointer"
                            src={"/mePage/draw/drawBut.png"}
                            width={170}
                            height={48}
                            quality={90}
                            alt={""}
                            onClick={() => setActiveView("Draw")}
                        />
                        <Image
                            className="mx-auto rounded-xl border-3 border-white cursor-pointer"
                            src={"/mePage/Food/foodBut.png"}
                            width={170}
                            height={48}
                            quality={90}
                            alt={""}
                            onClick={() => setActiveView("Food")}
                        />

                    </div>
                </div>
                <div className="bg-[#ffd6b8] h-full">
                    {activeView === "Me" && (
                        <>
                            <MyPage />
                        </>
                    )}

                    {activeView === "Draw" && (
                        <>
                            <DrawPage />
                        </>
                    )}

                    {activeView === "Food" && (
                        <>
                            <FoodPage />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default MePage