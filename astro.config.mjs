import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://new-ui.com/templates/journal",
  trailingSlash: "never",

  experimental: {
    session: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],

  output: "static",
  adapter: netlify(),
});