const { withGlobalCss } = require("next-global-css");

const withConfig = withGlobalCss();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withConfig(
  /* Next.js config options here */
  nextConfig
);
