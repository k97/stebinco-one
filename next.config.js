/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'k97static.s3.ap-southeast-2.amazonaws.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


module.exports = nextConfig
