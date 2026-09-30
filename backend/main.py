# The entire backend: a FastAPI app with one /health endpoint the frontend calls.
from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok", "message": "Backend is healthy"}
