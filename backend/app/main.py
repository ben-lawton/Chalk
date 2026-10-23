"""Chalk app factory: minimal WP0 version (health + static mount). WP5 replaces it with the full API."""

import os

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.models import Health


def create_app(db_path: str | None = None, static_dir: str | None = None) -> FastAPI:
    """Build the FastAPI app. `db_path` is unused until WP5 adds storage."""
    static_dir = static_dir if static_dir is not None else os.environ.get("CHALK_STATIC_DIR", "/app/static")
    app = FastAPI(title="Chalk", version="0.1.0")

    @app.get("/api/health", response_model=Health)
    def health() -> Health:
        return Health(status="ok")

    if static_dir and os.path.isdir(static_dir):
        app.mount("/", StaticFiles(directory=static_dir, html=True), name="spa")
    return app


app = create_app()
