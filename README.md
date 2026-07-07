# aryan arora — a portfolio that works like a Mac

My personal portfolio, built as a **simulated macOS desktop**: real draggable,
resizable windows, a dock with hand-drawn app icons, working traffic lights
(close / minimize / zoom), and content presented as native-feeling apps instead
of scrolling sections.

> Live demo: coming soon · [LinkedIn](https://www.linkedin.com/in/aryan-arora-a9281a319) · [GitHub](https://github.com/Aryan-Arora)

## The apps

| App | What it is |
| --- | --- |
| 📝 **Notes** | The main content — about me, experience, projects, skills, achievements, all as pinned notes |
| 💬 **Messages** | Mock iMessage threads with famous people discussing what I'm building |
| 💼 **LinkedIn** | My actual profile data rendered as an in-site app, with a Connect button to the real thing |
| ✳️ **ChatGPT** | Ask-me-anything window with suggested prompts about my work |
| ⚙️ **System Settings** | Working wallpaper picker with real macOS wallpapers |

## The window manager

Windows behave like real macOS windows:

- Drag by the title bar, resize from all 8 edges/corners
- 🔴 close · 🟡 minimize to dock · 🟢 zoom (or double-click the title bar)
- Dock clicks open / restore / focus (never quit — just like the real thing)
- Focused app's name shows in the menu bar; running apps get a dock dot
- Windows re-flow on viewport resize unless you've moved them

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** + shadcn/ui
- No window-manager library — drag/resize/focus is ~150 lines of pointer-event
  handling in [`ManagedWindow.tsx`](src/components/desktop/ManagedWindow.tsx)
- All content lives in [`src/content/`](src/content) as plain TypeScript — no CMS

## Run it

```bash
npm install
npm run dev
```

Concept inspired by [ishaangoel.in](https://ishaangoel.in).
