import type { ZudokuConfig } from "zudoku";
import { GithubIcon } from "zudoku/icons";
import { Button } from "zudoku/ui/Button";

const config: ZudokuConfig = {
  site: {
    title: "Envlink Docs",
    logo: {
      src: { light: "/logo-light.png", dark: "/logo-dark.png" },
      alt: "Envlink",
      width: "130px",
    },
    showPoweredBy: false,
  },
  search: {
    type: "pagefind",
    maxSubResults: 5,
    ranking: {
      termFrequency: 0.8,
      pageLength: 0.6,
      termSimilarity: 1.2,
      termSaturation: 1.2,
    },
  },
  metadata: {
    title: "Envlink Docs",
    description: "Documentation for Envlink",
    keywords: ["envlink", "documentation", "api"],
    logo: "/logo-light.png",
    creator: "Tamam Huda",
    defaultTitle: "Envlink Docs",
    favicon: "/favicon.ico",
    publisher: "Tamam Huda",
    authors: ["Tamam Huda"],
    applicationName: "Envlink Docs",
  },
  port: 5000,
  sitemap: {
    siteUrl: "https://docs.envlink.com",
    autoLastmod: true,
    changefreq: "weekly",
    priority: 0.8,
  },
  // syntaxHighlighting: {
  //   languages: ["javascript", "typescript", "json", "yaml"],
  //   themes: {
  //     dark: "monokai",
  //     light: "github-dark",
  //   },
  // },
  canonicalUrlOrigin: "https://docs.envlink.com",
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/api-introduction",
            "/demo",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "New",
                color: "purple",
              },
              label: "API Reference",
              to: "/api",
            },
          ],
        },
        {
          type: "category",
          label: "Api Overview",
          collapsible: true,
          icon: "book",
          items: [
            "/account",
            "/analytics",
            "/authentication",
            "/billing-address",
            "/channels",
            "/health",
            "/oauth",
            "/payment-methods",
            "/public-payment-methods",
            "/public-subscriptions-plans",
            "/public-urls",
            "/sessions",
            "/subscriptions",
            "/transactions",
            "/urls",
            "/user",
            "/webhooks",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/contact",
      label: "Contact",
    },
  ],
  redirects: [{ from: "/", to: "/api-introduction" }],
  apis: [
    {
      options: {
        expandApiInformation: true,
      },
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
  slots: {
    "head-navigation-end": () => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/tamamhuda/envlink-docs" target="_blank">
            <GithubIcon className="w-4 h-4" />
          </a>
        </Button>
      </div>
    ),
  },
};

export default config;
