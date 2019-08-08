module.exports ={
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "dynamic-import-webpack",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "import",
      {
        libraryName: "antd-mobile",
        style: "css"
      }
    ],
  ]
};
