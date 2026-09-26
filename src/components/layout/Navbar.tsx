"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 0, savedCount = 0 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b border-white/5
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#090a0d]/80 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-[#090a0d]"
        }
      `}
    >
      <div className="relative mx-auto flex h-[76px] max-w-[1280px] items-center px-4 sm:px-6 lg:px-8">
        {/* =========================
            LOGO - LEFT
        ========================== */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 text-xl font-black tracking-[-0.04em] text-white"
        >
          <img
            src="/images/logo.png"
            alt="FitLog"
            className="h-5 w-6 object-contain"
          />

          <span>
            FIT<span className="text-[#baff00]">LOG</span>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAV - CENTER
        ========================== */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {/* Workouts */}
          <Link
            href="/"
            className="rounded-full bg-[#18220b] px-6 py-2.5 text-sm font-bold text-[#baff00] transition hover:bg-[#202d0d]"
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        {/* =========================
            PLAN + SAVED
            MOBILE = CENTER
            DESKTOP = RIGHT
        ========================== */}
        <div
          className="
            absolute left-1/2
            flex -translate-x-1/2
            items-center gap-3
            sm:gap-5

            md:static
            md:ml-auto
            md:translate-x-0
          "
        >
          {/* Plan */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 sm:text-sm">
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#baff00] px-1.5 text-[10px] font-black text-black">
              {planCount}
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 sm:text-sm">
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 bg-[#15171c] px-1.5 text-[10px] font-black text-gray-400">
              {savedCount}
            </span>
          </div>
        </div>

        {/* =========================
            MOBILE HAMBURGER - RIGHT
        ========================== */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="
            absolute right-4
            flex h-10 w-10
            items-center justify-center
            rounded-lg
            border border-white/10
            bg-white/5
            transition
            hover:bg-white/10
            sm:right-6
            md:hidden
          "
        >
          <div className="space-y-1.5">
            {/* Top line */}
            <span
              className={`
                block h-0.5 w-5 bg-white
                transition-all duration-300
                ${mobileOpen ? "translate-y-2 rotate-45" : ""}
              `}
            />

            {/* Middle line */}
            <span
              className={`
                block h-0.5 w-5 bg-white
                transition-all duration-300
                ${mobileOpen ? "opacity-0" : ""}
              `}
            />

            {/* Bottom line */}
            <span
              className={`
                block h-0.5 w-5 bg-white
                transition-all duration-300
                ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`
          overflow-hidden
          border-t border-white/5
          bg-[#090a0d]/95
          backdrop-blur-xl
          transition-all duration-300
          md:hidden

          ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-2 px-4 py-4 sm:px-6">
          {/* Workouts */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="
              block rounded-lg
              bg-[#18220b]
              px-4 py-3
              text-sm font-bold
              text-[#baff00]
            "
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            onClick={() => setMobileOpen(false)}
            className="
              block rounded-lg
              px-4 py-3
              text-sm font-semibold
              text-gray-300
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}
