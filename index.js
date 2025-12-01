import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Project</title>
      <style>
        body { font-family: Arial; margin: 50px; }
      </style>
    </head>
    <body>
      <h1>Welcome! 🚀</h1>
      <p>Your local server is running.</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
