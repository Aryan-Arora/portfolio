"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { defaultWallpaperId } from "@/content/wallpapers";

export type AppId = "notes" | "messages" | "linkedin" | "chatgpt" | "settings";

export const appNames: Record<AppId, string> = {
  notes: "Notes",
  messages: "Messages",
  linkedin: "LinkedIn",
  chatgpt: "ChatGPT",
  settings: "System Settings",
};

type DesktopState = {
  open: Record<AppId, boolean>;
  minimized: Record<AppId, boolean>;
  focusOrder: AppId[]; // last = frontmost
  wallpaperId: string;
  activeApp: string;
  dockClick: (id: AppId) => void; // open / restore / focus — never closes (like real macOS)
  closeApp: (id: AppId) => void;
  minimizeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
  setWallpaperId: (id: string) => void;
};

const allClosed: Record<AppId, boolean> = {
  notes: false,
  messages: false,
  linkedin: false,
  chatgpt: false,
  settings: false,
};

const DesktopContext = createContext<DesktopState | null>(null);

export function useDesktop() {
  const ctx = useContext(DesktopContext);
  if (!ctx) throw new Error("useDesktop must be used inside DesktopProvider");
  return ctx;
}

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Record<AppId, boolean>>({
    ...allClosed,
    notes: true,
    messages: true,
  });
  const [minimized, setMinimized] = useState<Record<AppId, boolean>>(allClosed);
  const [focusOrder, setFocusOrder] = useState<AppId[]>(["messages", "notes"]);
  const [wallpaperId, setWallpaperId] = useState(defaultWallpaperId);

  const focusApp = (id: AppId) =>
    setFocusOrder((prev) => [...prev.filter((a) => a !== id), id]);

  const dockClick = (id: AppId) => {
    setOpen((prev) => ({ ...prev, [id]: true }));
    setMinimized((prev) => ({ ...prev, [id]: false }));
    focusApp(id);
  };

  const closeApp = (id: AppId) => {
    setOpen((prev) => ({ ...prev, [id]: false }));
    setMinimized((prev) => ({ ...prev, [id]: false }));
    setFocusOrder((prev) => prev.filter((a) => a !== id));
  };

  const minimizeApp = (id: AppId) => {
    setMinimized((prev) => ({ ...prev, [id]: true }));
    setFocusOrder((prev) => prev.filter((a) => a !== id));
  };

  const frontmost = focusOrder[focusOrder.length - 1];
  const activeApp =
    frontmost && open[frontmost] && !minimized[frontmost]
      ? appNames[frontmost]
      : "Finder";

  return (
    <DesktopContext.Provider
      value={{
        open,
        minimized,
        focusOrder,
        wallpaperId,
        activeApp,
        dockClick,
        closeApp,
        minimizeApp,
        focusApp,
        setWallpaperId,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}
