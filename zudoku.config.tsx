import type { ZudokuConfig } from "zudoku";
import { GithubIcon } from "zudoku/icons";
import { Button } from "zudoku/ui/Button";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.png", dark: "/logo-dark.png" },
      alt: "Envlink",
      width: "130px",
    },
  },
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
