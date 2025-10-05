import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getAll, getOne, create, update, remove } from '../controllers/productController.js';


const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', requireAuth, create);
router.put('/:id', requireAuth, update);
router.delete('/:id', requireAuth, remove);

export default router;
