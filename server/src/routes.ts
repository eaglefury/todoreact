import {
  isAuthenticated,
  login,
  logoutUser,
  registerUser,
} from "./controllers/user.controller";
import {
  getUserNotes,
  addMultipleNotes,
  deleteOneNote,
  updateOneNote,
} from "./controllers/note.controller";
import { Router } from "express";

const apiRouter = Router();

// USER
apiRouter.post("/user/register/", registerUser);
apiRouter.post("/user/login/", login);
apiRouter.get("/user/isauthorized/", isAuthenticated);
apiRouter.get("/user/logout/", logoutUser);

// NOTES
apiRouter.get("/notes/:userId", getUserNotes);
apiRouter.post("/notes/", addMultipleNotes);
apiRouter.delete("/notes/", deleteOneNote);
apiRouter.put("/notes/", updateOneNote);

export default apiRouter;
