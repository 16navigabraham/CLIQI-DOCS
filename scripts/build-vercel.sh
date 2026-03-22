#!/bin/bash
set -e

# 1. Build Next.js static export
npx next build

# 2. Generate pagefind search index
npx pagefind --site out --output-path out/_pagefind

# 3. Create Vercel Build Output API v3 structure
mkdir -p .vercel/output/static
cp -r out/* .vercel/output/static/

# 4. Create routing config
cat > .vercel/output/config.json << 'EOF'
{
  "version": 3,
  "routes": [
    {
      "src": "/_pagefind/(.*)",
      "headers": {
        "Cache-Control": "public, max-age=3600, s-maxage=86400"
      },
      "continue": true
    },
    { "handle": "filesystem" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ]
}
EOF

echo "Build complete — Vercel Build Output API v3 ready"
