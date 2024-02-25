/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [{ hostname: 'ftp.goit.study' }],
    deviceSizes: [375, 768, 1280]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}

export default nextConfig
