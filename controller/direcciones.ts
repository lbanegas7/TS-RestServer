import { Request, Response } from "express";
import Direcciones from "../models/direcciones";

export const getDirecciones = async (req:Request, res:Response) => {

    try {
        const direcciones = await Direcciones.findAll()
        res.send(direcciones)
    } catch (error:any) {
        res.status(500).json({ message:error.message })
    }
}

export const postDireccion = async (req:Request, res:Response) => {
    const { nombre, descripcion, idUsuario } = req.body

    if(!idUsuario) return res.status(500).json({message:'Error al crear direccion'})
    
    try {
        await Direcciones.create({
            nombre,
            descripcion,
            idUsuario
        })
        res.json({ message:'direccion creada' })
    } catch (error:any) {
        res.status(500).json({ message:error.message })
    }
    
}

export const putDireccion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { nombre, descripcion, idUsuario} = req.body;
    const direccion = await Direcciones.findByPk(id);
    
    if(!idUsuario || !direccion || !nombre || !descripcion) return res.status(500).json({msg:'Error al crear direccion'})
    
    try {
        direccion?.set({
            nombre,
            descripcion,
            idUsuario
        });
        direccion?.save();
        res.json({ message:'actualizacion exitosa' })

    } catch (error:any) {
        res.status(500).json({ message: error.message })
    }
    
}

export const deleteDireccion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const direccion = await Direcciones.findByPk(id);

    if(!direccion) res.status(500).json({message:'La direccion no existe'})

    try {
        await Direcciones.destroy({ where:{ idDireccion: id } })
        res.json({ message:'Direccion eliminada' })
    } catch (error:any) {
        res.status(500).json({ message: error.message })
        
    }
}