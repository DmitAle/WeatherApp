import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { ServerConfiguration } from 'webpack-dev-server';
import dotenv from 'dotenv';

dotenv.config();

const srcPath = path.resolve(__dirname, './src');
const publicPath = path.resolve(__dirname, './public');
const ASSET_PATH = process.env.ASSET_PATH || '/';
const buildPath = path.resolve(__dirname, './build');
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';

const config: Configuration & { devServer?: ServerConfiguration } = {
  entry: {
    main: `${srcPath}/app/entry/index.tsx`,
  },
  output: {
    path: buildPath,
    publicPath: ASSET_PATH,
    filename: IS_PROD ? 'build/[name].[contenthash].bundle.js' : 'build/[name].bundle.js',
  },
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'source-map' : false,
  devServer: IS_DEV
    ? {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
      }
    : undefined,
  resolve: {
    alias: {
      '@app': `${srcPath}/app`,
      '@pages': `${srcPath}/pages`,
      '@widgets': `${srcPath}/widgets`,
      '@features': `${srcPath}/features`,
      '@entities': `${srcPath}/entities`,
      '@shared': `${srcPath}/shared`,
      '@generated': `${srcPath}/shared/utils/generated-types.tsx`,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: `assets/images/[hash][ext]`,
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        oneOf: [
          {
            test: /node_modules/,
            use: ['style-loader', 'css-loader'],
          },
          {
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  esModule: true,
                  modules: {
                    mode: 'local',
                    namedExport: true,
                    exportLocalsConvention: 'camel-case-only',
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.YANDEX_WETHER_TOKEN': JSON.stringify(process.env.YANDEX_WETHER_TOKEN),
      'process.env.YANDEX_WEATHER_API_URL': JSON.stringify(process.env.YANDEX_WEATHER_API_URL),
    }),
    new HtmlWebpackPlugin({
      template: `${publicPath}/index.html`,
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    ...(!IS_DEV ? [new CleanWebpackPlugin(), new ReactRefreshWebpackPlugin()] : []),
    ...(IS_PROD
      ? [
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
          }),
        ]
      : []),
  ],
  watchOptions: {
    ignored: ['node_modules', 'build'],
  },
  ...(IS_PROD
    ? {
        optimization: {
          usedExports: true,
          runtimeChunk: 'single',
        },
        performance: {
          hints: 'warning',
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        },
      }
    : {}),
};

export default config;
