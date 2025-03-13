const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ["assets.vercel.com", "cdn.sanity.io"],
  },
});
