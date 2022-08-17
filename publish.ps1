Push-Location $PSScriptRoot

Remove-Item ./docs/* -Exclude @("CNAME")

Push-Location ../ctrlflow/packages/dashboard

pnpm demo:build

Pop-Location

Copy-Item ../ctrlflow/packages/dashboard/demo/dist/* ./docs
Copy-Item ./docs/index.html ./docs/404.html

git add -A

git commit -m "publish"

git push

Pop-Location
