CREATE TABLE `posts` (
	`id` text(8) PRIMARY KEY NOT NULL,
	`views` integer,
	`likes` integer,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
