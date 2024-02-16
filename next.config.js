/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  env: { API_BASE_URL: 'https://tasty-treats-backend.p.goit.global/api' },
  images: { remotePatterns: [{ hostname: 'ftp.goit.study' }] }
}

module.exports = nextConfig
