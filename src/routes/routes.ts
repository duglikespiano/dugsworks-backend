import { Router } from 'express';
import pingRouter from './pingRouter';

const router = Router();

router.use('/ping', pingRouter);

export default router;
