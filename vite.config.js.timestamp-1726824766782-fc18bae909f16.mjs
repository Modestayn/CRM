// vite.config.js
import { defineConfig } from "file:///E:/OSPanel/home/crm-coffee-bean.local/node_modules/vite/dist/node/index.js";
import laravel from "file:///E:/OSPanel/home/crm-coffee-bean.local/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///E:/OSPanel/home/crm-coffee-bean.local/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { barrel, swc_plugin_barrel } from "file:///E:/OSPanel/home/crm-coffee-bean.local/node_modules/vite-plugin-barrel/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/app.tsx", "resources/scss/app.scss", "resources/css/app.css"],
      refresh: true
    }),
    react({
      plugins: [
        swc_plugin_barrel({
          packages: ["@mui/material", "@mui/icons-material"]
        })
      ]
    }),
    barrel({
      packages: ["@mui/material", "@mui/icons-material"],
      experimental: {
        intergration: "plugin-react-swc"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxPU1BhbmVsXFxcXGhvbWVcXFxcY3JtLWNvZmZlZS1iZWFuLmxvY2FsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxPU1BhbmVsXFxcXGhvbWVcXFxcY3JtLWNvZmZlZS1iZWFuLmxvY2FsXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9PU1BhbmVsL2hvbWUvY3JtLWNvZmZlZS1iZWFuLmxvY2FsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGxhcmF2ZWwgZnJvbSAnbGFyYXZlbC12aXRlLXBsdWdpbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHtiYXJyZWwsIHN3Y19wbHVnaW5fYmFycmVsfSBmcm9tICd2aXRlLXBsdWdpbi1iYXJyZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogWydyZXNvdXJjZXMvanMvYXBwLnRzeCcsICdyZXNvdXJjZXMvc2Nzcy9hcHAuc2NzcycsICdyZXNvdXJjZXMvY3NzL2FwcC5jc3MnXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICByZWFjdCh7XG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgc3djX3BsdWdpbl9iYXJyZWwoe1xuICAgICAgICAgICAgICAgICAgICBwYWNrYWdlczogWydAbXVpL21hdGVyaWFsJywgJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBiYXJyZWwoe1xuICAgICAgICAgICAgcGFja2FnZXM6IFsnQG11aS9tYXRlcmlhbCcsICdAbXVpL2ljb25zLW1hdGVyaWFsJ10sXG4gICAgICAgICAgICBleHBlcmltZW50YWw6IHtcbiAgICAgICAgICAgICAgICBpbnRlcmdyYXRpb246ICdwbHVnaW4tcmVhY3Qtc3djJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUSxvQkFBbUI7QUFDcFUsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUNsQixTQUFRLFFBQVEseUJBQXdCO0FBRXhDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyx3QkFBd0IsMkJBQTJCLHVCQUF1QjtBQUFBLE1BQ2xGLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNGLFNBQVM7QUFBQSxRQUNMLGtCQUFrQjtBQUFBLFVBQ2QsVUFBVSxDQUFDLGlCQUFpQixxQkFBcUI7QUFBQSxRQUNyRCxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLE1BQ0gsVUFBVSxDQUFDLGlCQUFpQixxQkFBcUI7QUFBQSxNQUNqRCxjQUFjO0FBQUEsUUFDVixjQUFjO0FBQUEsTUFDbEI7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
