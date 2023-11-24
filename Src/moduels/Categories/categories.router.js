import {Router} from 'express';
import * as categoriescont from './Categories.cont.js';
const router  = Router();


router.get('/',categoriescont.getCategories)
export default router;