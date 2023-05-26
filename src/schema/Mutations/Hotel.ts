import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLString } from "graphql";
import { Hotels } from "../../Entities/Hotel";
import { HotelType } from "../Typedef/Hotel";

export const CREATE_HOTEL ={
    type: HotelType,
    args: {
        name:{type:GraphQLString},
        price:{type:GraphQLFloat},
        sale_price:{type:GraphQLFloat},
        location:{type:GraphQLString},
        activate_discount:{type:GraphQLBoolean}
    },
    async resolve(_:any, args: any){
        
        const {name,price,sale_price,location,activate_discount} = args;

        const result = await Hotels.insert({
            name:name,
            price:price,
            sale_price:sale_price,
            location:location,
            activate_discount:activate_discount

        })

        console.log(result);

        return{...args, id: result.identifiers[0].id,};

    }   
    
};

export const DELETE_HOTEL ={
    type:GraphQLBoolean,
    args:{
        id:{type:GraphQLID}
    },
    async resolve(_: any, {id}: any){
        const result = await Hotels.delete(id);
        if (result.affected === 1) return true;
        return false
    }
}

export const UPDATE_HOTEL = {
    type: HotelType,
    args: {
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        price:{type:GraphQLFloat},
        sale_price:{type:GraphQLFloat},
        location:{type:GraphQLString},
        activate_discount:{type:GraphQLBoolean}
    },
    async resolve (_: any,  args: any){

        const {id,name,price,sale_price,location,activate_discount} = args;

        
        const result = await Hotels.update({id},{
            name:name,
            price:price,
            sale_price:sale_price,
            location:location,
            activate_discount:activate_discount   
        });
       
        if (result.affected === 0) return false;
       return {...args,}
    }
}