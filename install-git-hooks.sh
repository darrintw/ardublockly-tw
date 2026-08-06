#!/bin/sh
set -e
cd "$(dirname "$0")"
command -v git >/dev/null 2>&1 || {
  echo "Error: git not found in PATH." >&2
  exit 1
}
chmod +x .githooks/pre-commit .githooks/pre-commit.py 2>/dev/null || true
git config core.hooksPath .githooks
printf 'Installed repo hooks path: .githooks\n'
