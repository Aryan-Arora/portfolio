"use client";

import { useState, type ComponentType } from "react";
import { useDesktop, type AppId } from "./DesktopContext";
import {
  FinderIcon,
  NotesIcon,
  MessagesIcon,
  LinkedInIcon,
  ChatGPTIcon,
  TerminalIcon,
  MailIcon,
  SettingsIcon,
  TrashIcon,
} from "./AppIcons";
import { cn } from "@/lib/utils";

type DockEntry = {
  label: string;
  icon: ComponentType;
  app?: AppId; // opens an in-site window
  href?: string; // external link
};

const dockItems: DockEntry[] = [
  { label: "Finder", icon: FinderIcon },
  { label: "Notes", icon: NotesIcon, app: "notes" },
  { label: "Messages", icon: MessagesIcon, app: "messages" },
  { label: "LinkedIn", icon: LinkedInIcon, app: "linkedin" },
  { label: "ChatGPT", icon: ChatGPTIcon, app: "chatgpt" },
  { label: "GitHub", icon: TerminalIcon, href: "https://github.com/Aryan-Arora" },
  { label: "Mail", icon: MailIcon, href: "mailto:aryanarora230506@gmail.com" },
  { label: "System Settings", icon: SettingsIcon, app: "settings" },
];

export function Dock() {
  const { open, dockClick } = useDesktop();
  const [bouncing, setBouncing] = useState<string | null>(null);

  const bounce = (label: string) => {
    setBouncing(label);
    setTimeout(() => setBouncing(null), 600);
  };

  return (
    <div className="fixed inset-x-0 bottom-2 z-50 flex justify-center px-2">
      <div className="flex max-w-full items-end gap-1.5 overflow-x-auto rounded-2xl border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-2xl sm:gap-2 sm:px-3">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isOpen = item.app ? open[item.app] : false;
          const inner = (
            <>
              <span
                className={cn(
                  "block h-10 w-10 transition-transform duration-150 ease-out group-hover:-translate-y-2 group-hover:scale-110 sm:h-12 sm:w-12",
                  bouncing === item.label && "animate-bounce"
                )}
              >
                <Icon />
              </span>
              <span
                className={cn(
                  "mx-auto mt-0.5 block h-1 w-1 rounded-full transition-opacity",
                  isOpen ? "bg-white/80 opacity-100" : "opacity-0"
                )}
              />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-[11px] text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative shrink-0"
              >
                {inner}
              </a>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => (item.app ? dockClick(item.app) : bounce(item.label))}
              className="group relative shrink-0"
              aria-label={item.label}
            >
              {inner}
            </button>
          );
        })}

        <span className="mx-1 h-10 w-px shrink-0 self-center bg-white/20" />

        <button
          onClick={() => bounce("Trash")}
          className="group relative shrink-0"
          aria-label="Trash"
        >
          <span
            className={cn(
              "block h-10 w-10 transition-transform duration-150 ease-out group-hover:-translate-y-2 group-hover:scale-110 sm:h-12 sm:w-12",
              bouncing === "Trash" && "animate-bounce"
            )}
          >
            <TrashIcon />
          </span>
          <span className="mx-auto mt-0.5 block h-1 w-1 rounded-full opacity-0" />
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-[11px] text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            Trash
          </span>
        </button>
      </div>
    </div>
  );
}
