import type { SvelteComponent } from 'svelte';

type PostMetadata = {
	id: string;
	title: string;
	date: string;
	topic: string;
	slug: string;
	tags?: string[];
	isPublished: boolean;
};

export type Post = {
	default: SvelteComponent;
	metadata: PostMetadata;
};

export type CustomComponent = typeof SvelteComponent;
