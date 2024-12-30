const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello new year is comming");
  } else if (req.url === "/new-year") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("2025 is coming, we are literally going to die");
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain");
    res.end("404 : Content not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
