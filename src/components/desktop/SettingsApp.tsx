"use client";

import {
  Wifi,
  Bluetooth,
  Globe,
  Bell,
  Moon,
  Image as ImageIcon,
  Palette,
  Lock,
  Users,
} from "lucide-react";
import { WindowFrame, type WindowChrome } from "./WindowFrame";
import { useDesktop } from "./DesktopContext";
import { wallpapers } from "@/content/wallpapers";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Wifi, label: "Wi-Fi", tint: "bg-blue-500" },
  { icon: Bluetooth, label: "Bluetooth", tint: "bg-blue-500" },
  { icon: Globe, label: "Network", tint: "bg-blue-500" },
  { icon: Bell, label: "Notifications", tint: "bg-red-500" },
  { icon: Moon, label: "Focus", tint: "bg-indigo-500" },
  { icon: Palette, label: "Appearance", tint: "bg-zinc-600" },
  { icon: ImageIcon, label: "Wallpaper", tint: "bg-cyan-500", active: true },
  { icon: Lock, label: "Privacy & Security", tint: "bg-blue-600" },
  { icon: Users, label: "Users & Groups", tint: "bg-zinc-600" },
];

export function SettingsApp({ chrome }: { chrome?: WindowChrome }) {
  const { wallpaperId, setWallpaperId } = useDesktop();
  const current = wallpapers.find((w) => w.id === wallpaperId);

  return (
    <WindowFrame
      title="Wallpaper"
      {...chrome}
      className="h-full"
      bodyClassName="!overflow-hidden"
    >
      <div className="grid h-full grid-cols-[52px_1fr] sm:grid-cols-[200px_1fr]">
        <aside className="h-full overflow-y-auto border-r border-white/10 bg-[#232325]/80 py-2">
          <div className="mx-2 mb-2 hidden items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 sm:flex">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-300/50 to-indigo-400/40 text-center text-[10px] font-bold leading-6 text-white">
              AA
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-white">Aryan Arora</p>
              <p className="truncate text-[10px] text-white/40">Apple Account</p>
            </div>
          </div>
          {sidebarItems.map(({ icon: Icon, label, tint, active }) => (
            <div
              key={label}
              className={cn(
                "mx-2 flex items-center gap-2 rounded-md px-2 py-1.5",
                active ? "bg-[#0a84ff]" : "opacity-70"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded",
                  tint
                )}
              >
                <Icon className="h-3 w-3 text-white" />
              </span>
              <span className="hidden truncate text-[13px] text-white sm:inline">
                {label}
              </span>
            </div>
          ))}
        </aside>

        <div className="h-full overflow-y-auto px-5 py-5">
          <h3 className="text-base font-semibold text-white">Wallpaper</h3>
          <p className="mt-0.5 text-xs text-white/50">
            {current ? current.name : "Custom"} — click a wallpaper to apply it to
            the desktop.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {wallpapers.map((w) => (
              <button
                key={w.id}
                onClick={() => setWallpaperId(w.id)}
                className={cn(
                  "group overflow-hidden rounded-lg border-2 text-left transition-all",
                  w.id === wallpaperId
                    ? "border-[#0a84ff]"
                    : "border-transparent hover:border-white/30"
                )}
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-md">
                  {w.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={w.src}
                      alt={w.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 15%, #f7c59f 0%, #e08a6f 18%, #b15f7a 34%, #5b4272 52%, #2b2f5c 68%, #10142e 84%, #05060f 100%)",
                      }}
                    />
                  )}
                </div>
                <p className="px-1 py-1 text-[11px] text-white/70">{w.name}</p>
              </button>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-white/35">
            Wallpapers from macOS. This is a mock of System Settings — only the
            wallpaper picker actually does something. The rest is for vibes.
          </p>
        </div>
      </div>
    </WindowFrame>
  );
}
