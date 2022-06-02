import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

/* element-plus */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

/* element-plus-icons */
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

/* html-title */
import { createHtmlPlugin } from "vite-plugin-html";

/* WindiCSS */
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "omp-admin"
  },
  server: {
    port: 12000
  },
  define: {
    // * 是否会减少打包后体积需进一步研究
    // * 关闭后将无法使用options-api
    // 关闭 Vue2 中的 options选项API
    __VUE_OPTIONS_API__: false
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
      "~/": `${resolve(__dirname, "public")}/`
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ["vue", "vue-router"], // 自动导入
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      eslintrc: {
        // * 生成一次就可以，避免每次工程启动都生成
        enabled: false, // 是否启用，默认 false,
        // filepath: "./.eslintrc-auto-import.json", // 默认路径-生成json文件
        globalsPropValue: true
      },
      dts: true
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        })
      ],
      // 自动导入组件目录
      dirs: ["src/components"],
      dts: true
    }),
    Icons({
      autoInstall: true
    }),
    /**
     * 默认会向 index.html 注入 .env 文件的内容，类似 vite 的 loadEnv函数
     */
    createHtmlPlugin({
      minify: true // 是否压缩 html
      /**
       * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
       * @default index.html
       */
      // template: "public/index.html"
    })
  ]
});
