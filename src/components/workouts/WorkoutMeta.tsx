import { Workout } from "@/types/workout";

interface WorkoutMetaProps {
  workout: Workout;
}

export default function WorkoutMeta({ workout }: WorkoutMetaProps) {
  return (
    <div
      className="
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
      <span>◷ {workout.duration} min</span>

      <span>● {workout.caloriesBurned} kcal</span>

      <span className="ml-auto">☆ {workout.rating}</span>
    </div>
  );
}
