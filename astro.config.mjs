import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth(), react()],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
});
