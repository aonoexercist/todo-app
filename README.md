# Todo App — Elysia + Bun

A small todo application built with the Elysia framework running on the Bun runtime.

## Prerequisites
- Bun (v1+): https://bun.sh/
- Node tools used in scripts may be invoked via `bunx` if needed (e.g. `bunx drizzle-kit`).

## Getting Started
Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open http://localhost:3000/ in your browser.

## Database / Migrations
This project uses Drizzle for schema/migrations. To push migrations in development:

```bash
bunx drizzle-kit push
```

## Project layout (key files)
- [src/index.ts](src/index.ts)
- [src/db/index.ts](src/db/index.ts)
- [src/db/schema.ts](src/db/schema.ts)
- [src/routes/todo.ts](src/routes/todo.ts)
- [src/models/todo.ts](src/models/todo.ts)
- [drizzle.config.ts](drizzle.config.ts)

## Notes
- Start with `bun run dev` for local development.
- Use `bunx drizzle-kit` for migration commands when needed.
- If you want me to add setup scripts, CI config, or contributor notes, tell me what to include.