import { Router } from 'express';
import pingRouter from './pingRouter';
import mailRouter from './mailRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/mail', mailRouter);

export default router;
