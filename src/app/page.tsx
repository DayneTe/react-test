"use client";
import { useState } from "react";
import DeskIcon from "./components/DeskIcon";
import PageWindow from "./components/pageWindow";
import Taskbar from "./components/taskbar";
import MePage from "./pages/mePage";
import ListPage from "./pages/listPage";

type WindowState = {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  z: number;
  icon: string;
};

export default function Home() {
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    concerto: {
      open: false, minimized: false, z: 1, icon: "/vercel.svg",
      maximized: false
    },
    TheList: {
      open: false, minimized: false, z: 1, icon: "/globe.svg",
      maximized: false
    },
  });

  const focusWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        minimized: false,
        z: Date.now(),
      },
    }));
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
        z: Date.now(),
      },
    }));
  };

  const toggleMinimize = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        minimized: !w[id].minimized,
        z: Date.now(),
      },
    }));
  };

  const openWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        open: true,
        minimized: false,
        z: Date.now(),
      },
    }));
  };

  return (
    <main>
      <div className="bg-[url('/wallpaper.webp')] bg-cover bg-no-repeat w-screen h-screen flex items-end">
        <PageWindow
          windowName="Concerto"
          isOpen={windows.concerto.open}
          isMinimized={windows.concerto.minimized}
          isMaximized={windows.concerto.maximized}
          zCounter={windows.concerto.z}
          onClose={() => closeWindow("concerto")}
          onMinimize={() => minimizeWindow("concerto")}
          onFocus={() => focusWindow("concerto")}
          onMaximize={() => toggleMaximize("concerto")}
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

        <div className="grid grid-cols-1 gap-5 absolute self-start pt-4 pl-3">
          <DeskIcon
            name={"concerto.exe"}
            icon={"/vercel.svg"}
            onOpen={() => openWindow("concerto")}
          />

          <DeskIcon
            name={"The List"}
            icon={"/globe.svg"}
            onOpen={() => openWindow("TheList")}
          />
        </div>

        <Taskbar windows={windows} onToggle={toggleMinimize} />
      </div>
    </main>
  );
}
