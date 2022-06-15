import { Request, Response } from "express";
import Direcciones from "../models/direcciones";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({
        usuarios
    });
}

export const getUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: 'getUsuario',
        id
    })
}

export const postUsuario = async (req: Request, res: Response) => {
    const { nombre, correo } = req.body;

    if(nombre && correo){
        try {
            await Usuario.create({
                nombre,
                correo
            })   
    
            res.json({
                msg: 'postUsuario',
            })
        } catch (error:any) {
            res.status(404).json({
                message: error.message,
            })    
        }
    }else{
        res.status(500).json({
            message: 'errorPost',
        })
    }


}

export const putUsuario = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    const usuarioActualizar = await Usuario.findByPk(id)
    
    if(!!usuarioActualizar && (nombre && correo)){
        
        try {
            await usuarioActualizar.update({ nombre, correo });
            await usuarioActualizar.save();
            res.sendStatus(204);

        } catch (error:any) {
            res.status(500).json({
                message: error.message
            });
        }
    }else{
        res.status(500).json({
            message: 'Usuario no existe'
        })
    }

}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const usuarioEliminar = await Usuario.findByPk(id)

    if(!!usuarioEliminar){
        try {
            await Usuario.destroy({
                where:{
                    id
                }
            })
            res.sendStatus(204)   
        } catch (error:any) {
            res.status(500).json({message: error.message})
        }
        
    }else{
        res.status(500).json({message: 'Usuario no existe'})
    }

}

export const getUsuarioDirecciones = async (req: Request, res:Response) => {
    const { id } = req.params;
    
    try {
        const direccionesUsuario = await Direcciones.findAll({ where:{ idUsuario:id } })
        res.json(direccionesUsuario)

    } catch (error:any) {
        res.status(500).json({message: error.message})
    }

}