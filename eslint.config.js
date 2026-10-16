import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // TypeScript lint configurations
      tseslint.configs.stylisticTypeChecked,
      // tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        projectService: {
          allowDefaultProject: ["vite.config.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
