import { Router } from 'express';
import { User } from '../data/models/user';
import * as bcrypt from 'bcrypt';
const userRoute = Router();

userRoute.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

export default userRoute;
