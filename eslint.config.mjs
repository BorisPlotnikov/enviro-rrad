//eslint.config.mjs

import { defineConfig, globalIgnores } from "eslint/config";
import jsRecommended from "eslint/conf/eslint-recommended.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooksRecommended from "eslint-plugin-react-hooks/configs/recommended.js";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...jsRecommended,
  ...reactRecommended,
  ...reactHooksRecommended,
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // custom overrides here
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
