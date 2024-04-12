import { createRemixStub } from "@remix-run/testing";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "app/assets/styles/global.scss";
import "destyle.css";
import React from "react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: "60abf0",
      values: [
        {
          name: "60abf0",
          value: "#60abf0",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const remixStub = createRemixStub([
        {
          path: "/*",
          action: () => ({ redirect: "/" }),
          loader: () => ({ redirect: "/" }),
          Component: () => Story(),
        },
      ]);

      return remixStub({ initialEntries: ["/"] });
    },
  ],
};

export default preview;
