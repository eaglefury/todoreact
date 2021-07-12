import { request, Request, response, Response } from "express";
import { User } from "../models/user.model";
import { createUser, getUserByEmail } from "../services/user.service";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    let user = await getUserByEmail(req.body.email);
    if (user) {
      res.status(400).send("email already exists");
    }
    user = await createUser(
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
};

export const login = async (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("email or password mising");
  }

  const user = await getUserByEmail(req.body.username);

  if (!user) {
    return res.status(401).send("bad email or password");
  }

  const passwordCompareResult = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (passwordCompareResult) {
    const token = jwt.sign(
      JSON.stringify({ email: req.body.email }),
      "MY_SECRET"
    );
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      })
      .json(user);
  } else {
    return res.status(401).send("bad email or password");
  }
};

export const isAuthenticated = async (req: Request, res: Response) => {
  if (req.cookies && req.cookies["token"]) {
    try {
      const payload = jwt.verify(req.cookies["token"], "MY_SECRET").toString();
      res.status(200).send(payload);
    } catch (err) {
      console.log(err);
      res.status(403).send();
    }
  } else {
    console.log("no cookies");
    res.status(403).send();
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  if (req.cookies && req.cookies["token"]) {
    try {
      res.clearCookie("token", { path: "/" }).status(200).send();
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "unable to clear cookie" });
    }
  } else {
    res.status(200).json({ message: "no cookies to delete" });
  }
};
