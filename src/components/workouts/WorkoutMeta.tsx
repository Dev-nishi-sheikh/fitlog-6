import type { Workout } from "@/types/workout";

interface WorkoutMetaProps {
  workout: Workout;
}

export default function WorkoutMeta({ workout }: WorkoutMetaProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#15171e]
      "
    >
      <MetaRow label="Equipment" value={workout.equipment} />

      <MetaRow label="Difficulty" value={workout.difficulty} />

      <MetaRow label="Sets" value={String(workout.sets)} />

      <MetaRow label="Reps" value={workout.reps} />

      <MetaRow label="Duration" value={`${workout.duration} min`} />

      <MetaRow label="Calories" value={`${workout.caloriesBurned} kcal`} />

      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-[10px] font-bold uppercase text-gray-500">
          Rating
        </span>

        <span className="text-sm text-[#baff00]">★ {workout.rating}</span>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
      <span className="text-[10px] font-bold uppercase text-gray-500">
        {label}
      </span>

      <span className="text-sm text-gray-200">{value}</span>
    </div>
  );
}
