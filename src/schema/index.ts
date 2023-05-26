import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_HOTEL, DELETE_HOTEL, UPDATE_HOTEL } from "./Mutations/Hotel";
import { GET_ALL_HOTELS, GET_HOTEL } from "./Query/Hotel";

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields: {
       getAllHotel:GET_ALL_HOTELS,
       getHotel:GET_HOTEL
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields : {
      createHotel:CREATE_HOTEL,
      deleteHotel:DELETE_HOTEL,
      updateHotel:UPDATE_HOTEL
    },
});


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation, 
    
})