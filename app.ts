import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";

const app = new Application();

//static files
app.static("/", "./public");

//routes
app.get("/", async (ctx: Context) => {
  await ctx.file("./public/index.html");
});

app
  .get("/books", (ctx: Context) => {
    console.log("all books");
  })
  .get("/books/:id", () => {})
  .post("/books", () => {})
  .delete("/books/:id", () => {});

//listen to port
app.start({ port: 3000 });
