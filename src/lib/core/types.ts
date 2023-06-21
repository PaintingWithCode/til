import type { SvelteComponent, SvelteComponentTyped } from 'svelte';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomComponent = typeof SvelteComponentTyped<any, any, any>;
