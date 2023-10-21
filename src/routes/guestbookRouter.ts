import { Router } from 'express';
import guestbookController from '../controllers/guestbookController';

const router = Router();

router.get('/', guestbookController.fetchAllMessages);
router.post('/', guestbookController.addMessage);

export default router;
