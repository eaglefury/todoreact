import { request, Request, Response } from 'express';
import { User } from '../models/user.model';
import { createUser, getUserByEmail } from '../services/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
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
    res.status(500).send('Internal server error');
  }
};

export const login = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send('email or password mising');
  }

  const user = await getUserByEmail(req.body.email);

  if (!user) {
    return res.status(401).send('bad email or password');
  }

  const passwordCompareResult = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (passwordCompareResult) {
    const token = jwt.sign(
      JSON.stringify({ email: req.body.email }),
      'MY_SECRET'
    );
    res.status(200).send(token);
  } else {
    return res.status(401).send('bad email or password');
  }
};
