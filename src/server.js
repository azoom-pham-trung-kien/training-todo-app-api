import http from "http";
import middlewares from "./middlewares/index.js";
import morgan from "morgan";
import routes from "./routes/index.js";

const logger = morgan("tiny");
const server = http.createServer((req, res) => {
  logger(req, res, function (err) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle OPTIONS method
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    // middlewares
    const validRequest = middlewares.every((middleware) =>
      middleware(req, res)
    );

    if (!validRequest) {
      return;
    }

    // Define routes
    const currentRoute = routes.find(({ path, method }) => {
      return req.url === path && req.method === method;
    });

    if (!currentRoute) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }

    const { handleRequest } = currentRoute;
    handleRequest(req, res);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
