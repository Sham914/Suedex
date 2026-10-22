/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  // Add hosts here when you switch product images to remote URLs.
  images: { remotePatterns: [] },
};
export default nextConfig;
