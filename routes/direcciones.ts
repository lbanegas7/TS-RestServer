import { Router } from 'express'
import { deleteDireccion, getDirecciones, postDireccion, putDireccion } from '../controller/direcciones';

const router = Router();


router.get('/',getDirecciones)
router.post('/',postDireccion)
router.put('/:id',putDireccion )
router.delete('/:id',deleteDireccion)

export default router;