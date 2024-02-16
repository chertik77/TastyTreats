/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: { remotePatterns: [{ hostname: 'ftp.goit.study' }] }
}

module.exports = nextConfig
