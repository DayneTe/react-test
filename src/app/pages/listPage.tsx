import React, { useState } from "react";
import TheList from "../components/theList";
import List2024 from "./theLists/list2024";
import List2025 from "./theLists/list2025";

const ListPage: React.FC = () => {

    const [activeView, setActiveView] = useState<"home" | "2025" | "2024">("home");

    return (
        <div className="w-full h-full overflow-y-auto bg-neutral-100 text-black pt-6">
            {activeView === "home" && (
                <>
                    <h1 className="text-center text-4xl font-bold pt-6 pb-10">The List</h1>
                    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] justify-items-center gap-9">
                        <TheList listImg={"/globe.svg"} listName={"The List 2025"} openPage={() => setActiveView("2025")} />
                        <TheList listImg={"/window.svg"} listName={"The List 2024"} openPage={() => setActiveView("2024")} />
                    </div>
                </>
            )}

            {activeView === "2025" && (
                <>
                    <List2025 onBack={() => setActiveView("home")} />
                </>
            )}

            {activeView === "2024" && (
                <>
                    <List2024 onBack={() => setActiveView("home")} />
                </>
            )}
        </div>
    )
}
export default ListPage