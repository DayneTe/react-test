"use client";
import { useState } from "react";
import Clock from "./components/clock";
import Icon from "./components/icon";
import PageWindow from "./components/pageWindow";
let zIndexCount = 5;

export default function Home() {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  const [window2Open, setWindow2Open] = useState<boolean>(false);

  const bringToFront = (el: HTMLDivElement | null) => {
    if (!el) return;
    zIndexCount += 1;
    el.style.zIndex = zIndexCount.toString();
  };

  return (
    <main>
      <div className="bg-[url('/wallpaper.webp')] bg-cover bg-no-repeat w-screen h-screen flex items-end">
        <PageWindow
          isOpen={windowOpen}
          onClose={() => setWindowOpen(false)}
          zCounter={bringToFront}
        />
        <PageWindow
          isOpen={window2Open}
          onClose={() => setWindow2Open(false)}
          zCounter={bringToFront}
        />

        <div className="grid grid-cols-1 gap-5 absolute self-start pt-4 pl-3">
          <Icon
            name={"concerto.exe shortcut"}
            icon={"/vercel.svg"}
            onOpen={() => setWindowOpen(true)}
          />

          <Icon
            name={"coo.exe shortcut"}
            icon={"/globe.svg"}
            onOpen={() => setWindow2Open(true)}
          />
        </div>

        <div className="bg-gradient-to-b from-blue-500 via-blue-600 via-20% to-blue-500 to-95% w-screen h-10 flex justify-between border-t-1 border-sky-600">
          <div className="bg-gradient-to-b from-green-400 via-green-600 to-green-500 flex items-center h-full w-33 rounded-r-2xl shadow-md border-r-2 border-green-800 pl-2 gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[url('/start.webp')] bg-cover bg-center" />
            <p className="font-start  text-2xl text-shadow-[1px_1px_2px_rgb(0_0_0)]">
              start
            </p>
          </div>
          <div className="bg-gradient-to-b from-sky-300 via-sky-500 via-15% to-sky-400 to-85% h-full w-40 flex items-center border-l-2 border-sky-700 shadow-md px-2">
            <Clock />
          </div>
        </div>
      </div>
    </main>
  );
}
