import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export function MobileNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuIcon(!isMenuIcon);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsMenuIcon(true);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-950 p-2 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#">
          <img src="/favicon.png" alt="RythmRevival" className="h-8 w-8 mr-2" />
        </a>
        <h2 className="text-white text-xl">
          <a href="#">Rhythm Revival</a>
        </h2>
      </div>
      <button className="rounded-full bg-black/40 p-1" onClick={toggleSidebar}>
        {isMenuIcon ? <Menu size={24} /> : <X size={24} />}
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0" onClick={closeSidebar}>
          <Sidebar />
        </div>
      )}
    </div>
  );
}
