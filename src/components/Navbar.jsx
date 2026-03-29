import { Search, Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-8 py-4 text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#A7F3D0] cursor-pointer">
          CineVerse
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm text-[#A7F3D0]">
          <span className="hover:text-white cursor-pointer">Movies</span>
          <span className="hover:text-white cursor-pointer">TV Shows</span>
          <span className="hover:text-white cursor-pointer">People</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer" size={20} />
          <Bell className="cursor-pointer" size={20} />

          {/* Profile */}
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold cursor-pointer">
            K
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
