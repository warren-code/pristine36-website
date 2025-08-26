#!/bin/bash

# Build the Next.js app
npm run build

# Create out directory
rm -rf out
mkdir -p out

# Copy HTML files
cp -r .next/server/app/* out/

# Copy static assets
mkdir -p out/_next
cp -r .next/static out/_next/

# Copy public files
if [ -d "public" ]; then
  cp -r public/* out/ 2>/dev/null || true
fi

# Rename index.html for root route
if [ -f "out/index.html" ]; then
  echo "Static site built successfully in 'out' directory"
else
  echo "Warning: index.html not found"
fi
