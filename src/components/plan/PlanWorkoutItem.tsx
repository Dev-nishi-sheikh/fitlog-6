"use client";

import Link from "next/link";

import { Workout } from "@/types/workout";

interface PlanWorkoutItemProps {
  workout: Workout;
  type: "plan" | "saved";
  onRemove: (id: number) => void;
  onDone?: (id: number) => void;
  done?: boolean;
}

export default function PlanWorkoutItem({
  workout,
  type,
  onRemove,
  onDone,
  done = false,
}: PlanWorkoutItemProps) {
  return (
    <div
      className={`
        group
        flex
        flex-col
        gap-4
        rounded-xl
        border
        border-white/10
        bg-[#15171e]
        p-3
        transition
        sm:flex-row
        sm:items-center
        sm:p-4
        ${done ? "opacity-60" : ""}
      `}
    >

      <div
        className="
          h-28
          w-full
          shrink-0
          overflow-hidden
          rounded-lg
          bg-[#0f1116]
          sm:h-16
          sm:w-28
        "
      >
        <img
          src={workout.image}
          alt={workout.name}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* Info */}

      <div className="min-w-0 flex-1">
        <Link
          href={`/workouts/${workout.id}`}
          className="
            block
            truncate
            text-sm
            font-black
            uppercase
            tracking-tight
            text-white
            transition
            hover:text-[#baff00]
          "
        >
          {workout.name}
        </Link>

        <p
          className="
            mt-1
            truncate
            text-[10px]
            text-[#7f899b]
          "
        >
          {workout.equipment}
        </p>

        <div
          className="
            mt-2
            flex
            flex-wrap
            items-center
            gap-3
            text-[9px]
            text-[#a1aaba]
          "
        >
          <span className="flex items-center gap-1">
            <span className="text-[#baff00]">◷</span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#ff7b32]">♨</span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#baff00]">★</span>
            {workout.rating}
          </span>
        </div>
      </div>

      <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          gap-2
          sm:justify-end
        "
      >

        <Link
          href={`/workouts/${workout.id}`}
          className="
            inline-flex
            h-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            px-4
            text-[10px]
            font-semibold
            text-gray-300
            transition
            hover:border-white/20
            hover:text-white
          "
        >
          View Details
        </Link>

        {type === "plan" && onDone && (
          <button
            type="button"
            onClick={() => onDone(workout.id)}
            disabled={done}
            className={`
              inline-flex
              h-9
              items-center
              justify-center
              rounded-full
              px-4
              text-[10px]
              font-black
              transition
              ${
                done
                  ? "cursor-default bg-[#18220b] text-[#baff00]"
                  : "bg-[#baff00] text-black hover:bg-[#c8ff38]"
              }
            `}
          >
            {done ? "✓ Done" : "✓ Mark as Done"}
          </button>
        )}

        {/*Remove*/}

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          aria-label={`Remove ${workout.name}`}
          className="
            inline-flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            text-lg
            text-[#738096]
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          ×
        </button>
      </div>
    </div>
  );
}
