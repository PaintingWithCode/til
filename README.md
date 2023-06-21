# Today I Learned
A miniblog that catalogues the things I learn day-to-day in software development. 

Inspired by the TIL blogs of [Hashrocket](https://til.hashrocket.com/) and [Simon Willison](https://til.simonwillison.net/) and to "learn in public" by [swyx](https://www.swyx.io/learn-in-public).

## Stack
- **Framework**: [Sveltekit](https://kit.svelte.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Database**: [Turso](https://turso.tech)
- **Serverless Functions**: [Cloudflare Workers](https://workers.cloudflare.com)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)


## Running locally

```bash
# Setup
pnpm i
pnpm db:setup

pnpm dev
```

## Shell Commands
- To scaffold a new post:
  ```bash
  pnpm scaffold-post
  ```

- To seed post stats to database:
  ```bash
  pnpm db:seed-stats
  ```
  **Note**: If you're using a local db, this must be done after publishing a post since stats are only updated by the API and never inserted. Production database is automatically updated by CI on pushes to main.

- To migrate database schema changes:
  ```bash
  pnpm db:migrate
  ```

## Cloning / Forking
Please review the [license](https://github.com/PaintingWithCode/til/blob/main/LICENSE.txt) and ensure you change the personal information in `src/lib/core/config.ts` before deploying. 

You're free to retain the posts since it's meant to be knowledge that's shared :)

