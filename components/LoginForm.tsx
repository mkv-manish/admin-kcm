"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../utils/auth";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const res = login(email, password);
      setLoading(false);
      if (res.success) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-yellow-50 to-yellow-200 px-2 sm:px-4">
      <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg border border-yellow-100">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="bg-yellow-100 rounded-full p-3 sm:p-4 mb-2 shadow">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-700 mb-1 text-center tracking-tight">Admin Login</h2>
          <p className="text-gray-500 text-xs sm:text-sm text-center">Sign in to your admin account</p>
        </div>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-3 py-2 mb-3 sm:px-4 sm:py-2 sm:mb-4 flex items-center gap-2 animate-shake">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm sm:text-base" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="Enter your Email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full text-gray-800 border border-yellow-200 px-3 py-3 sm:px-4 sm:py-4 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition outline-none bg-yellow-50 placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm sm:text-base" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter Password..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full text-gray-800 border border-yellow-200 px-3 py-3 sm:px-4 sm:py-4 rounded-lg focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition outline-none bg-yellow-50 placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold shadow hover:from-yellow-600 hover:to-yellow-700 transition disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base`}
          >
            {loading && (
              <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 sm:mt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </div>
      </div>
    </div>
  );
}
