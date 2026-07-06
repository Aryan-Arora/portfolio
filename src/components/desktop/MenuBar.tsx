"use client";

import { useEffect, useState } from "react";
import { Wifi, Search, BatteryMedium } from "lucide-react";
import { useDesktop } from "./DesktopContext";

export function MenuBar() {
  const { activeApp } = useDesktop();
  const [now, setNow] = useState<{ date: string; time: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setNow({
        date: d.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        time: d.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      });
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-8 items-center justify-between bg-black/40 px-4 text-[13px] text-white/90 backdrop-blur-xl">
      <div className="flex items-center gap-4 font-medium">
        <span className="text-base leading-none"></span>
        <span className="font-semibold">{activeApp}</span>
        <span className="hidden text-white/60 sm:inline">File</span>
        <span className="hidden text-white/60 sm:inline">Edit</span>
        <span className="hidden text-white/60 sm:inline">View</span>
        <span className="hidden text-white/60 sm:inline">Window</span>
        <span className="hidden text-white/60 sm:inline">Help</span>
      </div>
      <div className="flex items-center gap-3.5 text-white/85">
        <span className="hidden items-center gap-1 sm:flex">
          <BatteryMedium className="h-4.5 w-4.5" strokeWidth={1.5} />
          <span className="text-xs">87%</span>
        </span>
        <Wifi className="hidden h-4 w-4 sm:block" strokeWidth={1.75} />
        <Search className="hidden h-3.5 w-3.5 sm:block" strokeWidth={2} />
        {now && (
          <span className="whitespace-nowrap">
            <span className="hidden sm:inline">{now.date}&ensp;</span>
            {now.time}
          </span>
        )}
      </div>
    </div>
  );
}
