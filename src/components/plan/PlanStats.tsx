interface PlanStatsProps {
  exerciseCount: number;
  minutes: number;
  calories: number;
}

export default function PlanStats({
  exerciseCount,
  minutes,
  calories,
}: PlanStatsProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#15171e]
        sm:grid-cols-3
      "
    >
      {/* Exercises */}
      <div
        className="
          px-5
          py-5
          sm:px-6
          sm:py-6
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-[#71809a]
          "
        >
          Exercises
        </p>

        <p
          className="
            mt-2
            text-3xl
            font-black
            leading-none
            text-[#baff00]
          "
        >
          {exerciseCount}
        </p>
      </div>

      {/* Minutes */}
      <div
        className="
          border-t
          border-white/5
          px-5
          py-5
          sm:border-l
          sm:border-t-0
          sm:px-6
          sm:py-6
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-[#71809a]
          "
        >
          Minutes
        </p>

        <p
          className="
            mt-2
            text-3xl
            font-black
            leading-none
            text-white
          "
        >
          {minutes}
        </p>
      </div>

      {/* Calories */}
      <div
        className="
          border-t
          border-white/5
          px-5
          py-5
          sm:border-l
          sm:border-t-0
          sm:px-6
          sm:py-6
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-[#71809a]
          "
        >
          Calories
        </p>

        <p
          className="
            mt-2
            text-3xl
            font-black
            leading-none
            text-white
          "
        >
          {calories}
        </p>
      </div>
    </div>
  );
}
