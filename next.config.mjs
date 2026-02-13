import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
});

export default withNextra({
  // Force webpack mode for Nextra compatibility
  turbopack: {},
});
