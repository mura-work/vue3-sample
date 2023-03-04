import { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: ["@storybook/addon-controls"],
};

export default config;

// const path = require('path');
// module.exports = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": {
//     "name": "@storybook/vue3-vite",
//     "options": {}
//   },
//   "docs": {
//     "autodocs": "tag"
//   }
// }
