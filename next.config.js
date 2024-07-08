/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {
  env: {
    // fe_api_url: process.env.apiUrl,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
        protocol: "https",
        hostname: "alitwotimes.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
        pathname: "**",
      }
    ],
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'Content-Security-Policy',
        value: cspHeader.replace(/\n/g, ''),
      }, ],
    }, ]
  },
};

module.exports = nextConfig;