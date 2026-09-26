import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#15171e]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#baff00]/5 blur-3xl" />

      <div className="relative grid md:grid-cols-[1fr_380px]">
        <div className="px-6 py-12 sm:px-10 md:px-12 md:py-16">
          <p className="mb-5 text-xs font-black tracking-[0.08em] text-[#baff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-[650px] text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-5xl">
            Train with intent.Log
            <br />
            every set.
          </h1>

          <p className="mt-6 max-w-[570px] text-sm leading-6 text-[#91a0b8] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#workouts"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-md bg-[#baff00] px-6 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#c8ff38]"
          >
            Browse Workouts
          </Link>
        </div>

        <div className="relative flex min-h-[260px] items-center justify-center px-6 pb-8 md:min-h-[360px] md:px-0 md:pb-0">
          <img
            src="/images/banner.png"
            alt="Workout Photo"
            className="
              h-[240px]
              w-[240px]
              object-contain

              sm:h-[280px]
              sm:w-[280px]

              md:h-[330px]
              md:w-[330px]
            "
          />
        </div>
      </div>
    </section>
  );
}
