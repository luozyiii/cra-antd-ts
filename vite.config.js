import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';
import lessToJS from 'less-vars-to-js';

const themeVariables = lessToJS(fs.readFileSync(resolve(__dirname, './src/style/theme.less'), 'utf8'));

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: /^~/, replacement: '' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://apis.baixxx.cn',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        modifyVars: themeVariables,
      },
    },
  },
});
