"use client";

interface WorkoutActionsProps {
  workoutId: number;
}

export default function WorkoutActions({
  workoutId,
}: WorkoutActionsProps) {
  const handleAddToPlan = () => {
    console.log("Add workout to plan:", workoutId);
  };

  const handleSave = () => {
    console.log("Save workout:", workoutId);
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        className="
          inline-flex
          h-11
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-[#baff00]
          px-5
          text-xs
          font-black
          text-black
          transition
          hover:bg-[#c8ff38]
        "
      >
        {/* Plus icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>

        Add to today's plan
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={handleSave}
        className="
          inline-flex
          h-11
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-white/10
          bg-[#111319]
          px-5
          text-xs
          font-bold
          text-gray-300
          transition
          hover:bg-white/5
          hover:text-white
        "
      >
        {/* Bookmark icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z" />
        </svg>

        Save for later
      </button>
    </div>
  );
}