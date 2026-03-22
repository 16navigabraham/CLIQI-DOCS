import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/',
})

export default withNextra({
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/_pagefind/:path*',
          destination: '/_next/static/chunks/_pagefind/:path*',
        },
      ],
    }
  },
})
