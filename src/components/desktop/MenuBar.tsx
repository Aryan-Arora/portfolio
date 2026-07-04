"use client";

import { useEffect, useState } from "react";

export function MenuBar({ activeApp }: { activeApp: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      );
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
      <div className="flex items-center gap-3 text-white/80">
        <span className="hidden sm:inline">aryan arora</span>
        {time && <span>{time}</span>}
      </div>
    </div>
  );
}
