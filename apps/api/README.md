# 📦 Backend -- Studio API

This directory contains the Go backend for the Studio website.

The API is responsible for: - Exposing HTTP endpoints - Managing
database access (PostgreSQL) - Handling business logic related to blog
posts, authentication, etc.

The backend runs inside Docker and supports hot-reload via Air for
development.

------------------------------------------------------------------------

## 🏗 Architecture Overview

The backend follows a simple layered structure:

    apps/api/
      cmd/api/        # Application entrypoint
      internal/
        config/       # Environment configuration
        server/       # HTTP server + router setup
        handlers/     # HTTP handlers (controllers)
        storage/      # Database access layer
        domain/       # Domain models

### Design Principles

- `main.go` only bootstraps dependencies
- Handlers handle HTTP only
- Storage handles DB interaction
- No over-engineering (kept intentionally simple)

------------------------------------------------------------------------

## 🚀 Running the Backend (Development)

From the project root:

``` bash
docker compose up --build db api
```

The API will be available at:

    http://localhost:8080

Health check endpoint:

    GET /health

If everything works correctly, it should return:

    ok

------------------------------------------------------------------------

## 🔄 Hot Reload (Air)

The backend uses **Air** for hot-reload inside Docker.

Any change to `.go` files automatically triggers a rebuild and restart.

If hot reload does not trigger: - Ensure Docker is running with WSL2
backend - Ensure file polling is enabled in `.air.toml`

------------------------------------------------------------------------

## 🗄 Database

The backend uses PostgreSQL.

The database runs in a Docker container defined in `docker-compose.yml`.

Connection string (development):

    postgresql://studio:studio@db:5432/studio?sslmode=disable

The `db` hostname refers to the Docker service name.

------------------------------------------------------------------------

## 🔐 Environment Variables

Environment variables are defined in the root `.env` file.

Required variables:

``` env
API_PORT=8080
DATABASE_URL=postgresql://studio:studio@db:5432/studio?sslmode=disable
```

------------------------------------------------------------------------

## 📦 Go Module

Module path:

    github.com/PtiCadri/studio/apps/api

All internal imports must start with:

    github.com/PtiCadri/studio/apps/api/internal/...

------------------------------------------------------------------------

## 🧪 Useful Commands

Rebuild containers:

``` bash
docker compose down
docker compose up --build db api
```

Run only API logs:

``` bash
docker compose logs -f api
```

Enter API container:

```bash
docker exec -it apps-api-1 sh
```

------------------------------------------------------------------------

## 📌 Notes for Contributors

- Do not put business logic inside `main.go`
- Keep handlers small and focused
- Database access must go through the storage layer
- Keep files reasonably small and readable
- Favor clarity over abstraction
