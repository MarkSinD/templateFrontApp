const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry",
      "corejs": "3.26.1"
    }
  ],
  '@babel/typescript',
  ["@babel/preset-react", {
    "runtime": "automatic"
  }]
]

module.exports = {
  presets: presets,
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id"]
    }
  }
}