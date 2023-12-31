cd dist
git init
git add ./*
git commit -m "Upload source code"
git branch -M website
git remote set-url origin https://github.com/gvbvdxx/ggm2.git
git push -f origin website