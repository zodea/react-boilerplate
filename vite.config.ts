import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { type Plugin, defineConfig } from 'vite'
import EslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EslintPlugin(),
    // 打包后展示分析图谱
    visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      // @ts-ignore
      gzipSize: true,
      // @ts-ignore
      brotliSize: true,
    }) as unknown as Plugin,
  ],
})
