import WorkoutActions from "@/components/workouts/WorkoutActions";
import Link from "next/link";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          pb-20
          pt-[100px]
          sm:px-6
          lg:px-8
        "
      >
        <Link
          href="/"
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-400
            transition
            hover:text-[#baff00]
          "
        >
          ← Back to workouts
        </Link>

        <section
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_1fr]
            lg:items-start
          "
        >
          {/* //Image  */}
          <div
            className="
              relative
              h-[520px]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#15171e]
              sm:h-[600px]
              lg:h-[650px]
            "
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-transparent
              "
            />
          </div>

          <div>
            <h1
              className="
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-[-0.04em]
                text-white
                sm:text-5xl
              "
            >
              {workout.name}
            </h1>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[#91a0b8]
              "
            >
              {workout.description}
            </p>

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

            <div
              className="
                mt-6
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-[#15171e]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Sets
                </span>

                <span className="text-sm text-gray-200">{workout.sets}</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Reps
                </span>

                <span className="text-sm text-gray-200">{workout.reps}</span>
              </div>

              {/* Duration*/}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating*/}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  py-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    text-gray-500
                  "
                >
                  Rating
                </span>

                <span className="text-sm text-[#baff00]">
                  ★ {workout.rating}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h2
                className="
                  text-xl
                  font-black
                  uppercase
                  text-white
                "
              >
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={`${workout.id}-${index}`}
                    className="
                        flex
                        gap-3
                        text-sm
                        leading-6
                        text-gray-400
                      "
                  >
                    <span
                      className="
                          shrink-0
                          font-bold
                          text-[#baff00]
                        "
                    >
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ?Action Buttons  */}

            <WorkoutActions workout={workout} />
          </div>
        </section>
      </div>
    </main>
  );
}
