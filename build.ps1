Remove-Item ./* -Exclude @("build.ps1", "CNAME")

Push-Location ../lcdk/dashboard

npm run demo:build

Pop-Location

Copy-Item ../lcdk/dashboard/demo/dist/* .
Copy-Item index.html 404.html
