const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production'
    ? '/YOUR_REPOSITORY_NAME'
    : '',
};

export default nextConfig;