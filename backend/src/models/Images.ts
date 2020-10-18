import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanages from './Orphanages';

@Entity('images')
export default class Images {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    path: string;

    @ManyToOne(() => Orphanages, orphanage => orphanage.images)
    @JoinColumn({name:'orphanage_id'})
    orphanage: Orphanages;
}