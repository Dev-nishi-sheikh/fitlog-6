import type { Workout } from "@/types/workout";

import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

export default function WorkoutGrid({ workouts }: WorkoutGridProps) {
  return (
    <div
      id="workouts"
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
