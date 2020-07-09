import { Application } from "https://deno.land/x/abc@v1/mod.ts";

const app = new Application();

//listen to port
app.start({ port: 3000 });
