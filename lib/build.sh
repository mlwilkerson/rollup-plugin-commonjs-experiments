#!/bin/bash
if [ ! -d dist ]; then
  mkdir dist
fi
rollup -c rollup.cjs.js && rollup -c rollup.es.js && cp package.json dist
cp src/index.d.ts dist
