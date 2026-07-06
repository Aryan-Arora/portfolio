"use client";

import { useState } from "react";
import { Search, Smile } from "lucide-react";
import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { threads, defaultThreadId } from "@/content/messages";
import { cn } from "@/lib/utils";

const avatarColors = [
  "bg-gradient-to-br from-slate-400 to-slate-600",
  "bg-gradient-to-br from-indigo-400 to-indigo-600",
  "bg-gradient-to-br from-rose-400 to-rose-600",
  "bg-gradient-to-br from-emerald-400 to-emerald-600",
  "bg-gradient-to-br from-amber-400 to-amber-600",
  "bg-gradient-to-br from-sky-400 to-sky-600",
];

export function MessagesApp({ chrome }: { chrome?: WindowChrome }) {
  const [activeId, setActiveId] = useState(defaultThreadId);
  const [read, setRead] = useState<Record<string, boolean>>({ [defaultThreadId]: true });
  const active = threads.find((t) => t.id === activeId) ?? threads[0];

  const select = (id: string) => {
    setActiveId(id);
    setRead((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <WindowFrame
      title={`To: ${active.name}`}
      {...chrome}
      className="h-full"
      bodyClassName="!overflow-hidden"
    >
      <div className="grid h-full grid-cols-[92px_1fr] sm:grid-cols-[220px_1fr]">
        <aside className="flex h-full flex-col overflow-y-auto border-r border-white/10 bg-[#232325]/80">
          <div className="p-2">
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1.5 text-xs text-white/40">
              <Search className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">Search</span>
            </div>
          </div>
          {threads.map((t, i) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-2.5 text-left transition-colors",
                t.id === activeId ? "bg-[#0a84ff]" : "hover:bg-white/5"
              )}
            >
              <span className="relative shrink-0">
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white",
                    avatarColors[i % avatarColors.length]
                  )}
                >
                  {t.initials}
                </span>
                {t.unread && !read[t.id] && (
                  <span className="absolute -left-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#0a84ff] ring-2 ring-[#232325]" />
                )}
              </span>
              <span className="hidden min-w-0 flex-1 sm:block">
                <span className="flex items-baseline justify-between gap-1">
                  <span className="truncate text-[13px] font-semibold text-white">
                    {t.name}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-[10px]",
                      t.id === activeId ? "text-white/70" : "text-white/40"
                    )}
                  >
                    {t.time}
                  </span>
                </span>
                <span
                  className={cn(
                    "block truncate text-xs",
                    t.id === activeId ? "text-white/80" : "text-white/45"
                  )}
                >
                  {t.preview}
                </span>
              </span>
            </button>
          ))}
        </aside>

        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
            {active.messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug",
                  m.from === "me"
                    ? "ml-auto bg-[#0a84ff] text-white"
                    : "mr-auto bg-white/10 text-white/90"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2.5">
            <div className="flex-1 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/35">
              Type a message…
            </div>
            <Smile className="h-5 w-5 text-white/35" />
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
