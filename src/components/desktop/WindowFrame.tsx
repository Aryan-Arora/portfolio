"use client";

import { ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/utils";

// window-chrome callbacks passed down from ManagedWindow (desktop) or the
// mobile stack (close only)
export type WindowChrome = {
  onClose?: () => void;
  onMinimize?: () => void;
  onZoom?: () => void;
  onTitleBarPointerDown?: (e: PointerEvent<HTMLDivElement>) => void;
  onTitleBarDoubleClick?: () => void;
  isActive?: boolean;
};

export function WindowFrame({
  title,
  icon,
  children,
  className,
  bodyClassName,
  onClose,
  onMinimize,
  onZoom,
  onTitleBarPointerDown,
  onTitleBarDoubleClick,
  isActive = true,
}: WindowChrome & {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  const stop = (e: PointerEvent) => e.stopPropagation();

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1e]/95 backdrop-blur-xl",
        isActive ? "shadow-2xl shadow-black/60" : "shadow-lg shadow-black/30",
        className
      )}
    >
      <div
        onPointerDown={onTitleBarPointerDown}
        onDoubleClick={onTitleBarDoubleClick}
        className={cn(
          "flex select-none items-center gap-2 border-b border-white/10 px-3 py-2.5",
          isActive ? "bg-[#2f2f31]/90" : "bg-[#252527]/80"
        )}
      >
        <div className="group flex items-center gap-1.5" onPointerDown={stop}>
          <button
            aria-label={`Close ${typeof title === "string" ? title : "window"}`}
            onClick={onClose}
            className={cn(
              "flex h-3 w-3 items-center justify-center rounded-full",
              isActive && onClose ? "bg-[#ff5f57]" : "bg-white/20"
            )}
          >
            {onClose && (
              <span className="text-[9px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
                ×
              </span>
            )}
          </button>
          <button
            aria-label="Minimize"
            onClick={onMinimize}
            disabled={!onMinimize}
            className={cn(
              "flex h-3 w-3 items-center justify-center rounded-full",
              isActive && onMinimize ? "bg-[#febc2e]" : "bg-white/20"
            )}
          >
            {onMinimize && (
              <span className="text-[9px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
                −
              </span>
            )}
          </button>
          <button
            aria-label="Zoom"
            onClick={onZoom}
            disabled={!onZoom}
            className={cn(
              "flex h-3 w-3 items-center justify-center rounded-full",
              isActive && onZoom ? "bg-[#28c840]" : "bg-white/20"
            )}
          >
            {onZoom && (
              <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
                +
              </span>
            )}
          </button>
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
