#!/bin/bash
git add .
git commit -m "Updated: $1"
git push
npm version patch -m "Upgrade to %s due to $1"
npm publish