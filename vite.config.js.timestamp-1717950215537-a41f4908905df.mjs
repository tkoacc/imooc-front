// vite.config.js
import { defineConfig } from "file:///C:/code/%E5%89%8D%E7%AB%AF%E8%AE%AD%E7%BB%83%E8%90%A5/vue3/%E4%B8%AD%E5%89%8D%E5%8F%B0/imooc-front/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.2_sass@1.45.0/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/code/%E5%89%8D%E7%AB%AF%E8%AE%AD%E7%BB%83%E8%90%A5/vue3/%E4%B8%AD%E5%89%8D%E5%8F%B0/imooc-front/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.12_@types+node@20.14.2_sass@1.45.0__vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path, { join } from "path";
import { createSvgIconsPlugin } from "file:///C:/code/%E5%89%8D%E7%AB%AF%E8%AE%AD%E7%BB%83%E8%90%A5/vue3/%E4%B8%AD%E5%89%8D%E5%8F%B0/imooc-front/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.12_@types+node@20.14.2_sass@1.45.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\code\\\u524D\u7AEF\u8BAD\u7EC3\u8425\\vue3\\\u4E2D\u524D\u53F0\\imooc-front";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[name]"
    })
  ],
  // 软链接
  resolve: {
    alias: {
      "@": join(__vite_injected_original_dirname, "/src")
    }
  },
  // 代理
  server: {
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      "/api": {
        // 代理请求之后的请求地址
        target: "https://api.imooc-front.lgdsunday.club/",
        // 跨域
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxjb2RlXFxcXFx1NTI0RFx1N0FFRlx1OEJBRFx1N0VDM1x1ODQyNVxcXFx2dWUzXFxcXFx1NEUyRFx1NTI0RFx1NTNGMFxcXFxpbW9vYy1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcY29kZVxcXFxcdTUyNERcdTdBRUZcdThCQURcdTdFQzNcdTg0MjVcXFxcdnVlM1xcXFxcdTRFMkRcdTUyNERcdTUzRjBcXFxcaW1vb2MtZnJvbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2NvZGUvJUU1JTg5JThEJUU3JUFCJUFGJUU4JUFFJUFEJUU3JUJCJTgzJUU4JTkwJUE1L3Z1ZTMvJUU0JUI4JUFEJUU1JTg5JThEJUU1JThGJUIwL2ltb29jLWZyb250L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGgsIHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdTk3MDBcdTg5ODFcdTdGMTNcdTVCNThcdTc2ODRcdTU2RkVcdTY4MDdcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bbmFtZV0nXG4gICAgfSlcbiAgXSxcbiAgLy8gXHU4RjZGXHU5NEZFXHU2M0E1XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBqb2luKF9fZGlybmFtZSwgJy9zcmMnKVxuICAgIH1cbiAgfSxcbiAgLy8gXHU0RUUzXHU3NDA2XG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAvLyBcdTRFRTNcdTc0MDZcdTYyNDBcdTY3MDkgL2FwaSBcdTc2ODRcdThCRjdcdTZDNDJcdUZGMENcdThCRTVcdTZDNDJcdTYwQzVcdTVDMDZcdTg4QUJcdTRFRTNcdTc0MDZcdTUyMzAgdGFyZ2V0IFx1NEUyRFxuICAgICAgJy9hcGknOiB7XG4gICAgICAgIC8vIFx1NEVFM1x1NzQwNlx1OEJGN1x1NkM0Mlx1NEU0Qlx1NTQwRVx1NzY4NFx1OEJGN1x1NkM0Mlx1NTczMFx1NTc0MFxuICAgICAgICB0YXJnZXQ6ICdodHRwczovL2FwaS5pbW9vYy1mcm9udC5sZ2RzdW5kYXkuY2x1Yi8nLFxuICAgICAgICAvLyBcdThERThcdTU3REZcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVyxTQUFTLG9CQUFvQjtBQUNqWSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxRQUFRLFlBQVk7QUFDM0IsU0FBUyw0QkFBNEI7QUFIckMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0oscUJBQXFCO0FBQUE7QUFBQSxNQUVuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUE7QUFBQSxNQUUxRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssa0NBQVcsTUFBTTtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFFBQVE7QUFBQTtBQUFBLFFBRU4sUUFBUTtBQUFBO0FBQUEsUUFFUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
