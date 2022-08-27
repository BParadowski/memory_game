set - e

npm run build

cd dist

git init
git checkout -B main
git add -A 
git commit -m "Deploy site"

git push -f git@github.com:BParadowski/memory_game.git main:gh-pages