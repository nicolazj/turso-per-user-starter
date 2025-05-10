CREATE TABLE `workout_logs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`weight` real DEFAULT 0 NOT NULL,
	`reps` integer DEFAULT 1 NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
DROP TABLE `todos`;