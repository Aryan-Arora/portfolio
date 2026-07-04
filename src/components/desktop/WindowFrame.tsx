import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function WindowFrame({
  title,
  icon,
  children,
  className,
  bodyClassName,
}: {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1e]/95 shadow-2xl shadow-black/50 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#2a2a2c]/80 px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 text-xs font-medium text-white/60">
          {icon}
          <span>{title}</span>
        </div>
        <div className="w-[52px]" />
      </div>
      <div className={cn("flex-1 overflow-auto", bodyClassName)}>{children}</div>
    </div>
  );
}
