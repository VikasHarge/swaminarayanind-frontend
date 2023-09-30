module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "no-use-before-define": "off",
    radix: "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "padded-blocks": "off",
    "arrow-body-style": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "import/order": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "react/no-typos": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "react/no-array-index-key": "warn",
    "react/forbid-prop-types": "warn",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "no-shadow": "warn",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "import/no-cycle": "off",
    "no-case-declarations": "off",
    "global-require": "off",
    "react/no-unused-prop-types": "warn",
    "no-nested-ternary": "off",
    "no-param-reassign": "warn",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
    "prefer-rest-params": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/display-name": 1,
    "no-console": [
      "warn",
      {
        allow: ["error", "warn", "info"],
      },
    ],
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "max-len": [
      "warn",
      {
        code: 200,
        ignoreStrings: true,
      },
    ],
    "@next/next/no-img-element": "off",
    "import/no-anonymous-default-export": "off",
  },
};
