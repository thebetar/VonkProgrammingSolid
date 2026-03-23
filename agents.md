# AGENTS.md — VonkProgramming (SolidJS)

## Stack

- **Frontend**: SolidJS 1.9, Solid Router, Solid Meta
- **Styling**: Tailwind CSS 4 with PostCSS, dark mode via `[data-theme="dark"]`
- **Build**: Vite 6 with gzip/brotli compression and terser minification
- **Backend**: PHP 8.2 with PDO/MySQL, Apache (Docker)
- **Lint**: ESLint 9 with `eslint-plugin-solid`
- **Path alias**: `@/` → `./src`

## Architecture Rules

### File Size & Splitting

- **Max ~120 lines per component file.** If a component exceeds this, extract sub-components.
- **One component per file.** No multiple component definitions in a single file.
- Split by feature into folders: `components/general/`, `components/blogs/`, `components/homepage/`, etc.
- Pages are thin wrappers — data lookup + `<Layout slot={template} />`. Keep logic in components.
- Data files live in `src/data/` and export named `const` arrays/objects. No default exports for data.

### No Deep Nesting

- **Max 2 levels of JSX nesting inside a return.** Extract deeper structures into their own component.
- Use early returns and guard clauses instead of nested `if/else`.
- Prefer ternaries for simple conditional rendering. Use SolidJS `<Show>` for complex conditional blocks.
- Avoid callback nesting beyond 2 levels — extract named functions.

### Component Conventions

- `export default function ComponentName({ prop1, prop2 }) {}` — always default export, always function declaration.
- Destructure props in the function signature with defaults where applicable: `({ short = false })`.
- Use `createSignal` for local state. Use `createEffect` with `onCleanup` for side effects.
- Render lists with `<For each={array}>{item => JSX}</For>` — never `.map()`.
- Props down, events up. Use callback props (`handleClose`) for child-to-parent communication.

### Naming

| Category            | Convention       | Example          |
| ------------------- | ---------------- | ---------------- |
| Component files     | PascalCase.jsx   | `BlogPost.jsx`   |
| Data files          | lowercase.jsx    | `blogs.jsx`      |
| Components          | PascalCase       | `ExperienceCard` |
| Functions/variables | camelCase        | `fetchBlogStats` |
| CSS classes         | lowercase-hyphen | `blog-post`      |

### Imports

- Always use the `@/` alias for imports from `src/`: `import Hero from '@/components/homepage/Hero'`.
- No relative imports like `../../`. Only exception: imports within the same folder.
- Group imports: solid-js primitives → third-party → `@/data` → `@/components` → local.

### Tailwind CSS

- Use array `.join(' ')` pattern for multi-line class lists.
- Conditional classes via ternary inside the array: `condition ? 'class' : ''`.
- Mobile-first responsive design with `md:`, `lg:` prefixes.
- Dark mode with `dark:` prefix (resolved via `data-theme` attribute).
- Custom theme colors: `dark` (#111111), `light` (#FFFFFF), `blue` (#33d2ff).

### Icons

- All SVG icons live in `src/components/Icons.jsx` as named exports.
- Icon components accept `{ width, height, color }` with defaults via `||`.
- Add new icons to `Icons.jsx` — do not inline SVGs in components.

## Data Patterns

- Blog/experience/project data: array of objects in `src/data/*.jsx`.
- Content field uses JSX, not strings.
- Featured subsets in separate `featured-*.jsx` files.
- Centralized config (name, socials, routes) in `src/data/info.jsx`.

## Routing

- All routes defined as a centralized array in `src/index.jsx`.
- Eager import for `HomePage`. Lazy import (`lazy(() => import(...))`) for all other pages.
- Dynamic routes use `:id` param. Catch-all `*` maps to `NotFoundPage`.

## SEO & Accessibility

- Every page sets `<Title>` and `<Meta>` via `@solidjs/meta`.
- Blog posts include Open Graph, Twitter Card, and JSON-LD structured data.
- Use semantic HTML: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`.
- All interactive elements must have `aria-label`.

## PHP Backend

- JSON API endpoints in `public/scripts/`.
- Input via `json_decode(file_get_contents('php://input'))`.
- Sanitize all input: `htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8')`.
- Validate emails with `filter_var($email, FILTER_VALIDATE_EMAIL)`.
- Database queries use PDO prepared statements with named bindings — no string interpolation in SQL.
- Return proper HTTP status codes. Set `Content-Type: application/json`.

## Quality Gates

- Run `pnpm lint` (ESLint with solid plugin) before every commit. Zero warnings allowed.
- Run `pnpm audit` to check for vulnerable dependencies. No high/critical vulnerabilities.
- `pnpm build` must succeed with no errors. Console statements are stripped by terser.
- Docker build (`docker compose up --build`) must complete without errors.

## Do Not

- Do not add `console.log` — terser strips them in production, but they clutter dev output.
- Do not use `.map()` for rendering lists — use `<For>`.
- Do not create `index.js` barrel files or re-export modules.
- Do not add TypeScript — this project uses JSX with jsconfig.json.
- Do not install new dependencies without explicit approval.
- Do not use inline styles — use Tailwind classes.
- Do not use `var` — use `const` by default, `let` only when reassignment is needed.
