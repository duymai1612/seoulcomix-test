const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // *INFO: React Strict Mode in React 18 will cause double rendering in Development
  reactStrictMode: false,
  experimental: {
    ...(isDev
      ? {
          turbo: {
            rules: {
              '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js'
              }
            }
          }
        }
      : {}),
    optimizePackageImports: [],
    missingSuspenseWithCSRBailout: false,

  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig
