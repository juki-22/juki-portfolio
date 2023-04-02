#!/bin/sh

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ju-jki/resume.git
git push -u origin main