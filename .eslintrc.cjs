module.exports = {
  // ...
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },

  extends: [
    // ...
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "plugin:solid/typescript"
    // "eslint:recommended"
  ],
  plugins: ["unused-imports", "solid"],
  rules: {
    "unused-imports/no-unused-imports": "warn"
  },
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "solid/prefer-for": 0
        // semi: ["error", "always"]
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}
