// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeFootnotes from "./src/plugins/rehype-footnotes.ts";
import shikiDark from "./src/styles/shiki-dark.json" with { type: "json" };
import shikiLight from "./src/styles/shiki-light.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
  site: "https://johnschmidt.de",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    mdx({
      rehypePlugins: [rehypeFootnotes],
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
