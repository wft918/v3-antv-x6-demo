import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 别名
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: false,
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
