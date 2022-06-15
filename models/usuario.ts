import { DataTypes } from "sequelize";
import database from "../database/connection";
import Direcciones from "./direcciones";


const Usuario = database.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    }
},
{
    timestamps:false
})

Usuario.hasMany(Direcciones,{
    foreignKey:'idUsuario', /* esta columna sera creada en la entidad de direcciones */
    sourceKey: 'id'
})

Direcciones.belongsTo(Usuario,{
    foreignKey:'idUsuario',
    targetKey: 'id'
})

export default Usuario;