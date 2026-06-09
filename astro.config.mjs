import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Onest",
      cssVariable: "--font-onest",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/Onest.woff2"],
          },
        ],
      },
    },
  ],
});
