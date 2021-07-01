import { Router } from "express";
const notesRoute = Router();

notesRoute.get("/", async (request, response) => {
  try {
    //   await addNote({
    //     title: "title",
    //     description: "description",
    //     state: "todo",
    //   });
  } catch (err) {
    console.log(err);
  }
  response.send("hello server! and test");
});
