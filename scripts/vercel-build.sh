#!/bin/bash

# Vercel build script
echo "Starting Vercel build process..."

# Build the web application
echo "Building web application..."
cd apps/web
pnpm run build

echo "Build completed successfully"
