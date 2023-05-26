import { GraphQLID, GraphQLList, GraphQLFloat, GraphQLString } from "graphql";
import { ILike, Like } from "typeorm";
import { Hotels } from "../../Entities/Hotel";
import { HotelType } from "../Typedef/Hotel";


export const GET_ALL_HOTELS = {
    type: new GraphQLList(HotelType),
    args:{
        price:{type:GraphQLFloat},
        location:{type:GraphQLString}
    },
    async resolve( _: any, args: any | null){
        if(args.location==null && args.price == null)  return await Hotels.find()
       return await Hotels.find({where:{
        price:args.price,
        location:Like(`%${args.location}%`)
       }})
            
    },
};

export const GET_HOTEL = {
    type : HotelType,
    args: {
        id: {type: GraphQLID}
    },

   async resolve ( _: any, args: any){
        return await Hotels.findOneBy({id:args.id})        
    }
}