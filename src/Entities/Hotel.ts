import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Hotels extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column()
    sale_price: number;

    @Column()
    location:string

    @Column({type:'boolean',default:false})
    activate_discount:boolean
}