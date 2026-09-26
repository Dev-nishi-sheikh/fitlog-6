"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { planCount, savedCount } = useFitLog();

  const pathname = usePathname();

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

  //Active Page

  const isWorkoutPage = pathname === "/" || pathname.startsWith("/workouts");

  const isPlanPage = pathname === "/my-plan";

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/5
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#090a0d]/80 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-[#090a0d]"
        }
      `}
    >
      {/* Main Nav Bar  */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[76px]
          max-w-[1280px]
          items-center
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo  */}
        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            text-xl
            font-black
            tracking-[-0.04em]
            text-white
          "
        >
          <img
            src="/images/logo.png"
            alt="FitLog"
            className="
              h-7
              w-7
              shrink-0
              object-contain
            "
          />

          <span className="whitespace-nowrap">
            FIT<span className="text-[#baff00]">LOG</span>
          </span>
        </Link>
        {/* Desktop Center Nav */}
        <nav
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-2
            md:flex
          "
        >

          {/* WorkOuts  */}

          <Link
            href="/"
            className={`
              rounded-full
              px-6
              py-2.5
              text-sm
              transition-all
              duration-200
              ${
                isWorkoutPage
                  ? `
                    bg-[#18220b]
                    font-bold
                    text-[#baff00]
                  `
                  : `
                    font-semibold
                    text-gray-400
                    hover:bg-white/5
                    hover:text-white
                  `
              }
            `}
          >
            Workouts
          </Link>

          {/* My Plan */}

          <Link
            href="/my-plan"
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              transition-all
              duration-200
              ${
                isPlanPage
                  ? `
                    bg-[#18220b]
                    font-bold
                    text-[#baff00]
                  `
                  : `
                    font-semibold
                    text-gray-400
                    hover:bg-white/5
                    hover:text-white
                  `
              }
            `}
          >
            My Plan
          </Link>
        </nav>
        <div
          className="
            absolute
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-4
            sm:gap-5

            md:static
            md:ml-auto
            md:translate-x-0
          "
        >

          <Link
            href="/my-plan"
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-gray-300
              transition
              hover:text-white
              sm:text-sm
            "
          >
            <span>Plan</span>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-[#baff00]
                px-1.5
                text-[10px]
                font-black
                text-black
              "
            >
              {planCount}
            </span>
          </Link>


          <Link
            href="/my-plan?tab=saved"
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-gray-300
              transition
              hover:text-white
              sm:text-sm
            "
          >
            <span>Saved</span>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#15171c]
                px-1.5
                text-[10px]
                font-black
                text-gray-400
              "
            >
              {savedCount}
            </span>
          </Link>
        </div>
        {/* 2 Line Icons  */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="
            absolute
            right-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            transition
            hover:bg-white/10
            sm:right-6
            md:hidden
          "
        >
          <div className="space-y-1.5">

            <span
              className={`
                block
                h-0.5
                w-5
                bg-white
                transition-all
                duration-300
                ${mobileOpen ? "translate-y-2 rotate-45" : ""}
              `}
            />


            <span
              className={`
                block
                h-0.5
                w-5
                bg-white
                transition-all
                duration-300
                ${mobileOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                block
                h-0.5
                w-5
                bg-white
                transition-all
                duration-300
                ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </div>

      {/* /Mobile Manu  */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/5
          bg-[#090a0d]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:hidden
          ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            space-y-2
            px-4
            py-4
            sm:px-6
          "
        >
          {/* Mobile WorkOuts  */}

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`
              block
              rounded-lg
              px-4
              py-3
              text-sm
              transition
              ${
                isWorkoutPage
                  ? `
                    bg-[#18220b]
                    font-bold
                    text-[#baff00]
                  `
                  : `
                    font-semibold
                    text-gray-300
                    hover:bg-white/5
                    hover:text-white
                  `
              }
            `}
          >
            Workouts
          </Link>

          {/* mb-My Plan*/}

          <Link
            href="/my-plan"
            onClick={() => setMobileOpen(false)}
            className={`
              block
              rounded-lg
              px-4
              py-3
              text-sm
              transition
              ${
                isPlanPage
                  ? `
                    bg-[#18220b]
                    font-bold
                    text-[#baff00]
                  `
                  : `
                    font-semibold
                    text-gray-300
                    hover:bg-white/5
                    hover:text-white
                  `
              }
            `}
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}
