import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    preact({
      compat: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["framer-motion"],
    },
  },
});
