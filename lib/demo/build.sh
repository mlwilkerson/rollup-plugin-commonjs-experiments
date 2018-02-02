#!/bin/bash
mkdir -p node_modules/rpcjs-demo
cp ../dist/* node_modules/rpcjs-demo
../node_modules/.bin/tsc --outDir out-tsc-commonjs -m commonjs main.ts
