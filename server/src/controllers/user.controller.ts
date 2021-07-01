import { Router } from "express";
import { User } from "../models/user.model";
import { createUser } from "../services/user.service";
import * as bcrypt from "bcrypt";
const userRoute = Router();

userRoute.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await createUser(
      new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      })
    );
    res.status(201).send(user.toJSON());
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

export default userRoute;
