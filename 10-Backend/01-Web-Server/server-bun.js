import { serve } from "bun";

const server = serve({
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("It's Bun Baby", { status: 200 });
    } else if (url.pathname === "/december") {
      return new Response("It's 2024 December", { status: 200 });
    } else {
      return new Response("404: Content not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});

console.log(`Listening on localhost http://${server.hostname}:${server.port}`);
