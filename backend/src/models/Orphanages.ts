import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    OneToMany, 
    JoinColumn 
} from 'typeorm';

import Image from './Images'

@Entity('orphanages')
export default class Orphanages {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_weekends: boolean;  

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_Id'})
    images: Image[];
}