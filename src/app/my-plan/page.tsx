"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";
type ActiveTab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    planCount,
    savedCount,
    removeFromPlan,
    removeSaved,
    markAsDone,
    isDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  useEffect(() => {
    const updateTab = () => {
      const params = new URLSearchParams(window.location.search);

      const tab = params.get("tab");

      if (tab === "saved") {
        setActiveTab("saved");
      } else {
        setActiveTab("plan");
      }
    };

    updateTab();

    window.addEventListener("popstate", updateTab);

    return () => {
      window.removeEventListener("popstate", updateTab);
    };
  }, []);

  const activeWorkouts = useMemo(() => {
    const data = activeTab === "saved" ? saved : plan;

    return [...data].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return a.rating - b.rating;
      }

      return 0;
    });
  }, [activeTab, plan, saved, sortBy]);

  const stats = useMemo(() => {
    const data = activeTab === "saved" ? saved : plan;

    return {
      exercises: data.length,

      minutes: data.reduce((total, workout) => total + workout.duration, 0),

      calories: data.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
      ),
    };
  }, [activeTab, plan, saved]);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);

    if (tab === "saved") {
      window.history.pushState({}, "", "/my-plan?tab=saved");
    } else {
      window.history.pushState({}, "", "/my-plan");
    }
  };

  const handleRemove = (workoutId: number) => {
    if (activeTab === "saved") {
      removeSaved(workoutId);
    } else {
      removeFromPlan(workoutId);
    }
  };

  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-20 pt-[105px] sm:px-6 lg:px-8">
        <section>
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
            {activeTab === "saved" ? "SAVED" : "MY PLAN"}
          </h1>

          <p className="mt-3 text-sm text-[#91a0b8]">
            {activeTab === "saved"
              ? "Your saved workouts. Keep them here for later."
              : "Cap of five lifts for today. Finish them, then load more."}
          </p>
        </section>

        <section
          className="
            mt-9
            grid
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#15171e]
            sm:grid-cols-3
          "
        >
          {/* Exercises */}

          <div className="border-b border-white/10 px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[9px] font-medium uppercase text-[#69748a]">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#baff00]">
              {stats.exercises}
            </p>
          </div>

          {/* Minutes */}

          <div className="border-b border-white/10 px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[9px] font-medium uppercase text-[#69748a]">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {stats.minutes}
            </p>
          </div>

          {/* Calories */}

          <div className="px-5 py-6">
            <p className="text-[9px] font-medium uppercase text-[#69748a]">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {stats.calories}
            </p>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}

          <div
            className="
              inline-flex
              w-fit
              rounded-lg
              border
              border-white/10
              bg-[#101217]
              p-1
            "
          >
            {/* Today's Plan */}

            <button
              type="button"
              onClick={() => handleTabChange("plan")}
              className={`
                rounded-md
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                ${
                  activeTab === "plan"
                    ? "bg-[#1c2029] text-white"
                    : "text-[#7d8799] hover:text-white"
                }
              `}
            >
              Today's Plan
            </button>

            {/* Saved */}

            <button
              type="button"
              onClick={() => handleTabChange("saved")}
              className={`
                rounded-md
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                ${
                  activeTab === "saved"
                    ? "bg-[#1c2029] text-white"
                    : "text-[#7d8799] hover:text-white"
                }
              `}
            >
              Saved
            </button>
          </div>

          {/* Sort */}

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#69748a]">Sort By</span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className="
                rounded-lg
                border
                border-white/10
                bg-[#15171e]
                px-3
                py-2.5
                text-xs
                font-medium
                text-white
                outline-none
              "
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </section>

        <section className="mt-5 space-y-3">
          {/* Empty State  */}

          {activeWorkouts.length === 0 && (
            <div
              className="
                flex
                min-h-[250px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-white/10
                bg-[#0f1116]
                px-6
                text-center
              "
            >
              <p className="text-sm font-black uppercase text-white">
                {activeTab === "saved"
                  ? "Nothing saved yet"
                  : "Nothing here yet"}
              </p>

              <p className="mt-2 max-w-sm text-xs leading-5 text-[#69748a]">
                {activeTab === "saved"
                  ? "Save workouts from the workout details page and they will appear here."
                  : "Browse the workout library and add exercises to today's plan."}
              </p>

              <Link
                href="/"
                className="
                  mt-5
                  rounded-md
                  bg-[#baff00]
                  px-5
                  py-2.5
                  text-xs
                  font-black
                  text-black
                  transition
                  hover:bg-[#c8ff38]
                "
              >
                Browse workouts
              </Link>
            </div>
          )}

          {activeWorkouts.map((workout) => {
            const done = isDone(workout.id);

            return (
              <article
                key={workout.id}
                className="
                  flex
                  flex-col
                  gap-4
                  rounded-xl
                  border
                  border-white/10
                  bg-[#15171e]
                  p-3
                  transition
                  hover:border-white/15
                  sm:flex-row
                  sm:items-center
                "
              >
                <Link
                  href={`/workouts/${workout.id}`}
                  className="
                    block
                    h-[100px]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-[#0f1116]
                    sm:h-[82px]
                    sm:w-[130px]
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
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="
                      block
                      truncate
                      text-sm
                      font-black
                      uppercase
                      text-white
                      transition
                      hover:text-[#baff00]
                    "
                  >
                    {workout.name}
                  </Link>

                  <p className="mt-1 text-[10px] text-[#7f899c]">
                    {workout.equipment}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#a1aaba]">
                    <span>◷ {workout.duration} min</span>

                    <span>🔥 {workout.caloriesBurned} kcal</span>

                    <span className="text-[#baff00]">★ {workout.rating}</span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {/* VIEW DETAILS */}

                  <Link
                    href={`/workouts/${workout.id}`}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2.5
                      text-[10px]
                      font-semibold
                      text-white
                      transition
                      hover:border-white/20
                      hover:bg-white/5
                    "
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => markAsDone(workout.id)}
                      disabled={done}
                      className={`
                        rounded-full
                        px-4
                        py-2.5
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

                  <button
                    type="button"
                    onClick={() => handleRemove(workout.id)}
                    aria-label={`Remove ${workout.name}`}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      text-[#69748a]
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    ×
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
