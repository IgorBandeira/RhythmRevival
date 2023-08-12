import { HomeIcon } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-red-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-red-900 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Linkin Park
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Audioslave
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Radiohead
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Nirvana
        </a>
      </nav>
      <img src="/RhythmRevival.png" alt="RythmRevival" />
    </aside>
  );
}
