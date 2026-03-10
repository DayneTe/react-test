"use client";
import { useState } from "react";
import DeskIcon from "./components/DeskIcon";
import PageWindow from "./components/pageWindow";
import Taskbar from "./components/taskbar";
import MePage from "./pages/mePage";
import ListPage from "./pages/listPage";
import FfPage from "./pages/ffPage";
import GamePage from "./pages/gamePage";

type WindowState = {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  z: number;
  icon: string;
};


export default function Home() {
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    mePage: {
      open: false, minimized: false, z: 1, icon: "/vercel.svg",
      maximized: false
    },
    TheList: {
      open: false, minimized: false, z: 1, icon: "/globe.svg",
      maximized: false
    },
    gameShelf: {
      open: false, minimized: false, z: 1, icon: "/start.webp",
      maximized: false
    },
    ffxiv: {
      open: false, minimized: false, z: 1, icon: "/window.svg",
      maximized: false
    },
  });

  const [zCounter, setZCounter] = useState(1);

  const focusWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        minimized: false,
        z: zCounter +1,
      },
    }));
    setZCounter((curr) => curr+1)
  };

  const closeWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id], open: false,
        minimized: false,
        maximized: false
      },
    }));
  };

  const minimizeWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: { ...w[id], minimized: true },
    }));
  };

  const toggleMaximize = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        maximized: !w[id].maximized,
        z: zCounter +1,
      },
    }));
    setZCounter((curr) => curr+1)
  };

  const toggleMinimize = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        minimized: !w[id].minimized,
        z: zCounter +1,
      },
    }));
    setZCounter((curr) => curr+1)
  };

  const openWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        open: true,
        minimized: false,
        z: zCounter +1,
      },
    }));
    setZCounter((curr) => curr+1)
  };

  return (
    <main>
      <div className="bg-[url('/wallpaper.webp')] bg-cover bg-no-repeat w-screen h-screen flex items-end">
        <PageWindow
          windowName="mePage"
          isOpen={windows.mePage.open}
          isMinimized={windows.mePage.minimized}
          isMaximized={windows.mePage.maximized}
          zCounter={windows.mePage.z}
          onClose={() => closeWindow("mePage")}
          onMinimize={() => minimizeWindow("mePage")}
          onFocus={() => focusWindow("mePage")}
          onMaximize={() => toggleMaximize("mePage")}
        >
          <MePage />
        </PageWindow>

        <PageWindow
          windowName="The List"
          isOpen={windows.TheList.open}
          isMinimized={windows.TheList.minimized}
          isMaximized={windows.TheList.maximized}
          zCounter={windows.TheList.z}
          onClose={() => closeWindow("TheList")}
          onMinimize={() => minimizeWindow("TheList")}
          onFocus={() => focusWindow("TheList")}
          onMaximize={() => toggleMaximize("TheList")}
        >
          <ListPage />
        </PageWindow>

        <PageWindow
          windowName="Game Shelf"
          isOpen={windows.gameShelf.open}
          isMinimized={windows.gameShelf.minimized}
          isMaximized={windows.gameShelf.maximized}
          zCounter={windows.gameShelf.z}
          onClose={() => closeWindow("gameShelf")}
          onMinimize={() => minimizeWindow("gameShelf")}
          onFocus={() => focusWindow("gameShelf")}
          onMaximize={() => toggleMaximize("gameShelf")}
        >
          <GamePage />
        </PageWindow>

        <PageWindow
          windowName="FFXIV"
          isOpen={windows.ffxiv.open}
          isMinimized={windows.ffxiv.minimized}
          isMaximized={windows.ffxiv.maximized}
          zCounter={windows.ffxiv.z}
          onClose={() => closeWindow("ffxiv")}
          onMinimize={() => minimizeWindow("ffxiv")}
          onFocus={() => focusWindow("ffxiv")}
          onMaximize={() => toggleMaximize("ffxiv")}
        >
          <FfPage />
        </PageWindow>

        <div className="grid grid-cols-1 gap-5 absolute self-start pt-4 pl-3">
          <DeskIcon
            name={"Its Me"}
            icon={"/vercel.svg"}
            onOpen={() => openWindow("mePage")}
          />

          <DeskIcon
            name={"The List"}
            icon={"/globe.svg"}
            onOpen={() => openWindow("TheList")}
          />

          <DeskIcon
            name={"Game Shelf"}
            icon={"/start.webp"}
            onOpen={() => openWindow("gameShelf")}
          />

          <DeskIcon
            name={"FFXIV"}
            icon={"/window.svg"}
            onOpen={() => openWindow("ffxiv")}
          />
        </div>

        <Taskbar windows={windows} onToggle={toggleMinimize} />
      </div>
    </main>
  );
}
