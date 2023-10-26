import { defineConfig } from "astro/config";
import chooseTechIntegration from "@choose-tech/astro";

export default defineConfig({
  integrations: [
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
