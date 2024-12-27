import express, { Router } from "express";
import "dotenv/config";

// Import the route.
import { router } from "./Routes/router.js";
import { todoEndPoint } from "./Utils/Constants.js";

// Create express instance named 'app'
const app = express();

// To Use JSON Schemas and serializing.
app.use(express.json());

// Route the todos handling router to todos endpoint.
app.use(todoEndPoint , router);

// Get the port from env (from .env file)
const port = process.env.PORT || 3000;

// Start the server.
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
