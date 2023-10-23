import { defineConfig } from "astro/config";
import chooseTechIntegration from "@choose-tech/astro";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // TODO: move to integration
  srcDir: ".",
  integrations: [
    tailwind(),
    chooseTechIntegration({
      base: "/template",
      title: "Template",
      description: "",
      color: "#3b82f6",
      repo: "choose-tech/template",
      logoFilename: "logo.svg",
    }),
  ],
});
