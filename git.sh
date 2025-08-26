#!/bin/sh

git add .
git commit -m "Fix deploy"
git pull
git push -u origin main

# FRIST TIME
# echo "# juki-portfolio" >> README.md
# git init
# git add README.md
# git commit -m "first commit"
# git branch -M main
# git remote add origin https://github.com/juki-22/juki-portfolio.git
# git push -u origin main