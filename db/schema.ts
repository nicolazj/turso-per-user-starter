import { text, integer, sqliteTable, real } from "drizzle-orm/sqlite-core";

export const workoutLog = sqliteTable("workout_logs", {
  id: integer("id", {
    mode: "number",
  }).primaryKey({ autoIncrement: true }),
  type: text("type").notNull(),
  weight: real("weight").notNull().default(0),
  reps: integer("reps").notNull().default(1),
  createdAt: integer("created_at").$defaultFn(() =>
    Math.floor(Date.now() / 1000)
  ),
});
