const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "img.freepik.com",
      "media.istockphoto.com",
      "cdn.pixabay.com",
    ],
  },
};

module.exports = nextConfig;
