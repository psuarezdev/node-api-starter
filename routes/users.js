import { Router } from 'express';
import { all } from '../controllers/UserController.js';

const router = Router();

router.get('/', all);

export default router;
