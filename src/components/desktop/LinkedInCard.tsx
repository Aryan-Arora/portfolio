import { Briefcase } from "lucide-react";
import { WindowFrame } from "./WindowFrame";

export function LinkedInCard() {
  return (
    <WindowFrame title="LinkedIn" icon={<Briefcase className="h-3.5 w-3.5" />}>
      <div className="relative h-24 w-full bg-gradient-to-br from-[#2b4162] via-[#1b2b45] to-[#0e1626]" />
      <div className="px-5 pb-5">
        <div className="-mt-10 h-20 w-20 rounded-full border-4 border-[#1c1c1e] bg-gradient-to-br from-white/20 to-white/5" />
        <div className="mt-3 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">Aryan Arora</h3>
          <span className="text-xs text-white/40">He/Him</span>
        </div>
        <p className="mt-1 text-sm text-white/70">
          Front-End Developer · Python Developer · AI/ML Enthusiast
        </p>
        <p className="mt-2 text-xs text-white/40">New Delhi, India · MSIT, IP University</p>
        <a
          href="https://linkedin.com/in/aryan-arora-a9281a319"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0a66c2] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#0a5cad]"
        >
          Open on LinkedIn
        </a>
      </div>
    </WindowFrame>
  );
}
