import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://raymundoycaza.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon(),
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
