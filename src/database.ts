import {createConnection} from 'typeorm'
import {Hotels} from './Entities/Hotel'

import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from './config'

 export const connectDB = async () => {
    await createConnection({
                type : 'mysql',
                username: DB_USERNAME,
                password: DB_PASSWORD,
                port: Number(DB_PORT),
                host: DB_HOST,
                database: DB_NAME,
                entities: [Hotels],
                synchronize: true,
                ssl: false

    })
}
