import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, "src")//设置src文件下用~代替
    }
  },
  plugins: [vue(), WindiCSS(),],
})
