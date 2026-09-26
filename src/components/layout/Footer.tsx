import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0d0f13]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/images/logo.png"
              alt="FitLog"
              className="h-3 w-4 object-contain"
            />

            <span className="text-[11px] font-black tracking-[-0.03em] text-white">
              FIT<span className="text-[#baff00]">LOG</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-right text-[9px] font-medium text-[#626b7b]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}
