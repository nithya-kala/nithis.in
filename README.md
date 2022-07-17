# Personal Website+Blog [[nithis.in](https://nithis.in)]

Built with [Mantine + Next template](https://github.com/mantinedev/mantine-next-template/) using
1. React.js
2. Next.js
3. Notion API ([notion js sdk](https://github.com/makenotion/notion-sdk-js))
4. [Storybook](https://storybook.js.org/)
4. [Mantine UI](https://mantine.dev/) 
5. [Mantine components](https://ui.mantine.dev/) and
6. [Cloudflare pages](https://pages.cloudflare.com/) for hosting

## Features

Both the website and blog is generated using `next export` as a SSG (Static Site Generation) and gets auto deployed in [Cloudflare pages](https://pages.cloudflare.com/) with automatic SSL. 

Publishing flow is

1. For static pages like [home](https://nithis.in) and [about](https://nithis.in/about), pushing changes to `main` will trigger auto-deployment via cloudflare bot
2. For dynamic pages like [articls](https://nithis.in/blogs),
    - Create or update blog post in Notion.so    
    - Use external images for cover image
    - Test locally with `yarn run dev`
    - Login to cloudflare to re-trigger deployment

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
