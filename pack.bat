cd %~dp0\PortableGit\cmd\
git gc --aggressive --prune
git lfs prune
cd %~dp0
python package\pack_ardublockly.py
pause