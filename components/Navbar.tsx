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
    <nav className="bg-yellow-600 text-white flex justify-between items-center py-6 px-8">
      <h1 className="font-bold text-lg md:text-2xl">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-yellow-600 px-2 py-1 md:px-4 md:py-2 rounded hover:bg-gray-300 transition"
      >
        Logout
      </button>
    </nav>
  );
}
