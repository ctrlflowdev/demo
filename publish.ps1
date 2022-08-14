Remove-Item ./* -Exclude @("publish.ps1", "CNAME")

Push-Location ../ctrlflow/dashboard

npm run demo:build

Pop-Location

Copy-Item ../ctrlflow/dashboard/demo/dist/* .
Copy-Item index.html 404.html

git add -A

git commit -m "publish"

git push
