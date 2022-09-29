const path = require('path');
const { whenProd } = require('@craco/craco');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);
const proxyServer = require('./config/proxy');

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        ...whenProd(() => ({
          optimization: {
            splitChunks: {
              cacheGroups: {
                reactLib: {
                  test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|\/dist)[\\/]/,
                  name: 'react-lib',
                  chunks: 'all',
                  enforce: true,
                  priority: 40,
                  reuseExistingChunk: true,
                },
                antLib: {
                  name: 'ant-lib',
                  test: /[\\/]node_modules[\\/](@ant-design|antd\/lib)[\\/]/,
                  chunks: 'all',
                  enforce: true,
                  priority: 30,
                  reuseExistingChunk: true,
                },
                commons: {
                  chunks: 'all',
                  name: 'commons',
                  minSize: 0,
                  minChunks: 5,
                  maxInitialRequests: 2,
                  priority: 10,
                  reuseExistingChunk: true,
                },
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  chunks: 'all',
                  name: 'vendors',
                  priority: 10,
                  enforce: true,
                  reuseExistingChunk: true,
                },
              },
            },
          },
        })),
      };
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    port: 8080,
    proxy: proxyServer,
  },
};
