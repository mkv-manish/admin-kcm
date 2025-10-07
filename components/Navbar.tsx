"use client";

import { useRouter } from "next/navigation";
import { logout } from "../utils/auth";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-yellow-700  flex justify-between items-center py-6 px-8">
      <div className="flex items-center gap-3">
        <img src="/kcm-logo.png" alt="KCM Logo" className="h-22 w-auto md:h-20  object-contain" />
      </div>
      <button
        onClick={handleLogout}
          className="px-6 py-4 bg-gradient-to-r from-gray-600 via-yellow-800 to-gray-600 text-emerald-50 rounded-lg font-semibold hover:from-yellow-950 hover:to-blue-900 transition-shadow shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </nav>
  );
}
