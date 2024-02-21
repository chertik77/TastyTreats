/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: { remotePatterns: [{ hostname: 'ftp.goit.study' }] },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}

module.exports = nextConfig
