import { Workout } from "@/types/workout";

const API_URL = process.env.FITLOG_API_URL;

if (!API_URL) {
  throw new Error("FITLOG_API_URL is not defined");
}

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(id: number): Promise<Workout> {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
}