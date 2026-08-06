#!/usr/bin/env python3
import datetime
import os
import subprocess
import sys


def main() -> int:
    try:
        repo_root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'], text=True).strip()
    except subprocess.CalledProcessError:
        print('Error: unable to determine git repository root.', file=sys.stderr)
        return 1

    build_number_path = os.path.join(repo_root, 'ardublockly', 'build_number')
    timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M')

    try:
        with open(build_number_path, 'w', encoding='utf-8') as f:
            f.write(timestamp + '\n')
    except OSError as exc:
        print(f'Error: cannot write {build_number_path}: {exc}', file=sys.stderr)
        return 1

    try:
        subprocess.check_call(['git', 'add', build_number_path])
    except subprocess.CalledProcessError as exc:
        print(f'Error: failed to stage {build_number_path}: {exc}', file=sys.stderr)
        return 1

    return 0


if __name__ == '__main__':
    sys.exit(main())
