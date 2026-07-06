"use client";

import { useState } from "react";
import { StickyNote } from "lucide-react";
import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { notes, groupOrder, type Note } from "@/content/notes";
import { cn } from "@/lib/utils";

export function NotesApp({ chrome }: { chrome?: WindowChrome }) {
  const [activeId, setActiveId] = useState<string>(notes[0].id);
  const active = notes.find((n) => n.id === activeId) ?? notes[0];

  return (
    <WindowFrame
      title="Notes"
      icon={<StickyNote className="h-3.5 w-3.5" />}
      {...chrome}
      className="h-full"
      bodyClassName="!overflow-hidden"
    >
      <div className="grid h-full grid-cols-1 sm:grid-cols-[260px_1fr]">
        <aside className="hidden h-full overflow-y-auto border-r border-white/10 bg-[#232325]/80 sm:block">
          {groupOrder.map((group) => {
            const items = notes.filter((n) => n.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group} className="px-3 pt-4">
                <div className="px-1.5 pb-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/40">
                  {group}
                </div>
                <div className="flex flex-col gap-0.5">
                  {items.map((note) => (
                    <NoteListItem
                      key={note.id}
                      note={note}
                      isActive={note.id === activeId}
                      onSelect={() => setActiveId(note.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          <div className="h-4" />
        </aside>

        <div className="flex h-full flex-col overflow-y-auto px-6 py-6 sm:px-10 sm:py-8">
          <div className="mb-1 text-xs text-white/40">{active.date}, 2026</div>
          <h1 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-white">
            <span>{active.emoji}</span>
            <span>{active.title}</span>
          </h1>
          <div className="flex max-w-2xl flex-col gap-4 text-[15px] leading-relaxed text-white/85">
            {active.body.map((paragraph, i) =>
              paragraph.startsWith("## ") ? (
                <h2
                  key={i}
                  className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45"
                >
                  {paragraph.slice(3)}
                </h2>
              ) : (
                <p key={i}>{paragraph}</p>
              )
            )}
          </div>

          {/* mobile note switcher */}
          <div className="mt-8 flex flex-wrap gap-2 sm:hidden">
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => setActiveId(note.id)}
                className={cn(
                  "rounded-full border border-white/10 px-3 py-1 text-xs",
                  note.id === activeId
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-white/60"
                )}
              >
                {note.emoji} {note.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

function NoteListItem({
  note,
  isActive,
  onSelect,
}: {
  note: Note;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex flex-col gap-0.5 rounded-lg px-2.5 py-2 text-left transition-colors",
        isActive ? "bg-[#5a4a1e]" : "hover:bg-white/5"
      )}
    >
      <span className="flex items-center gap-1.5 text-sm font-medium text-white">
        <span>{note.emoji}</span>
        <span>{note.title}</span>
      </span>
      <span className="truncate text-xs text-white/50">
        <span className="text-white/70">{note.date}</span> {note.preview}
      </span>
    </button>
  );
}
