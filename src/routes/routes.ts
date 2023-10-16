import { Router } from 'express';
import pingRouter from './pingRouter';
import mailRouter from './mailRouter';
import guestbookRouter from './guestbookRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/mail', mailRouter);
router.use('/guestbook', guestbookRouter);

export default router;
