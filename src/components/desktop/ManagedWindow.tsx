"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  PointerEvent as ReactPointerEvent,
} from "react";
import { cn } from "@/lib/utils";
import type { WindowChrome } from "./WindowFrame";

export type Rect = { x: number; y: number; w: number; h: number };

const MENU_BAR = 32;
const DOCK_SPACE = 88;
const MIN_W = 380;
const MIN_H = 300;

type ResizeDir = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

const handles: { dir: ResizeDir; className: string }[] = [
  { dir: "n", className: "top-0 left-3 right-3 h-1.5 cursor-ns-resize" },
  { dir: "s", className: "bottom-0 left-3 right-3 h-1.5 cursor-ns-resize" },
  { dir: "e", className: "right-0 top-3 bottom-3 w-1.5 cursor-ew-resize" },
  { dir: "w", className: "left-0 top-3 bottom-3 w-1.5 cursor-ew-resize" },
  { dir: "nw", className: "top-0 left-0 h-3 w-3 cursor-nwse-resize" },
  { dir: "se", className: "bottom-0 right-0 h-3 w-3 cursor-nwse-resize" },
  { dir: "ne", className: "top-0 right-0 h-3 w-3 cursor-nesw-resize" },
  { dir: "sw", className: "bottom-0 left-0 h-3 w-3 cursor-nesw-resize" },
];

function clampRect(r: Rect): Rect {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    ...r,
    x: Math.min(Math.max(r.x, -(r.w - 120)), vw - 120),
    y: Math.min(Math.max(r.y, MENU_BAR), vh - 60),
  };
}

export function ManagedWindow({
  initialRect,
  zIndex,
  minimized,
  onFocus,
  children,
}: {
  initialRect: (vw: number, vh: number) => Rect;
  zIndex: number;
  minimized: boolean;
  onFocus: () => void;
  // children receives the window-chrome callbacks to spread into WindowFrame
  children: (chrome: Pick<WindowChrome, "onTitleBarPointerDown" | "onTitleBarDoubleClick" | "onZoom">) => ReactNode;
}) {
  const [rect, setRect] = useState<Rect | null>(null);
  const preZoom = useRef<Rect | null>(null);
  const gesture = useRef<{
    startX: number;
    startY: number;
    startRect: Rect;
    dir: ResizeDir | "move";
  } | null>(null);

  // true once the user has dragged/resized/zoomed — untouched windows re-flow
  // to their natural layout on viewport resize, touched ones only get clamped
  const touched = useRef(false);

  useEffect(() => {
    setRect((r) => r ?? clampRect(initialRect(window.innerWidth, window.innerHeight)));

    const onViewportResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setRect((r) => {
        if (!r) return r;
        if (!touched.current) return clampRect(initialRect(vw, vh));
        return clampRect({
          ...r,
          w: Math.max(MIN_W, Math.min(r.w, vw - 24)),
          h: Math.max(MIN_H, Math.min(r.h, vh - MENU_BAR - 24)),
        });
      });
    };
    window.addEventListener("resize", onViewportResize);
    return () => window.removeEventListener("resize", onViewportResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const beginGesture = (
    e: ReactPointerEvent<HTMLDivElement>,
    dir: ResizeDir | "move"
  ) => {
    if (!rect) return;
    e.preventDefault();
    onFocus();
    touched.current = true;
    gesture.current = { startX: e.clientX, startY: e.clientY, startRect: rect, dir };

    const onMove = (ev: PointerEvent) => {
      const g = gesture.current;
      if (!g) return;
      const dx = ev.clientX - g.startX;
      const dy = ev.clientY - g.startY;
      const s = g.startRect;

      if (g.dir === "move") {
        setRect(clampRect({ ...s, x: s.x + dx, y: s.y + dy }));
        return;
      }

      let { x, y, w, h } = s;
      if (g.dir.includes("e")) w = s.w + dx;
      if (g.dir.includes("s")) h = s.h + dy;
      if (g.dir.includes("w")) {
        w = s.w - dx;
        x = s.x + dx;
      }
      if (g.dir.includes("n")) {
        h = s.h - dy;
        y = s.y + dy;
      }
      if (w < MIN_W) {
        if (g.dir.includes("w")) x -= MIN_W - w;
        w = MIN_W;
      }
      if (h < MIN_H) {
        if (g.dir.includes("n")) y -= MIN_H - h;
        h = MIN_H;
      }
      preZoom.current = null; // manual resize clears zoom memory
      setRect(clampRect({ x, y, w, h }));
    };

    const onUp = () => {
      gesture.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const toggleZoom = () => {
    if (!rect) return;
    touched.current = true;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (preZoom.current) {
      setRect(clampRect(preZoom.current));
      preZoom.current = null;
    } else {
      preZoom.current = rect;
      setRect({ x: 10, y: MENU_BAR + 8, w: vw - 20, h: vh - MENU_BAR - DOCK_SPACE });
    }
  };

  if (!rect) return null;

  return (
    <div
      className={cn(
        "fixed animate-in fade-in-0 zoom-in-95 duration-200",
        minimized &&
          "pointer-events-none translate-y-24 scale-50 opacity-0 transition-all duration-300"
      )}
      style={{ left: rect.x, top: rect.y, width: rect.w, height: rect.h, zIndex }}
      onPointerDown={onFocus}
    >
      {children({
        onTitleBarPointerDown: (e) => beginGesture(e, "move"),
        onTitleBarDoubleClick: toggleZoom,
        onZoom: toggleZoom,
      })}
      {handles.map(({ dir, className }) => (
        <div
          key={dir}
          className={cn("absolute z-10", className)}
          onPointerDown={(e) => beginGesture(e, dir)}
        />
      ))}
    </div>
  );
}
