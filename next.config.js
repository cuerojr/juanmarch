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
          hostname: "alitwotimes.com",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "a.storyblok.com",
          pathname: "**",
        }
      ],
    },
  };
  
  module.exports = nextConfig;