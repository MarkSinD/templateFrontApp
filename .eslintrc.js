const plugin = [
    "prettier",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import"
  ];

const rules = {
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off"
}

const extendsCommon = [
  "eslint:recommended",
  "plugin:react/recommended",
]

const extendsTypescript = [
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/recommended-requiring-type-checking"
]

const env = {
  browser: true,
  es6: true,
  es2017: true,
  jest: true,
  node: true
}

module.exports = {
  // .js / .jsx uses babel-eslint
  parser: "@babel/eslint-parser",
  root: true,
  env: env,
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: extendsCommon,
  rules: rules,
  overrides: [
    {
      // .ts / .tsx uses babel-eslint
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      env: env,
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [...extendsCommon, ...extendsTypescript],
      plugins: plugin,
      rules: rules,
    },
  ],
}