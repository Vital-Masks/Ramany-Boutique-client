/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images:{
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
