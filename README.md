<!-- Explains what this project is and how to run it, starting from zero. -->
# Self Hosting


| Part | What it is | Where it runs |
|---|---|---|
| **Frontend** | A React page (built with Vite) that says hello | http://localhost:5173 |
| **Backend** | A Python API (FastAPI) with one `/health` endpoint | http://localhost:8000 |
| **Database** | Postgres (not used yet — it's here for when we need it) | inside Docker only |

The frontend calls the backend's `/health` endpoint on page load, so if the page says
"Backend says: **Hello from the backend!**", everything is talking to everything.

## Step 1: Install Docker

Docker runs each part of the project in its own little box (a "container"), so nobody
has to install Python, Node, or Postgres by hand. You only install Docker once.

### Windows

1. Docker on Windows needs **WSL2** (a small Linux layer inside Windows). Open
   **PowerShell as Administrator** (right-click the Start button → "Terminal (Admin)")
   and run:
   ```
   wsl --install
   ```
   Then **restart your computer** when it asks.
2. Download **Docker Desktop** from https://www.docker.com/products/docker-desktop/
   and run the installer. When it asks, keep the **"Use WSL 2"** option checked.
3. Restart again if the installer asks, then open **Docker Desktop** from the Start
   menu. Wait until it says "Docker Desktop is running" (whale icon in the taskbar).

### macOS

1. Download **Docker Desktop** from https://www.docker.com/products/docker-desktop/
   — pick **Apple Silicon** if your Mac has an M1/M2/M3/M4 chip, otherwise **Intel**.
   (Not sure? Apple menu → "About This Mac".)
2. Open the downloaded `.dmg` and drag **Docker** into **Applications**.
3. Open **Docker** from Applications and wait until the whale icon appears in the
   menu bar and stops animating.

### Linux (Ubuntu/Debian)

1. Open a terminal and run Docker's install script:
   ```
   curl -fsSL https://get.docker.com | sh
   ```
2. Let yourself run Docker without typing `sudo` every time:
   ```
   sudo usermod -aG docker $USER
   ```
   Then **log out and back in** (or reboot) for that to take effect.

### Check it worked (all systems)

Open a terminal (on Windows, use the regular PowerShell or the WSL terminal) and run:

```
docker --version
```

If you see a version number, you're good.

## Step 2: Get this code

If you have git: `git clone <this repo's URL>` and `cd` into the folder.
Otherwise, download the ZIP from GitHub (green "Code" button → "Download ZIP"),
unzip it, and open a terminal in that folder.

## Step 3: Run everything

From this folder (the one containing `docker-compose.yml`), run:

```
docker compose up --build
```

The **first run downloads and builds a lot** — give it a few minutes. When the
scrolling text settles down, open:

- **http://localhost:5173** — you should see the hello page saying
  "Backend says: **Hello from the backend!**"
- **http://localhost:8000/health** — the backend's raw answer, for the curious.

To stop everything, press **Ctrl+C** in the terminal, then run:

```
docker compose down
```

## What's in each folder

```
docker-compose.yml   ← the one file that starts all three parts
backend/             ← Python FastAPI app (main.py is the whole thing)
frontend/            ← React app (start reading at src/App.jsx)
```

## Common problems

- **"Cannot connect to the Docker daemon"** — Docker Desktop isn't running.
  Open the Docker Desktop app and wait for the whale, then try again.
- **"port is already allocated"** — something else on your machine is using
  port 5173 or 8000. Close it, or ask in the club chat for help changing ports.
- **You changed code and don't see it** — frontend and backend code changes
  require a restart here: Ctrl+C, then `docker compose up --build` again.
