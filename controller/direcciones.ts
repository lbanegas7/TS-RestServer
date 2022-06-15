import { Request, Response } from "express";

export const getDirecciones = (req:Request, res:Response) => {
    res.json({msg:'getDireccion'})
}

export const postDireccion = (req:Request, res:Response) => {
    res.json({msg:'postDireccion'})
    
}

export const putDireccion = (req:Request, res:Response) => {
    res.json({msg:'putDireccion'})
    
}

export const deleteDireccion = (req:Request, res:Response) => {
    res.json({msg:'deleteDireccion'})

}