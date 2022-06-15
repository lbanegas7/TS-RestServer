import { Sequelize } from "sequelize";

const database = new Sequelize(
    'usuarios', /* base de dato */
    'postgres', /* usuario */
    '1234',
    {
        host:'localhost',
        dialect:'postgres',
        // logging:false
    }

)

export default database;