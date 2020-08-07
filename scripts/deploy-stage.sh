#!/bin/bash
set -e

APP_NAME=stage

DOMAIN=`echo $TRAVIS_BRANCH | tr '[:punct:]' '-'`

rsync -e "ssh -p 1022" -r -v dist/* root@hack.bg:/var/www/html/$APP_NAME/$DOMAIN

URL=$DOMAIN.$APP_NAME.hack.bg
echo "Deployed to $URL"
curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
  -d "{\"body\": \"Deployed to [$URL](https://$URL), [bundle report](https://$URL/report.html)\"}" \
  "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/commits/${TRAVIS_COMMIT}/comments"
