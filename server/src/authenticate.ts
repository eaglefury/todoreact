import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let payload: string;

  if (req.headers.authorization) {
    payload = jwt
      .verify(req.headers.authorization.split(' ')[1], 'MY_SECRET')
      .toString();
    (req as any).user = payload;
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
};
