#!/usr/bin/env bash

mkdir -p dist/

openapi-generator generate \
                  -i open-api.yaml \
                  -g php-symfony \
                  --invoker-package 'Xvilo\\Track\\ApiServer' \
                  -o dist/ \
                  --git-host 'git@github.com:xvilo/TRACK-api-server.git' \
                  --git-user-id 'xvilo' \
                  --git-repo-id 'track-api-server' \
                  --additional-properties 'phpLegacySupport=false,variableNamingConvention=camelCase'
