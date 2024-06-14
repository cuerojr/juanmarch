/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
      // fe_api_url: process.env.apiUrl,
    },
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "placehold.co",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "storyblok.com",
          pathname: "**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;