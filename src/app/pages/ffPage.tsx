import React, { useState } from "react";
import Image from "next/image";
import Xiv312 from "./xivPages/xiv-3-12";
import Xiv412 from "./xivPages/xiv-4-12";

const FfPage: React.FC = () => {

    const [activeView, setActiveView] = useState<"home" | "312" | "412">("home");

    return (
        <div className="bg-neutral-900 w-full h-full flex items-end overflow-clip">
            <div className="bg-[#47332C] w-full h-7/8 mx-auto mb-5 flex justify-center">

                <div className="flex flex-col justify-evenly h-full pl-10">
                    <div className="bg-blue-400 w-40 h-25 rotate-20 cursor-pointer" onClick={() => setActiveView("312")}>
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                        <p className="text-center">03/12/2026</p>
                    </div>
                    <div className="bg-red-400 w-40 h-25 rotate-340 cursor-pointer" onClick={() => setActiveView("412")}>
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                        <p className="text-center">04/12/2026</p>
                    </div>
                    <div className="bg-yellow-400 w-40 h-25 rotate-8 cursor-pointer" onClick={() => setActiveView("home")}>
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                        <p className="text-center">Home</p>
                    </div>
                </div>

                <div className="bg-neutral-800 w-[60%] max-w-[520px] h-5/6 mt-19 mx-auto">
                    {activeView === "home" && <>
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-[95%] h-[95%] relative">
                                <Image src={"/j.png"} alt={""} fill
                                 />
                            </div>
                        </div>
                    </>}
                    {activeView === "312" && <Xiv312 />}
                    {activeView === "412" && <Xiv412 />}
                </div>
            </div>
        </div>
    )
}
export default FfPage;