"use client";
import React from "react";
import TaskButton from "../assets/taskButton";
import Clock from "./clock";

type WindowState = {
    open: boolean;
    minimized: boolean;
    z: number;
    icon: string;
};

interface TaskbarProps {
    windows: Record<string, WindowState>;
    onToggle: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, onToggle }) => {
    const sortedWindows = Object.entries(windows)

    return (
        <div className="bg-gradient-to-b from-blue-500 via-blue-600 via-20% to-blue-500 to-95% w-screen h-10 flex border-t-1 border-sky-600">
            <div className="bg-gradient-to-b from-green-400 via-green-600 to-green-500 flex items-center h-full w-33 rounded-r-2xl shadow-md border-r-2 border-green-800 pl-2 gap-2 cursor-pointer hover:from-green-500 hover:via-green-700 hover:to-green-600">
                <div className="w-8 h-8 bg-[url('/start.webp')] bg-cover bg-center" />
                <p className="font-start  text-2xl text-shadow-[1px_1px_2px_rgb(0_0_0)]">
                    start
                </p>
            </div>
            <div className="flex gap-1 ml-2 mt-auto">
                {sortedWindows
                    .filter(([, win]) => win.open)
                    .map(([id, win]) => (
                        <button
                            key={id}
                            onClick={() => onToggle(id)}
                            className={`
            ${!win.open || win.minimized ? "bg-sky-300" : "bg-sky-500"}
            hover:bg-sky-500 pt-[3px] ml-1 px-1.5 cursor-pointer rounded-sm
          `}
                        >
                            <TaskButton iconImg={win.icon} />
                        </button>
                    ))}

            </div>
            <div className="bg-gradient-to-b from-sky-300 via-sky-500 via-15% to-sky-400 to-85% h-full w-40 flex items-center border-l-2 border-sky-700 shadow-md px-2 ml-auto">
                <Clock />
            </div>
        </div>
    )
}

export default Taskbar