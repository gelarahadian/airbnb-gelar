/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiZ2VsYXJhaGFkaWFuIiwiYSI6ImNsZHdxZ3Y4ZzBhNzQzcXBrNGN5aWZ1MXgifQ.n9HKXanmhId7aTz2E6_c7Q',
  },
};

module.exports = nextConfig;
