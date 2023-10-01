const path = require('path')
const process = require('process')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isProduction =
  process.argv.some((arg) => ['-p', '--production'].includes(arg)) || process.env.NODE_ENV === 'production'

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: !isProduction,
    },
  },
]

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  stats: 'errors-only',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.css', '.png'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
        baseUrl: path.resolve(__dirname, '.'),
        extensions: [".js", ".ts", ".tsx"],
      })
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      '/security': {
        target: 'http://localhost:3000',
        router: () => 'http://localhost:8080',
      },
      '/admin': {
        target: 'http://localhost:3000',
        router: () => 'http://localhost:8080',
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
    }),
    isProduction &&
    new CompressionPlugin({algorithm: 'gzip', filename: '[path][base].gz', minRatio: 0.8, test: /\.js$|\.css$/}),
    !isProduction &&
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      files: 'src/**/*',
      lintDirtyModulesOnly: true,
      threads: true,
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        exclude: /node-modules/,
        test: /\.[jt]sx?$/i,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(svg|ico|png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
