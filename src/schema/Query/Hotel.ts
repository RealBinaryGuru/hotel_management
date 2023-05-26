import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Hotels } from "../../Entities/Hotel";
import { HotelType } from "../Typedef/Hotel";


export const GET_ALL_HOTELS = {
    type: new GraphQLList(HotelType),
    async resolve(){
        return await Hotels.find()
            
    },
};

export const GET_HOTEL = {
    type : HotelType,
    args: {
        id: {type: GraphQLID}
    },

   async resolve ( _: any, args: any){
        return await Hotels.findOneByOrFail({id:args.id})        
    }
}