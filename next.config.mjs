/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.snl.no",
        port: "",
      },
    ],
  },
};

export default nextConfig;
