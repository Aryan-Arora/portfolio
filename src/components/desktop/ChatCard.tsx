import { Sparkles } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

const prompts = [
  "why should you hire him?",
  "what's hostiggo?",
  "front-end or python?",
  "still in college?",
];

export function ChatCard() {
  return (
    <WindowFrame title="ChatGPT" icon={<Sparkles className="h-3.5 w-3.5" />}>
      <div className="flex flex-col items-center gap-6 px-5 py-8 text-center">
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
        <div className="w-full rounded-full border border-white/10 bg-[#2a2a2c] px-4 py-2 text-left text-sm text-white/40">
          Ask anything
        </div>
      </div>
    </WindowFrame>
  );
}
