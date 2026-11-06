import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Osus",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "development" && {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/Osus/en/",
          basePath: false,
          permanent: false,
        },
        { source: "/", destination: "/en/", permanent: false },
      ];
    },
  }),
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
