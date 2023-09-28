/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
