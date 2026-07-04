import { MenuBar } from "@/components/desktop/MenuBar";
import { Dock } from "@/components/desktop/Dock";
import { Wallpaper } from "@/components/desktop/Wallpaper";
import { NotesApp } from "@/components/desktop/NotesApp";
import { LinkedInCard } from "@/components/desktop/LinkedInCard";
import { MessagesCard } from "@/components/desktop/MessagesCard";
import { ChatCard } from "@/components/desktop/ChatCard";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Wallpaper />
      <MenuBar activeApp="Notes" />

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-16 pb-28 sm:px-6">
        <section id="notes">
          <NotesApp />
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3" id="messages">
          <LinkedInCard />
          <MessagesCard />
          <div id="chat">
            <ChatCard />
          </div>
        </section>
      </main>

      <Dock />
    </div>
  );
}
