import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import WorkoutActions from "@/components/workouts/WorkoutActions";
import { getWorkout } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workoutId = Number(id);

  if (Number.isNaN(workoutId)) {
    notFound();
  }

  let workout;

  try {
    workout = await getWorkout(workoutId);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <Navbar planCount={0} savedCount={0} />

      <div className="mx-auto max-w-[1280px] px-4 pb-20 pt-[100px] sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/"
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            text-xs
            font-semibold
            text-[#8993a5]
            transition
            hover:text-white
          "
        >
          ← Back to workouts
        </Link>

        {/* Main Details */}
        <section
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#101217]
          "
        >
          <div
            className="
              grid
              gap-0
              lg:grid-cols-[1fr_1fr]
            "
          >
            {/* LEFT - IMAGE */}
            <div
              className="
                relative
                min-h-[380px]
                overflow-hidden
                bg-[#111319]
                sm:min-h-[500px]
                lg:min-h-[650px]
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

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Title */}
              <h1
                className="
                  text-3xl
                  font-black
                  uppercase
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                "
              >
                {workout.name}
              </h1>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#8f99aa]
                "
              >
                {workout.description}
              </p>

              {/* Muscle groups */}
              <div className="mt-5 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="
                      rounded-full
                      bg-[#baff00]
                      px-3
                      py-1
                      text-[10px]
                      font-black
                      uppercase
                      text-black
                    "
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#161920]
                "
              >
                <DetailRow label="Equipment" value={workout.equipment} />

                <DetailRow label="Difficulty" value={workout.difficulty} />

                <DetailRow label="Sets" value={String(workout.sets)} />

                <DetailRow label="Reps" value={workout.reps} />

                <DetailRow label="Duration" value={`${workout.duration} min`} />

                <DetailRow
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />

                <DetailRow label="Rating" value={String(workout.rating)} last />
              </div>

              {/* Instructions */}
              <div className="mt-7">
                <h2
                  className="
                    text-sm
                    font-black
                    uppercase
                    tracking-wide
                    text-white
                  "
                >
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="
                          flex
                          gap-3
                          text-xs
                          leading-5
                          text-[#a0a9b8]
                        "
                    >
                      <span className="font-bold text-[#777f8e]">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Actions */}
              <WorkoutActions workoutId={workout.id} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

interface DetailRowProps {
  label: string;
  value: string;
  last?: boolean;
}

function DetailRow({ label, value, last = false }: DetailRowProps) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        gap-4
        px-4
        py-3
        text-xs
        ${!last ? "border-b border-white/5" : ""}
      `}
    >
      <span className="font-bold uppercase tracking-wide text-[#747d8d]">
        {label}
      </span>

      <span className="text-right font-semibold text-[#d8dde5]">{value}</span>
    </div>
  );
}
