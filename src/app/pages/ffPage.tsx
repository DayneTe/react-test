import React from "react";

const FfPage: React.FC = () => {
    return (
        <div className="bg-neutral-800 w-full h-full flex items-end">
            <div className="bg-[#47332C] w-[97%] h-7/8 mx-auto mb-1 flex justify-between">

                <div className="flex flex-col justify-evenly h-full pl-10">
                    <div className="bg-blue-400 w-40 h-25 rotate-20">
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                    </div>
                    <div className="bg-red-400 w-40 h-25 rotate-340">
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                    </div>
                    <div className="bg-yellow-400 w-40 h-25 rotate-8">
                        <div className="bg-neutral-800 rounded-4xl w-4 h-4 mx-auto mt-1" />
                    </div>
                </div>

                <div className="bg-neutral-800 w-[60%] max-w-[520px] h-4/5 mr-10 mt-19 content-center">
                    <div className="bg-white w-10 h-5 absolute rotate-45 z-1 opacity-50 bottom-25 translate-x-3" />
                    <div className="bg-white w-10 h-5 absolute rotate-45 z-1 opacity-50 right-18" />
                    <div className="mask-[url(/Untitled2.png)] mask-cover bg-[#e4c789] w-[95%] max-w-[475px] h-[95%] mx-auto">


                    </div>
                </div>
            </div>
        </div>
    )
}
export default FfPage;