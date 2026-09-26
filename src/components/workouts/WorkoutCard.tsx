import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="
        group
        block
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#15171e]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-[#181b22]
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/8] overflow-hidden bg-[#0f1116]">
        <img
          src={workout.image}
          alt={workout.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3.5">
        {/* Muscle groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="
                rounded-full
                bg-[#baff00]
                px-2.5
                py-1
                text-[9px]
                font-black
                uppercase
                tracking-wide
                text-black
              "
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3
          className="
            truncate
            text-sm
            font-black
            uppercase
            tracking-tight
            text-white
            transition-colors
            group-hover:text-[#baff00]
          "
        >
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 truncate text-[10px] text-[#8993a5]">
          {workout.equipment}
        </p>

        {/* Meta */}
        <div
          className="
            mt-3
            flex
            items-center
            gap-3
            border
            border-white/5
            bg-[#111319]
            px-2.5
            py-2
            text-[9px]
            text-[#a1aaba]
          "
        >
          <span className="flex items-center gap-1">
            <span className="text-[#c4ccd8]">◷</span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#c4ccd8]">●</span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="ml-auto flex items-center gap-1">
            <span className="text-[#c4ccd8]">☆</span>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}