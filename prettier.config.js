/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tailwindStylesheet: "./src/index.css",
  plugins: [
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
    "prettier-plugin-tailwindcss",
  ],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
};

export default config;
