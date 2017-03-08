import express from 'express';
import option from './option';

const router = express.Router();
router.use('/option', option);

export default router;
