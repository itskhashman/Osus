const nextConfig = {
  trailingSlash: true,
  basePath: '/Osus',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Osus/',
        permanent: false,
        basePath: false,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;