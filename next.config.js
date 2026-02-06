// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },
// //   images: {
// //     unoptimized: true,
// //   },
// // }

// // export default nextConfig
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export", 
//   images: {
//     unoptimized: true, 
//   },
// };

// export default nextConfig;
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
