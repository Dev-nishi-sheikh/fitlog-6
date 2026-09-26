"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];

  planCount: number;
  savedCount: number;

  doneIds: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (workoutId: number) => void;
  isInPlan: (workoutId: number) => boolean;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (workoutId: number) => void;
  isSaved: (workoutId: number) => boolean;

  markAsDone: (workoutId: number) => void;
  isDone: (workoutId: number) => boolean;

  toastMessage: string | null;
  showToast: (message: string) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const DONE_STORAGE_KEY = "fitlog-done";

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
      const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);
      const storedDone = localStorage.getItem(DONE_STORAGE_KEY);

      if (storedPlan) {
        const parsedPlan = JSON.parse(storedPlan);

        if (Array.isArray(parsedPlan)) {
          setPlan(parsedPlan);
        }
      }

      if (storedSaved) {
        const parsedSaved = JSON.parse(storedSaved);

        if (Array.isArray(parsedSaved)) {
          setSaved(parsedSaved);
        }
      }

      if (storedDone) {
        const parsedDone = JSON.parse(storedDone);

        if (Array.isArray(parsedDone)) {
          setDoneIds(parsedDone);
        }
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plan));
  }, [plan, isHydrated]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(saved));
  }, [saved, isHydrated]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem(DONE_STORAGE_KEY, JSON.stringify(doneIds));
  }, [doneIds, isHydrated]);

  const showToast = (message: string) => {
    setToastMessage(message);

    window.setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const addToPlan = (workout: Workout) => {
    setPlan((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });

    showToast(`${workout.name} added to today's plan`);
  };

  const removeFromPlan = (workoutId: number) => {
    const workout = plan.find((item) => item.id === workoutId);

    setPlan((current) => current.filter((item) => item.id !== workoutId));

    if (workout) {
      showToast(`${workout.name} removed from today's plan`);
    }
  };

  const isInPlan = (workoutId: number) =>
    plan.some((item) => item.id === workoutId);

  const saveWorkout = (workout: Workout) => {
    setSaved((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });

    showToast(`${workout.name} saved for later`);
  };

  const removeSaved = (workoutId: number) => {
    const workout = saved.find((item) => item.id === workoutId);

    setSaved((current) => current.filter((item) => item.id !== workoutId));

    if (workout) {
      showToast(`${workout.name} removed from saved`);
    }
  };

  const isSaved = (workoutId: number) =>
    saved.some((item) => item.id === workoutId);

  const markAsDone = (workoutId: number) => {
    setDoneIds((current) => {
      if (current.includes(workoutId)) {
        return current;
      }

      return [...current, workoutId];
    });

    showToast("Workout marked as done");
  };

  const isDone = (workoutId: number) => doneIds.includes(workoutId);

  const planCount = plan.length;
  const savedCount = saved.length;

  const value = useMemo(
    () => ({
      plan,
      saved,

      planCount,
      savedCount,

      doneIds,

      addToPlan,
      removeFromPlan,
      isInPlan,

      saveWorkout,
      removeSaved,
      isSaved,

      markAsDone,
      isDone,

      toastMessage,
      showToast,
    }),
    [plan, saved, planCount, savedCount, doneIds, toastMessage],
  );

  return (
    <FitLogContext.Provider value={value}>
      {children}

      {toastMessage && (
        <div
          className="
            fixed
            right-5
            top-24
            z-[9999]
            max-w-[320px]
            rounded-lg
            border
            border-[#baff00]/20
            bg-[#15171e]
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            shadow-2xl
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#baff00]
                text-xs
                font-black
                text-black
              "
            >
              ✓
            </span>

            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}
