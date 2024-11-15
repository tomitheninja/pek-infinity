// kubb.config.ts
import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginClient } from "@kubb/swagger-client";
import { pluginTanstackQuery } from "@kubb/swagger-tanstack-query";
import { pluginTs } from "@kubb/swagger-ts";
import { AxiosError } from "axios";
var kubb_config_default = defineConfig(() => {
  return {
    root: ".",
    input: {
      path: "../openapi.yaml"
    },
    output: {
      clean: true,
      path: "./pek-api"
    },
    plugins: [
      pluginOas(),
      pluginTs(),
      pluginClient(),
      pluginTanstackQuery({
        framework: "react",
        queryOptions: {
          retry: (count, error) => {
            if (error instanceof AxiosError && error.response?.status === 401) return false;
            return count <= 2;
          }
        }
      })
    ]
  };
});
export {
  kubb_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsia3ViYi5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2JhbGludC9LaXItRGV2L3Blay1pbmZpbml0eS9mcm9udGVuZC9rdWJiLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvYmFsaW50L0tpci1EZXYvcGVrLWluZmluaXR5L2Zyb250ZW5kXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9iYWxpbnQvS2lyLURldi9wZWstaW5maW5pdHkvZnJvbnRlbmQva3ViYi5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICdAa3ViYi9jb3JlJztcbmltcG9ydCB7IHBsdWdpbk9hcyB9IGZyb20gJ0BrdWJiL3BsdWdpbi1vYXMnO1xuaW1wb3J0IHsgcGx1Z2luQ2xpZW50IH0gZnJvbSAnQGt1YmIvc3dhZ2dlci1jbGllbnQnO1xuaW1wb3J0IHsgcGx1Z2luVGFuc3RhY2tRdWVyeSB9IGZyb20gJ0BrdWJiL3N3YWdnZXItdGFuc3RhY2stcXVlcnknO1xuaW1wb3J0IHsgcGx1Z2luVHMgfSBmcm9tICdAa3ViYi9zd2FnZ2VyLXRzJztcbmltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm9vdDogJy4nLFxuXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhdGg6ICcuLi9vcGVuYXBpLnlhbWwnLFxuICAgIH0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBjbGVhbjogdHJ1ZSxcbiAgICAgIHBhdGg6ICcuL3Blay1hcGknLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcGx1Z2luT2FzKCksXG4gICAgICBwbHVnaW5UcygpLFxuICAgICAgcGx1Z2luQ2xpZW50KCksXG4gICAgICBwbHVnaW5UYW5zdGFja1F1ZXJ5KHtcbiAgICAgICAgZnJhbWV3b3JrOiAncmVhY3QnLFxuICAgICAgICBxdWVyeU9wdGlvbnM6IHtcbiAgICAgICAgICByZXRyeTogKGNvdW50OiBudW1iZXIsIGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQXhpb3NFcnJvciAmJiBlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBjb3VudCA8PSAyO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLFNBQVMsb0JBQW9CO0FBQzVTLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsa0JBQWtCO0FBRTNCLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2Isb0JBQW9CO0FBQUEsUUFDbEIsV0FBVztBQUFBLFFBQ1gsY0FBYztBQUFBLFVBQ1osT0FBTyxDQUFDLE9BQWUsVUFBaUI7QUFDdEMsZ0JBQUksaUJBQWlCLGNBQWMsTUFBTSxVQUFVLFdBQVcsSUFBSyxRQUFPO0FBQzFFLG1CQUFPLFNBQVM7QUFBQSxVQUNsQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
