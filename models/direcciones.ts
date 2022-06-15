import { DataTypes } from 'sequelize';
import database from '../database/connection';

const Direcciones = database.define('direcciones',{
    idDireccion:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.TEXT
    }
},
{
    timestamps:false
})

export default Direcciones;