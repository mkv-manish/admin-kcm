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
    <nav className="bg-yellow-600 text-white flex justify-between items-center p-4">
      <h1 className="font-bold text-lg">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-yellow-600 px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        Logout
      </button>
    </nav>
  );
}
