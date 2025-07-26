/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    HF_TOKEN: process.env.HF_TOKEN,
  },
};

export default nextConfig;
