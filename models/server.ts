import express,{ Application } from "express";
import userRoutes from "../routes/usuario";
import direccionesRoutes from '../routes/direcciones'
import cors from "cors";
import database from "../database/connection";
import '../models/usuario'
import '../models/direcciones'

class Server{
    private app: Application;
    private port:string;
    private apiPaths = {
        usuarios: '/usuarios',
        direcciones: '/direcciones'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.middlewares();        
        this.routes();

        this.databaseConection();
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.direcciones,direccionesRoutes)
    }

    async databaseConection(){
        try {
            await database.sync();
            await database.authenticate();
            console.log('Conexion con la BD exitosa.');
            
        } catch (error:any) {
            throw new Error(error);
        }
    }
    
    middlewares(){
        //Cors
        this.app.use( cors() );
        
        //Lectura del body
        this.app.use( express.json() );
        
        //carpeta publica
        this.app.use( express.static('public'));
    }
    
    listen(){
        this.app.listen(this.port,() => {
            console.log('servidor corriendo en puerto' + this.port);
            
        })
    }
}


export default Server;