import React from "react";

const MePage: React.FC = () => {
    return (
        <div className="w-full h-full text-black pt-6 overflow-y-auto">
            <div className="grid grid-cols-[minmax(0,210px)_1fr] grid-rows-[10%_1fr] h-full">
                <div className="col-span-2 bg-amber-700 border-b-2 border-orange-900">
                    Title
                </div>
                <div className="bg-amber-700 h-full border-r-2 border-orange-900">
                    <div className="flex flex-col gap-15 pt-8">
                        <button className="bg-orange-400 min-w-4/5 mx-auto border-2 rounded-md border-orange-900 py-3 px-5 hover:bg-orange-500 cursor-pointer text-black font-bold">
                            Draw
                        </button>
                        <button className="bg-orange-400 min-w-4/5 mx-auto border-2 rounded-md border-orange-900 py-3 px-5 hover:bg-orange-500 cursor-pointer text-black font-bold">
                            Cook
                        </button>
                        <button className="bg-orange-400 min-w-4/5 mx-auto border-2 rounded-md border-orange-900 py-3 px-5 hover:bg-orange-500 cursor-pointer text-black font-bold">
                            Live
                        </button>
                    </div>
                </div>
                <div className="bg-orange-300 h-full">

                </div>
            </div>
        </div>
    )
}
export default MePage