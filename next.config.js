/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/HomePage",
        permanent: false,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = "inline-source-map";
    }
    return config;
  },
};

module.exports = nextConfig;
