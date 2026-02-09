import React from "react";
import Image from "next/image";

interface listProps {
    listImg: string
    listName: string
    openPage: () => void;
}

const TheList: React.FC<listProps> = ({ listImg, listName, openPage }) => {
    return (
        <div className="w-[10em] h-[9.5em] flex flex-col pt-3 pb-1 mb-1 rounded-md hover:bg-neutral-400 cursor-pointer"
        onClick={openPage}>
                <div className="flex-1">
                    <Image
                        className="mx-auto"
                        src={listImg}
                        width={100}
                        height={100}
                        alt={""}
                    />
                </div>
            <h2 className="text-center font-bold">{listName}</h2>
        </div>
    )
}

export default TheList;