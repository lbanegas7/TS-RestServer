import { DataTypes } from 'sequelize';
import database from '../database/connection';

const Direcciones = database.define('direcciones',{
    idDireccion:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull:false
    }
},
{
    timestamps:false
})

export default Direcciones;