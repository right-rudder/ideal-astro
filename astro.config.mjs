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
  integrations: [
    mdx(),
    sitemap({
      customPages: [
        "https://idealaviationstl.com/ideal-aviation-quick-start-guide.pdf",
      ],
    }),
    react(),
    tailwind(),
    partytown(),
  ],
  redirects: {
    "/advanced_training": "/first-time-pilots#programs",
    "/pilot-programs": "/first-time-pilots#programs",
    "/our-courses": "/first-time-pilots#programs",
    "/instrument-rating": "/programs/instrument-rating",
    "/multi-engine-rating": "/programs/multi-engine-rating",
    "/helicopter-pilot-training": "/programs/helicopter-pilot-training",
    "/private-pilot-training": "/programs/private-pilot",
    "/commercial-certificate": "/programs/commercial-pilot",
    "/our-team": "/about/our-team",
    "/contact-us": "/contact",
    "/visit-ideal-aviation": "/contact",
    "/about-ideal-aviation": "/about/our-story",
    "/certified-flight-instructor": "/programs/cfi",
    "/airplane-pilot-training": "/programs/private-pilot",
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
