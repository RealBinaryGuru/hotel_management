import {GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql'

export const HotelType = new GraphQLObjectType({
    name: 'Hotel',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        price: {type: GraphQLFloat},
        sale_price: {type: GraphQLFloat},
        location:{type:GraphQLString},
        activate_discount:{type:GraphQLBoolean}
    }
})