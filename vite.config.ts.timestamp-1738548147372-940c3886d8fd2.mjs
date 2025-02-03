// vite.config.ts
import { defineConfig } from "file:///C:/Users/user/Desktop/%EC%9D%B4%ED%83%9C%ED%9D%AC/%EC%97%98%EB%A6%AC%EC%8A%A4/%EC%8B%A4%EC%8A%B5/react-ui-kit/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/user/Desktop/%EC%9D%B4%ED%83%9C%ED%9D%AC/%EC%97%98%EB%A6%AC%EC%8A%A4/%EC%8B%A4%EC%8A%B5/react-ui-kit/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///C:/Users/user/Desktop/%EC%9D%B4%ED%83%9C%ED%9D%AC/%EC%97%98%EB%A6%AC%EC%8A%A4/%EC%8B%A4%EC%8A%B5/react-ui-kit/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\user\\Desktop\\\uC774\uD0DC\uD76C\\\uC5D8\uB9AC\uC2A4\\\uC2E4\uC2B5\\react-ui-kit";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.node.json",
      rollupTypes: true
    })
  ],
  resolve: {
    alias: [
      {
        find: "@ui",
        replacement: path.resolve(__vite_injected_original_dirname, "src/components")
      },
      {
        find: "@consts",
        replacement: path.resolve(__vite_injected_original_dirname, "src/consts")
      }
    ]
  },
  build: {
    lib: {
      // entry: path.resolve(__dirname, "src/components/index.ts"),
      entry: "./src/components/index.ts",
      name: "index",
      formats: ["es", "cjs"],
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    commonjsOptions: {
      esmExternals: ["react"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcXHVDNzc0XHVEMERDXHVENzZDXFxcXFx1QzVEOFx1QjlBQ1x1QzJBNFxcXFxcdUMyRTRcdUMyQjVcXFxccmVhY3QtdWkta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcXHVDNzc0XHVEMERDXHVENzZDXFxcXFx1QzVEOFx1QjlBQ1x1QzJBNFxcXFxcdUMyRTRcdUMyQjVcXFxccmVhY3QtdWkta2l0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL0Rlc2t0b3AvJUVDJTlEJUI0JUVEJTgzJTlDJUVEJTlEJUFDLyVFQyU5NyU5OCVFQiVBNiVBQyVFQyU4QSVBNC8lRUMlOEIlQTQlRUMlOEElQjUvcmVhY3QtdWkta2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLm5vZGUuanNvblwiLFxyXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6IFwiQHVpXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHNcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcIkBjb25zdHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29uc3RzXCIpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIC8vIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL2luZGV4LnRzXCIpLFxyXG4gICAgICBlbnRyeTogXCIuL3NyYy9jb21wb25lbnRzL2luZGV4LnRzXCIsXHJcbiAgICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXHJcbiAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21tb25qc09wdGlvbnM6IHtcclxuICAgICAgZXNtRXh0ZXJuYWxzOiBbXCJyZWFjdFwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVksU0FBUyxvQkFBb0I7QUFDdGEsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsTUFDbEIsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN2RDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUNuRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLE1BQ2YsY0FBYyxDQUFDLE9BQU87QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
