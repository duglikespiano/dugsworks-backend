import { Router } from 'express';
import { contactMailController } from '../controllers/mailController';

const router = Router();

router.get('/contact', contactMailController);

export default router;
