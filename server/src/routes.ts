import { login, registerUser } from './controllers/user.controller';
import { getNotes } from './controllers/note.controller';
import { Router } from 'express';

const apiRouter = Router();

// USER
apiRouter.post('/user/register/', registerUser);
apiRouter.post('/user/login/', login);

// NOTES
apiRouter.get('/notes/', getNotes);

export default apiRouter;
