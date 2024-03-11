import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://raymundoycaza.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  markdown: {
    render: [
      '@astrojs/markdown-remark',
      {
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'nord',
          langs: ['js', 'html', 'css', 'astro'],
          wrap: false,
        },
      },
    ],
  },
});
