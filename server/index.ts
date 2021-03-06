import express from "express";
import next from "next";
import compression from "compression";

const port = parseInt(process.env.PORT, 10) || 3017;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("*", (req, res) => {
    const pathname = req.path;
    const rootStaticFiles = [
      "/robots.txt",
      "/sitemap.xml",
      "/favicon.ico",
      "/browserconfig.xml",
      "/company-logo.png",
      "/site.webmanifest",
      "/favicon-32x32.png",
      "/favicon-16x16.png",
      "/android-chrome-192x192.png",
      "/android-chrome-512x512.png",
    ];
    if (rootStaticFiles.indexOf(pathname) > -1) {
      return app.serveStatic(req, res, `public${pathname}`);
    }
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
