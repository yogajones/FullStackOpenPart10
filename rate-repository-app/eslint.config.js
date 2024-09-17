import reactPlugin from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactNativePlugin from "eslint-plugin-react-native";
import eslintRecommended from "eslint/use-at-your-own-risk";

export default [
  eslintRecommended.configs.recommended,
  reactRecommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        requireConfigFile: false,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        "react-native/react-native": true,
      },
    },
  },
];
