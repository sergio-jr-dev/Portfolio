import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const withProtocol = (url) => {
  if (!url) return undefined;
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
};

const site = withProtocol(
  process.env.PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL,
);

// https://astro.build/config
export default defineConfig({
  site,
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
