const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "img.freepik.com",
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
