import { github, createSocialLinks, createAlgolia } from "./setting.js";

export default {
  base: "/your-github-repository-name/",
  srcDir: "src",
  cacheDir: "src/cache",
  outDir: "dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/your-github-repository-name/copy_your_icon_under_src_public_folder",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
  ],
  lastUpdated: true,
  useWebFonts: false,
  cleanUrls: true,
  title: "Your docs title",
  description: "Your docs description",
  // lang: "zh-CN",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    outline: "deep",
    docFooter: { prev: "Prev", next: "Next" },
    lastUpdatedText: "Last update time",
    editLink: {
      pattern: `${github}/blob/main/src/:path`,
      text: "Edit this page on GitHub",
    },
    footer: {
      message: `Welcome <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> let's get more people to discover!`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">Apache-2.0 License </a> | COPYRIGHT © 2023-${new Date().getFullYear()}`,
    },
    socialLinks: createSocialLinks(),
    algolia: createAlgolia(),

    nav: createNav(),
    sidebar: {
      // EHR
      "/docs/ehr": createYourColumnSidebar(),
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 5872,
    },
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },
};

/**
 * @description navbar
 */
function createNav() {
  return [
    {
      text: "🔥 Your Nav",
      items: [
        {
          items: [
            {
              text: "🕌 New nav item",
              link: "/docs/your_docs/index.md",
              activeMatch: "/docs/your_docs",
            },
          ],
        },
      ],
    },
  ];
}

/**
 * @description Your sidebar
 */
function createYourColumnSidebar() {
  return [
    {
      text: "Your Column Siderbar",
      collapsed: false,
      items: [{ text: "📚 Roadmap", link: "/docs/your_docs/index" }],
    },
  ];
}
