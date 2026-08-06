#!/bin/sh
set -e
cd "$(dirname "$0")"

if ! command -v git >/dev/null 2>&1; then
  echo "Error: git not found in PATH." >&2
  exit 1
fi

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "master" ]; then
  echo "Error: current branch is $current_branch, must be master." >&2
  exit 1
fi

git push origin master

if command -v py >/dev/null 2>&1; then
  py .githooks/post-push.py
elif command -v python >/dev/null 2>&1; then
  python .githooks/post-push.py
else
  echo "Error: no Python interpreter found. Install Python or use the py launcher." >&2
  exit 1
fi

echo "Push and gh-pages sync completed."
