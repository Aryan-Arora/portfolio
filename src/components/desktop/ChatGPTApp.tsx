"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { ChatGPTIcon } from "./AppIcons";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; text: string };

const cannedAnswers: { prompt: string; answer: string }[] = [
  {
    prompt: "why should you hire him?",
    answer:
      "Because he ships. He's been interning since his first year of college — currently a software development intern at Hostiggo (a travel platform), before that 1.5 years as a frontend developer at House of Sports. He builds things end to end: this very website is a hand-rolled macOS window manager in ~150 lines of pointer-event code, no library. Also: Anthropic-certified (Claude Code 101, AI Fluency) and mid-way through advanced ML coursework.",
  },
  {
    prompt: "what's hostiggo?",
    answer:
      "Hostiggo is a community-driven travel platform, and Aryan is a software development intern there (Jan 2026 – present). He works across the React Native mobile app and the integration layer — front-end defect hunting, database integration, payments (Razorpay/PayU), and QA with the founding team.",
  },
  {
    prompt: "front-end or python?",
    answer:
      "Both, for different jobs. Front-end (React, React Native, Next.js) is how he ships products people touch. Python is his lab — data analysis, GUI tools, game prototypes, and increasingly ML: he's doing Advanced ML (Python & R) on Udemy and Mathematics for ML from Imperial College London on Coursera.",
  },
  {
    prompt: "still in college?",
    answer:
      "Yep — 2nd-year B.Tech in Information Technology at MSIT (IP University), New Delhi, class of '28. The internships run alongside college, not after it. He was also Head Boy at Army Public School and plays football competitively.",
  },
];

const fallbackAnswer =
  "I'm a tiny demo model that only knows a few things about Aryan — try one of the suggested prompts, or ask the real one: aryanarora230506@gmail.com";

export function ChatGPTApp({ chrome }: { chrome?: WindowChrome }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const ask = (question: string) => {
    if (thinking || !question.trim()) return;
    const canned = cannedAnswers.find(
      (c) => c.prompt.toLowerCase() === question.trim().toLowerCase()
    );
    setMessages((m) => [...m, { role: "user", text: question.trim() }]);
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: canned ? canned.answer : fallbackAnswer },
      ]);
      setThinking(false);
    }, 700);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
    setInput("");
  };

  return (
    <WindowFrame
      title="ChatGPT"
      icon={<span className="inline-block h-3.5 w-3.5"><ChatGPTIcon /></span>}
      {...chrome}
      className="h-full"
      bodyClassName="!overflow-hidden"
    >
      <div className="flex h-full flex-col">
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <h3 className="text-xl font-semibold text-white/90">
                Where should we begin?
              </h3>
              <p className="max-w-xs text-xs text-white/40">
                a tiny model that answers questions about aryan. try one:
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div
                    key={i}
                    className="ml-auto max-w-[85%] rounded-3xl bg-[#2f2f31] px-4 py-2 text-sm text-white/90"
                  >
                    {m.text}
                  </div>
                ) : (
                  <div key={i} className="flex max-w-full gap-2.5">
                    <span className="mt-0.5 h-6 w-6 shrink-0">
                      <ChatGPTIcon />
                    </span>
                    <p className="text-sm leading-relaxed text-white/85">
                      {m.text}
                    </p>
                  </div>
                )
              )}
              {thinking && (
                <div className="flex items-center gap-2.5">
                  <span className="h-6 w-6 shrink-0">
                    <ChatGPTIcon />
                  </span>
                  <span className="flex gap-1">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 px-4 pb-4 pt-3">
          <div className="mb-2.5 flex flex-wrap justify-center gap-1.5">
            {cannedAnswers.map((c) => (
              <button
                key={c.prompt}
                onClick={() => ask(c.prompt)}
                disabled={thinking}
                className={cn(
                  "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition-colors",
                  thinking ? "opacity-40" : "hover:bg-white/10 hover:text-white"
                )}
              >
                {c.prompt}
              </button>
            ))}
          </div>
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#2a2a2c] py-1 pl-4 pr-1"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything"
              className="min-w-0 flex-1 bg-transparent text-sm text-white/85 placeholder:text-white/35 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send"
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
                input.trim() && !thinking
                  ? "bg-white text-black"
                  : "bg-white/15 text-white/40"
              )}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </WindowFrame>
  );
}
