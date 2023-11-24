import { Router } from 'express';
import * as producecon from './produce.con.js'


const router  = Router();
router.get('/produce',producecon.getProducts)


export default router;