import {PORT} from './config'
import { connectDB } from './database';
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {schema} from './schema'

const app = express()


connectDB();
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}));
app.listen(PORT,()=>console.log('Server is running on port', PORT));




