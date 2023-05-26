import { DataSource} from 'typeorm'
import {Hotels} from './Entities/Hotel'

import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from './config'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: 8889,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [Hotels],
    synchronize: true,
    logging: false,
})
