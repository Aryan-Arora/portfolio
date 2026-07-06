export type Wallpaper = {
  id: string;
  name: string;
  src: string | null; // null = built-in CSS gradient
};

export const wallpapers: Wallpaper[] = [
  { id: "sonoma", name: "Sonoma", src: "/wallpapers/sonoma.jpg" },
  { id: "mac-blue", name: "Mac Blue", src: "/wallpapers/mac-blue.jpg" },
  { id: "mac-purple", name: "Mac Purple", src: "/wallpapers/mac-purple.jpg" },
  { id: "mac-pink", name: "Mac Pink", src: "/wallpapers/mac-pink.jpg" },
  { id: "radial-sky", name: "Radial Sky", src: "/wallpapers/radial-sky.jpg" },
  { id: "aurora", name: "Aurora (Gradient)", src: null },
];

export const defaultWallpaperId = "sonoma";
