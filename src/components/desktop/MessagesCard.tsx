import { MessageCircle } from "lucide-react";
import { WindowFrame } from "./WindowFrame";
import { messages, fakeContact } from "@/content/messages";
import { cn } from "@/lib/utils";

export function MessagesCard() {
  return (
    <WindowFrame title={`To: ${fakeContact}`} icon={<MessageCircle className="h-3.5 w-3.5" />}>
      <div className="flex flex-col gap-2 px-4 py-4">
        {messages.map((m, i) => (
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
    </WindowFrame>
  );
}
