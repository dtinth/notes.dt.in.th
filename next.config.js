/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/20201003T154758Z3667",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
