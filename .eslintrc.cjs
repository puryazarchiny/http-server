module.exports = {
  root: true,
  env: { es2016: true, node: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-restricted-imports": ["error", { patterns: ["@/features/*/*"] }],
  },
};
