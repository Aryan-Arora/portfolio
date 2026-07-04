import {
  StickyNote,
  Briefcase,
  MessageCircle,
  Sparkles,
  Code2,
  Mail,
  FileText,
  Trash2,
} from "lucide-react";

const dockItems = [
  { icon: StickyNote, label: "Notes", href: "#notes" },
  { icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com/in/aryan-arora-a9281a319" },
  { icon: MessageCircle, label: "Messages", href: "#messages" },
  { icon: Sparkles, label: "ChatGPT", href: "#chat" },
  { icon: Code2, label: "GitHub", href: "https://github.com/Aryan-Arora" },
  { icon: Mail, label: "Contact", href: "mailto:aryanarora230506@gmail.com" },
  { icon: FileText, label: "Resume", href: "/resume.pdf" },
];

export function Dock() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-50 flex justify-center">
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-xl">
        {dockItems.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            title={label}
            className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white/90 transition-transform hover:-translate-y-1.5 hover:bg-white/20"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </a>
        ))}
        <span className="mx-1 h-8 w-px bg-white/15" />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white/60">
          <Trash2 className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
