/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 'ftp.goit.study' }] },
  compress: true,
  env: {
    API_BASE_URL: 'https://tasty-treats-backend.p.goit.global/api'
  },
  compiler: {
    removeConsole: true
  }
}

module.exports = nextConfig
