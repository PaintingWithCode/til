CREATE TABLE `posts` (
	`id` text(8) PRIMARY KEY NOT NULL,
	`views` integer DEFAULT 1 NOT NULL,
	`likes` integer DEFAULT 1 NOT NULL CHECK(`likes` > 0),
	`created_at` text DEFAULT ((strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc'))),
	`updated_at` text DEFAULT ((strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')))
);
