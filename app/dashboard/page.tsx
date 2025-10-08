"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

import { isLoggedIn } from "../../utils/auth";
import AdminDashboard from "@/components/AdminDashboard";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <Navbar />
      < AdminDashboard/>
    </div>
  );
}
