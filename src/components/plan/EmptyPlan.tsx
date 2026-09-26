"use client";

import Link from "next/link";

interface EmptyPlanProps {
  type?: "plan" | "saved";
}

export default function EmptyPlan({
  type = "plan",
}: EmptyPlanProps) {
  const isSaved = type === "saved";

  return (
    <div
      className="
        flex
        min-h-[260px]
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-dashed
        border-white/10
        bg-[#0d0f13]
        px-6
        text-center
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#15171e]
          text-xl
        "
      >
        {isSaved ? "☆" : "✓"}
      </div>

      <h3
        className="
          mt-4
          text-sm
          font-black
          uppercase
          tracking-wide
          text-white
        "
      >
        {isSaved ? "Nothing saved yet" : "Nothing here yet"}
      </h3>

      <p
        className="
          mt-2
          max-w-sm
          text-xs
          leading-5
          text-[#7f899b]
        "
      >
        {isSaved
          ? "Save workouts from the library and they will appear here."
          : "Browse the library and add a workout to your plan."}
      </p>

      <Link
        href="/"
        className="
          mt-5
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#baff00]
          px-5
          py-2
          text-[10px]
          font-black
          uppercase
          tracking-wide
          text-black
          transition
          hover:bg-[#c8ff38]
        "
      >
        Go to workouts
      </Link>
    </div>
  );
}