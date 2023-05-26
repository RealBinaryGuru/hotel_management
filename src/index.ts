import {PORT} from './config'
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {schema} from './schema'
import { AppDataSource } from './database'

const app = express()

AppDataSource.initialize().then(async()=>{
    app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema,
    }));
    app.listen(PORT,()=>console.log('Server is running on port', PORT));
    
})





