import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://idealaviationstl.com/",
  integrations: [mdx(), sitemap(), react(), tailwind(), partytown()],
  redirects: {},
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
