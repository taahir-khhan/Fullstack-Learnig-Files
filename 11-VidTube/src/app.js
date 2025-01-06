import cors from "cors";
import express from "express";

const app = express();

// cors middleware, means only serve to allowed application to access this application data
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// import routes
import healthcheckRoutes from "./routes/healthcheck.routes.js";


export { app };
