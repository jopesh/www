// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import shikiDark from "./src/styles/shiki-dark.json";
import shikiLight from "./src/styles/shiki-light.json";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: shikiLight,
          dark: shikiDark,
        },
      },
    }),
    sitemap(),
  ],
  vite: { plugins: [tailwindcss()] },
});
