"use client";

import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { ChatGPTIcon } from "./AppIcons";

const prompts = [
  "why should you hire him?",
  "what's hostiggo?",
  "front-end or python?",
  "still in college?",
];

export function ChatGPTApp({ chrome }: { chrome?: WindowChrome }) {
  return (
    <WindowFrame
      title="ChatGPT"
      icon={<span className="inline-block h-3.5 w-3.5"><ChatGPTIcon /></span>}
      {...chrome}
      className="h-full"
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 px-5 py-8 text-center">
        <h3 className="text-xl font-semibold text-white/90">Where should we begin?</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {prompts.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="w-full max-w-sm rounded-full border border-white/10 bg-[#2a2a2c] px-4 py-2 text-left text-sm text-white/40">
          Ask anything
        </div>
      </div>
    </WindowFrame>
  );
}
