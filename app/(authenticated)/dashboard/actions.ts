"use server";

import { revalidatePath } from "next/cache";
import * as schema from "@/db/schema";
import { getDatabaseClient } from "@/app/utils";
import { eq } from "drizzle-orm";

export type WorkoutItem = {
  id: number;
  type: string;
  weight: number;
  reps: number;
};

export const addWorkout = async (formData: FormData) => {
  const client = await getDatabaseClient();

  const type = formData.get("type") as string;
  const weight = formData.get("weight") as string;
  const reps = formData.get("reps") as string;

  if (!client) return null;

  await client.insert(schema.workoutLog).values({
    type,
    weight: parseFloat(weight),
    reps: parseInt(reps, 10),
  });

  revalidatePath("/dashboard");
};

export const removeWorkout = async (id: number) => {
  const client = await getDatabaseClient();

  if (!client) return null;

  await client.delete(schema.workoutLog).where(eq(schema.workoutLog.id, id));

  revalidatePath("/dashboard");
};
