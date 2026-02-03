import React from "react";
import TheList from "../components/theList";

const ListPage: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-auto bg-neutral-100 text-black pt-6">
            <h1 className="text-center text-4xl font-bold pt-6 pb-10">The List</h1>
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] justify-items-center gap-9">
                <TheList listImg={"/globe.svg"} listName={"The List 2026"} />
                <TheList listImg={"/globe.svg"} listName={"The List 2025"} />
                <TheList listImg={"/vercel.svg"} listName={"The List 2025"} />
                <TheList listImg={"/window.svg"} listName={"The List 2025"} />
            </div>
        </div>
    )
}
export default ListPage