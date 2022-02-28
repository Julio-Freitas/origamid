/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.amcnetworks.com",
      "vignette.wikia.nocookie.net",
      "s-i.huffpost.com",
      "media1.popsugar-assets.com",
      "media1.popsugar-assets.com",
      "res.cloudinary.com",
      "i.pinimg.com",
      "static.wikia.nocookie.net",
      "m.media-amazon.com",
      "*",
    ],
  },
};

module.exports = nextConfig;
