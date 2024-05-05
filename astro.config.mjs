import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
