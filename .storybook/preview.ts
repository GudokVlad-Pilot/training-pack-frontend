import type { Preview } from '@storybook/nextjs-vite'
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Renderer } from "storybook/internal/types";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    withThemeByDataAttribute<Renderer>({
      themes: {
        light: "light",
        dark: "dark",
        forest: "forest",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;