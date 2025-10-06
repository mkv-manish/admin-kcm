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
      <h1 className="font-bold text-gray-900 text-lg md:text-3xl">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-gray-700 font-bold text-gray-400 px-2 py-1 md:px-4 md:py-2 rounded hover:bg-gray-900 transition"
      >
        Logout
      </button>
    </nav>
  );
}
