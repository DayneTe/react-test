import React from "react";
import GameBox from "../components/gameBox";

const GamePage: React.FC = () => {
    return (
        <div className="bg-[#2C4262] w-full h-full overflow-y-auto">
           
            <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-t-15 border-b-5 border-[#9c7567] mt-10 overflow-x-clip">
                <div className="h-full flex items-end">
                    <GameBox color={"amber-500"} icon={"/gamePage/ff7o.png"} name={"Final Fantasy VII"} system={"/gamePage/steam.png"} />
                    <GameBox color={"red-500"} icon={"/gamePage/ff7r.png"} name={"Final Fantasy VII Remake"} system={"/gamePage/steam.png"} />
                    <GameBox color={"[#2C4262]"} icon={"/gamePage/ff7r.png"} name={"Final Fantasy VII Rebirth"} system={"/gamePage/steam.png"} />
                </div>
            </div>
            <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                <div className="h-full flex items-end justify-center">
                    {/* <GameBox />
                    <GameBox /> */}
                </div>
            </div>
            <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                <div className="h-full flex items-end justify-end">
                    {/* <GameBox />
                    <GameBox />
                    <GameBox />
                    <GameBox /> */}
                </div>
            </div>
             <div className="bg-[#463028] w-4/5 h-[30%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                <div className="h-full flex items-end justify-end">
                </div>
            </div>
        </div>
    )
}
export default GamePage;