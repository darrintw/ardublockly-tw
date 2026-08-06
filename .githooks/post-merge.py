#!/usr/bin/env python3
import os
import shutil
import subprocess
import sys

SOURCE_DIRS = [
    'ardublockly',
    'blockly',
    'blocls',
    'closure-library',
    'examples',
    'docs',
]


def run(cmd, cwd=None, capture_output=False):
    result = subprocess.run(cmd, cwd=cwd, shell=False, text=True,
                            capture_output=capture_output)
    if result.returncode != 0:
        print(f'Error running: {cmd}', file=sys.stderr)
        if capture_output:
            print(result.stdout, file=sys.stderr)
            print(result.stderr, file=sys.stderr)
        sys.exit(result.returncode)
    return result


def copy_tree(src, dst):
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)


def main() -> int:
    repo_root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'], text=True).strip()
    os.chdir(repo_root)

    current_branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD'], text=True).strip()
    if current_branch != 'master':
        return 0

    print('Updating gh-pages from master for directories:', ', '.join(SOURCE_DIRS))

    # Ensure gh-pages branch exists.
    branches = subprocess.check_output(['git', 'branch', '--list', 'gh-pages'], text=True).strip()
    if not branches:
        print('Error: gh-pages branch does not exist.', file=sys.stderr)
        return 1

    # Work tree state: stash changes if needed.
    has_changes = subprocess.check_output(['git', 'status', '--porcelain'], text=True).strip()
    if has_changes:
        print('Stashing local changes before switching branches...')
        run(['git', 'stash', '--include-untracked'])
        stashed = True
    else:
        stashed = False

    try:
        run(['git', 'checkout', 'gh-pages'])

        for path in SOURCE_DIRS:
            src = os.path.join(repo_root, path)
            if not os.path.exists(src):
                print(f'Warning: source path does not exist: {src}', file=sys.stderr)
                continue
            dst = os.path.join(repo_root, path)
            copy_tree(src, dst)

        run(['git', 'add'] + SOURCE_DIRS)

        changed = subprocess.check_output(['git', 'status', '--porcelain'], text=True).strip()
        if changed:
            run(['git', 'commit', '-m', 'Update gh-pages content from master'])
            print('Committed updates to gh-pages.')
        else:
            print('No changes to commit on gh-pages.')

        run(['git', 'checkout', 'master'])

        if stashed:
            print('Restoring stashed changes...')
            run(['git', 'stash', 'pop'])

    except Exception as exc:
        print(f'Error: {exc}', file=sys.stderr)
        print('Attempting to return to master branch...', file=sys.stderr)
        run(['git', 'checkout', 'master'])
        if stashed:
            run(['git', 'stash', 'pop'])
        return 1

    return 0


if __name__ == '__main__':
    sys.exit(main())
