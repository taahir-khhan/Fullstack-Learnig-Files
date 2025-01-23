// ---- Don't convert this into ES Modules, Otherwise the code won't work ----
const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 5000;

// ---- http.createServer() creates an HTTP server that listens for incoming requests and sends appropriate responses ----
const server = http.createServer((req, res) => {
  // ---- Determine the File Path ----
  const filePath = path.join(
    // __dirname is a global variable in Node.js that represents the absolute path of the directory containing the currently executing JavaScript file.
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  // ---- Extract File Extension & convert it toLowerCase for consistency ----
  const extName = String(path.extname(filePath)).toLowerCase();

  // ---- MIME (Multipurpose Internet Mail Extensions) type is a standard way of describing the type of content being sent over the internet. It tells the browser how to handle the files ----
  const mimeType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimeType[extName] || "application/octet-stream";

  // ---- Read the file and serve to client & also handle errors ----
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404: File not found Bhayaji or Behenaji");
      }
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
