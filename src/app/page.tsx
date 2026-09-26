import HeroBanner from "@/components/home/HeroBanner";
import Navbar from "@/components/layout/Navbar";
import WorkoutGrid from "@/components/workouts/WorkoutGrid";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <Navbar />
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
        <HeroBanner />

        {/* Workout Library */}
        <section id="workouts" className="pt-16">
          <div className="mb-7">
            <h2
              className="
                mt-2
                text-3xl
                font-black
                uppercase
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              The Library
            </h2>

            <p className="mt-2 text-sm text-[#7f899b]">
              Choose a workout and build your training plan.
            </p>
          </div>

          <WorkoutGrid workouts={workouts} />
        </section>
      </div>
    </main>
  );
}
