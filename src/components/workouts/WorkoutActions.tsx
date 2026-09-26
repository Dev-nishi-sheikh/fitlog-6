"use client";

import type { Workout } from "@/types/workout";

import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const {
    isInPlan,
    isSaved,
    addToPlan,
    removeFromPlan,
    saveWorkout,
    removeSaved,
  } = useFitLog();

  const addedToPlan = isInPlan(workout.id);

  const saved = isSaved(workout.id);

  const handlePlanClick = () => {
    if (addedToPlan) {
      removeFromPlan(workout.id);
    } else {
      addToPlan(workout);
    }
  };

  const handleSaveClick = () => {
    if (saved) {
      removeSaved(workout.id);
    } else {
      saveWorkout(workout);
    }
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handlePlanClick}
        className={`
          rounded-md
          px-5
          py-3
          text-xs
          font-black
          transition
          ${
            addedToPlan
              ? "bg-[#18220b] text-[#baff00]"
              : "bg-[#baff00] text-black hover:bg-[#c8ff38]"
          }
        `}
      >
        {addedToPlan ? "✓ Added to today's plan" : "□ Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSaveClick}
        className={`
          rounded-md
          border
          px-5
          py-3
          text-xs
          font-semibold
          transition
          ${
            saved
              ? "border-[#baff00] bg-[#18220b] text-[#baff00]"
              : "border-white/10 bg-[#111319] text-white hover:bg-white/5"
          }
        `}
      >
        {saved ? "✓ Saved" : "♧ Save for later"}
      </button>
    </div>
  );
}
