import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/*": index,

    "/api/menu": {
      async GET(req) {
        return Response.json({
          navMain: [
            {
              title: "Getting Started",
              items: [
                {
                  title: "Home",
                  url: "/",
                  isActive: true,
                },
                {
                  title: "Docs",
                  url: "/docs",
                  isActive: false,
                },
                {
                  title: "API",
                  url: "/api",
                  isActive: false,
                },
                {
                  title: "Examples",
                  url: "/examples",
                  isActive: false,
                },
                {
                  title: "Blog",
                  url: "/blog",
                  isActive: false,
                },
                {
                  title: "Community",
                  url: "/community",
                  isActive: false,
                },
              ],
            }
          ],
        });
      }
    },

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
