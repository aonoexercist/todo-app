import { Elysia, t } from "elysia";
import { db } from "../db";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

export const todoRoutes = new Elysia({ prefix: "/todos" })

  // CREATE
  .post(
    "/",
    async ({ body }) => {
      const result = await db
        .insert(todos)
        .values({
          title: body.title,
        })
        .returning();

      return result[0];
    },
    {
      body: t.Object({
        title: t.String(),
      }),
    }
  )

  // READ ALL
  .get("/", async () => {
    return await db.select().from(todos);
  })

  // READ ONE
  .get("/:id", async ({ params }) => {
    const result = await db
      .select()
      .from(todos)
      .where(eq(todos.id, Number(params.id)));

    return result[0] ?? { error: "Not found" };
  })

  // UPDATE
  .put(
    "/:id",
    async ({ params, body }) => {
      const result = await db
        .update(todos)
        .set({
          title: body.title,
          completed: body.completed,
        })
        .where(eq(todos.id, Number(params.id)))
        .returning();

      return result[0] ?? { error: "Not found" };
    },
    {
      body: t.Object({
        title: t.Optional(t.String()),
        completed: t.Optional(t.Boolean()),
      }),
    }
  )

  // DELETE
  .delete("/:id", async ({ params }) => {
    const result = await db
      .delete(todos)
      .where(eq(todos.id, Number(params.id)))
      .returning();

    return result[0] ?? { error: "Not found" };
  });