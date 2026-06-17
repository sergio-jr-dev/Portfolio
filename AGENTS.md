# Repository Guidelines

## Project Structure & Module Organization

This is an Astro portfolio site. Route files live in `src/pages/`; the main page is `src/pages/index.astro`, and `src/pages/robots.txt.ts` generates robots metadata. Shared UI belongs in `src/components/`; page chrome and SEO setup live in `src/layouts/Layout.astro`. Global Tailwind CSS and theme tokens are in `src/styles/global.css`.

Source-managed assets go in `src/assets/` so Astro can optimize imports with `astro:assets`. Static files served as-is, such as `public/favicon.png` and background images under `public/images/`, belong in `public/`. Build output in `dist/` and dependency folders should not be edited directly.

## Build, Test, and Development Commands

Use `pnpm`, matching `pnpm-lock.yaml` and `pnpm-workspace.yaml`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the Astro development server.
- `pnpm build`: run `astro check` and create the production build in `dist/`.
- `pnpm preview`: preview the built site locally.
- `pnpm astro -- check`: run Astro type and content checks without building.

## Coding Style & Naming Conventions

Use Astro components with PascalCase filenames, for example `HeaderLink.astro` and `TechnologyPill.astro`. Prefer the configured `@/*` import alias for source imports. Keep component-local data close to the component unless it becomes shared.

Formatting is handled by Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Follow existing conventions: two-space indentation in markup, Tailwind utilities, semantic HTML, and descriptive accessibility labels.

## Testing Guidelines

There is no dedicated test framework configured yet. Treat `pnpm build` as the required verification step because it includes `astro check`. For UI changes, also run `pnpm dev` and inspect light/dark themes, responsive layouts, links, image loading, and SEO metadata.

If tests are added later, place them near the feature or in a clear `tests/` directory, use `*.test.ts` or `*.spec.ts`, and document the new command here.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commits, such as `feat: update About highlights` and `refactor: restructure project cards`. Keep messages in English, imperative, and scoped to one logical change.

Pull requests should include a short summary, verification steps such as `pnpm build`, linked issues when applicable, and screenshots or screen recordings for visual changes. Note environment assumptions, especially `PUBLIC_SITE_URL` or Vercel-derived URLs used for canonical and social metadata.

## Agent-Specific Instructions

Keep changes focused on source files. Do not rewrite generated output, lockfiles, or unrelated assets unless the task requires it. Preserve Spanish-facing site copy unless the request explicitly asks for copy changes.
