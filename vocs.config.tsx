import { defineConfig } from "vocs";

export default defineConfig({
  rootDir: "./",
  description: "Your onchain agent",
  banner: {
    dismissable: true,
    backgroundColor: "cyan",
    content: "Head to our new [Discord](https://discord.gg/PFHZa7KPPc)!",
    height: "38px",
    textColor: "white",
  },
  title: "NANI",
  baseUrl: "https://docs.nani.ooo",
  blogDir: "./pages/blog",
  editLink: {
    pattern: "https://github.com/NaniDAO/nocs/edit/main/:path",
    text: "Edit on GitHub",
  },
  iconUrl: "/favicon.svg",
  logoUrl: "/logo.svg",
  markdown: {
    code: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
  },
  font: {
    default: {
      google: "Inter",
    },
    mono: {
      google: "JetBrains Mono",
    },
  },
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
      text: "Account",
      link: "/docs/account",
    },
    {
      text: "Accounts",
      link: "/docs/accounts",
    },
    {
      text: "Create Account",
      link: "/docs/create-account",
    },
    {
      text: "DAO",
      link: "/docs/dao",
    },
    {
      text: "IE",
      link: "/docs/ie",
    },
    {
      text: "NEETH",
      link: "/docs/neeth",
    },
    {
      text: "Text Commands",
      link: "/docs/text-commands",
    },
    {
      text: "Token",
      link: "/docs/token",
    }
  ],
  socials: [
    {
      icon: "discord",
      link: "https://discord.gg/PFHZa7KPPc",
    },
    {
      icon: "github",
      link: "https://github.com/NaniDAO",
    },
    {
      icon: "telegram",
      link: "https://t.me/+NKbETPq0J9UyODk9",
    },
    {
      icon: "x",
      link: "https://x.com/nani__ooo",
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/nani",
    },
  ],
});
