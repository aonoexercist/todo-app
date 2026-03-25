import { Elysia } from "elysia";
import { todoRoutes } from "./routes/todo";

const app = new Elysia()
  .use(todoRoutes)
  .get("/", () => "Elysia + Drizzle + Postgres 🚀")
  .listen(3000);

console.log(`Server running at http://localhost:3000`);