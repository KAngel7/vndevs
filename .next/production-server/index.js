"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3009;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express();
    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query);
    });
    server.get('*', (req, res) => {
        const pathname = req.path;
        const rootStaticFiles = [
            '/robots.txt',
            '/sitemap.xml',
            '/favicon.ico',
            '/browserconfig.xml',
            '/company-logo.png'
        ];
        if (rootStaticFiles.indexOf(pathname) > -1) {
            return app.serveStatic(req, res, `static${pathname}`);
        }
        return handle(req, res);
    });
    server.listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map