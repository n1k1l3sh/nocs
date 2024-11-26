import { defineConfig } from "vocs";

export default defineConfig({
  rootDir: "./",
  description: "Your onchain agent",
  title: "NANI",
  sidebar: [
    {
      text: "Getting Started",
      link: "/docs/",
    },
    {
      text: "Contracts",
      link: "/docs/contracts",
    },
    {
      text: "Brand",
      link: "/brand",
    },
  ],
});
