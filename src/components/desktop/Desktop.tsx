"use client";

import { ReactNode } from "react";
import { FileText } from "lucide-react";
import { DesktopProvider, useDesktop, type AppId } from "./DesktopContext";
import { Wallpaper } from "./Wallpaper";
import { MenuBar } from "./MenuBar";
import { Dock } from "./Dock";
import { NotesApp } from "./NotesApp";
import { MessagesApp } from "./MessagesApp";
import { LinkedInApp } from "./LinkedInApp";
import { ChatGPTApp } from "./ChatGPTApp";
import { SettingsApp } from "./SettingsApp";
import { ManagedWindow, type Rect } from "./ManagedWindow";
import type { WindowChrome } from "./WindowFrame";

const initialRects: Record<AppId, (vw: number, vh: number) => Rect> = {
  notes: (vw, vh) => ({
    x: vw * 0.04,
    y: vh * 0.09,
    w: Math.min(880, vw * 0.62),
    h: vh * 0.7,
  }),
  messages: (vw, vh) => ({
    x: vw - Math.min(620, vw * 0.44) - vw * 0.03,
    y: vh * 0.15,
    w: Math.min(620, vw * 0.44),
    h: vh * 0.6,
  }),
  linkedin: (vw, vh) => ({
    x: vw * 0.3,
    y: vh * 0.07,
    w: 520,
    h: vh * 0.78,
  }),
  chatgpt: (vw, vh) => ({ x: vw * 0.34, y: vh * 0.26, w: 500, h: vh * 0.44 }),
  settings: (vw, vh) => ({
    x: vw * 0.22,
    y: vh * 0.12,
    w: Math.min(720, vw * 0.54),
    h: vh * 0.64,
  }),
};

const mobileHeight: Record<AppId, string> = {
  notes: "h-[72vh]",
  messages: "h-[64vh]",
  linkedin: "h-[70vh]",
  chatgpt: "h-[46vh]",
  settings: "h-[64vh]",
};

function renderApp(id: AppId, chrome: WindowChrome): ReactNode {
  switch (id) {
    case "notes":
      return <NotesApp chrome={chrome} />;
    case "messages":
      return <MessagesApp chrome={chrome} />;
    case "linkedin":
      return <LinkedInApp chrome={chrome} />;
    case "chatgpt":
      return <ChatGPTApp chrome={chrome} />;
    case "settings":
      return <SettingsApp chrome={chrome} />;
  }
}

const appIds: AppId[] = ["notes", "messages", "linkedin", "chatgpt", "settings"];

function DesktopWindows() {
  const { open, minimized, focusOrder, closeApp, minimizeApp, focusApp } =
    useDesktop();
  const top = focusOrder[focusOrder.length - 1];

  return (
    <div className="hidden lg:block">
      {appIds
        .filter((id) => open[id])
        .map((id) => (
          <ManagedWindow
            key={id}
            initialRect={initialRects[id]}
            zIndex={10 + Math.max(focusOrder.indexOf(id), 0)}
            minimized={minimized[id]}
            onFocus={() => focusApp(id)}
          >
            {(windowChrome) =>
              renderApp(id, {
                ...windowChrome,
                onClose: () => closeApp(id),
                onMinimize: () => minimizeApp(id),
                isActive: top === id && !minimized[id],
              })
            }
          </ManagedWindow>
        ))}
    </div>
  );
}

function MobileWindows() {
  const { open, closeApp } = useDesktop();
  const openApps = appIds.filter((id) => open[id]);

  return (
    <div className="flex flex-col gap-5 px-3 pb-28 pt-12 lg:hidden">
      {openApps.map((id) => (
        <div key={id} className={mobileHeight[id]}>
          {renderApp(id, { onClose: () => closeApp(id), isActive: true })}
        </div>
      ))}
      {openApps.length === 0 && (
        <p className="pt-24 text-center text-sm text-white/60">
          everything&rsquo;s closed. tap an app in the dock ↓
        </p>
      )}
    </div>
  );
}

function DesktopFileIcon() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 top-12 z-[5] hidden flex-col items-center gap-1 lg:flex"
    >
      <span className="flex h-14 w-12 items-center justify-center rounded-lg bg-white/90 shadow-md transition-transform group-hover:scale-105">
        <span className="flex flex-col items-center">
          <FileText className="h-6 w-6 text-red-500" />
          <span className="mt-0.5 text-[8px] font-bold tracking-wide text-red-500">
            PDF
          </span>
        </span>
      </span>
      <span className="rounded bg-black/40 px-1.5 py-0.5 text-[11px] text-white backdrop-blur">
        Resume.pdf
      </span>
    </a>
  );
}

function DesktopInner() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Wallpaper />
      <MenuBar />
      <DesktopFileIcon />
      <DesktopWindows />
      <MobileWindows />
      <Dock />
    </div>
  );
}

export function Desktop() {
  return (
    <DesktopProvider>
      <DesktopInner />
    </DesktopProvider>
  );
}
