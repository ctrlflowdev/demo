Push-Location $PSScriptRoot

Remove-Item ./* -Exclude @("publish.ps1", "CNAME")

Push-Location ../ctrlflow/packages/dashboard

pnpm demo:build

Pop-Location

Copy-Item ../ctrlflow/packages/dashboard/demo/dist/* .
Copy-Item index.html 404.html

git add -A

git commit -m "publish"

git push

Pop-Location
