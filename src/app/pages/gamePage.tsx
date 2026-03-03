import React, { useState } from "react";
import GameBox from "../components/gameBox";
import Ff7 from "./GreviewPages/ff7";
import Ff7R2 from "./GreviewPages/ff7R2";
import Ff7R1 from "./GreviewPages/ff7R1";

export const VIEWS = {
    HOME: "Home",
    FF7: "FF7",
    FF7R1: "FF7R1",
    FF7R2: "FF7R2",
} as const;

type View = typeof VIEWS[keyof typeof VIEWS];

const GamePage: React.FC = () => {
    const [activeView, setActiveView] = useState<View>(VIEWS.HOME);
    return (

        <div className="bg-[#2C4262] w-full h-full overflow-y-auto">
            {activeView === VIEWS.HOME && (
                <>
                    <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-t-15 border-b-5 border-[#9c7567] mt-10 overflow-x-clip">
                        <div className="h-full flex items-end">
                            <GameBox color={"amber-500"} icon={"/gamePage/ff7's/ff7o.png"} name={"Final Fantasy VII"} system={"/gamePage/steam.png"} openPage={() => setActiveView(VIEWS.FF7)} />
                            <GameBox color={"red-500"} icon={"/gamePage/ff7's/ff7r.png"} name={"Final Fantasy VII\nRemake"} system={"/gamePage/steam.png"} openPage={() => setActiveView(VIEWS.FF7R1)} />
                            <GameBox color={"[#2C4262]"} icon={"/gamePage/ff7's/ff7r.png"} name={"Final Fantasy VII\nRebirth"} system={"/gamePage/steam.png"} openPage={() => setActiveView(VIEWS.FF7R2)} />
                        </div>
                    </div>

                    <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                        <div className="h-full flex items-end justify-center">
                            {/* <GameBox /> */}
                        </div>
                    </div>

                    <div className="bg-[#463028] w-4/5 h-[40%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                        <div className="h-full flex items-end justify-end">
                            {/* <GameBox /> */}
                        </div>
                    </div>

                    <div className="bg-[#463028] w-4/5 h-[30%] mx-auto max-w-[880px] border-x-18 border-y-7 border-[#9c7567]">
                        <div className="h-full flex items-end justify-end">
                        </div>
                    </div>
                </>
            )}
            <>
                {activeView === "FF7" && <Ff7 onBack={() => setActiveView(VIEWS.HOME)} />}
                {activeView === "FF7R1" && <Ff7R1 onBack={() => setActiveView(VIEWS.HOME)} />}
                {activeView === "FF7R2" && <Ff7R2 onBack={() => setActiveView(VIEWS.HOME)} />}
            </>
        </div>
    )
}
export default GamePage;