import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarioDirecciones, getUsuarios, postUsuario, putUsuario } from "../controller/usuarios";

const router = Router();

router.get('/',getUsuarios);
router.get('/:id',getUsuario);
router.post('/',postUsuario);
router.put('/:id',putUsuario);
router.delete('/:id',deleteUsuario);
router.get('/:id/direcciones', getUsuarioDirecciones);

export default router;