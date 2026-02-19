# 🎨 Frontend -- Studio Web App

This directory contains the Next.js frontend for the Studio website.

The frontend is responsible for: - Rendering public pages (home,
presentations, references, shop, contact) - Handling client-side
interactions - Communicating with the Go backend API - Managing UI using
Material UI (MUI)

The frontend runs inside Docker and is part of the full-stack
environment defined in the root `docker-compose.yml`.

------------------------------------------------------------------------

## 🏗 Architecture Overview

The frontend uses:

- **Next.js (App Router)**
- **TypeScript**
- **Material UI (MUI)**
- **Emotion (SSR-compatible setup)**
- **Docker (development environment)**

Project structure:

    apps/web/
      src/
        app/              # Next.js routes (App Router)
          (pages)/        # Route grouping
          api/            # (optional) Next route handlers
          layout.tsx      # Root layout
        components/       # Reusable UI components
        hooks/            # Custom React hooks
        theme/            # MUI theme + Emotion SSR setup
        types/            # Shared TypeScript types
      public/             # Static assets

------------------------------------------------------------------------

## 🚀 Running the Frontend (Development)

From the project root:

``` bash
make up
```

Or, if you only want to run the frontend:

``` bash
make up-web
```

The application will be available at:

    http://localhost:3000

------------------------------------------------------------------------

## 🔗 Backend Connection

The frontend communicates with the backend API using:

    NEXT_PUBLIC_API_URL

Defined in the root `.env` file:

``` env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

------------------------------------------------------------------------

## 🎨 UI Setup (Material UI)

The app uses MUI with proper SSR integration for Next.js App Router.

Theme setup:

    src/theme/
      createEmotionCache.ts
      ThemeRegistry.tsx
      theme.ts

- `ThemeRegistry` ensures Emotion styles are injected consistently
- Prevents hydration mismatches
- Wraps the app inside `layout.tsx`

------------------------------------------------------------------------

## 📦 Important Decisions

- App Router is used instead of Pages Router
- React Compiler is disabled (project stability \> experimental
    features)
- Tailwind is not used (MUI is the chosen UI system)
- `src/` directory is used for clean project structure
- Default import alias `@/*` is preserved

------------------------------------------------------------------------

## 🧪 Useful Commands

Restart frontend container:

``` bash
make restart-web
```

View frontend logs:

``` bash
make logs-web
```

Access web container:

``` bash
make enter-web
```

------------------------------------------------------------------------

## 📌 Development Guidelines

- Keep pages inside `app/(pages)/` minimal and focused on layout
- Move reusable UI into `components/`
- API calls should live inside a `services/` layer (to be added)
- Keep components small and readable
- Prefer clarity over premature optimization
