import { Router } from 'express';
import { contactMailController } from '../controllers/mailController';

const router = Router();

router.post('/contact', contactMailController);

export default router;
