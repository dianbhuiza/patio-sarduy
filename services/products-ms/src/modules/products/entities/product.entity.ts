import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { IMainPopularUse, IProduct } from "@repo/contracts/products"


export class MainPopularUse implements IMainPopularUse {
    @Column({type: "boolean"})
    culinary: boolean;

    @Column({type: "boolean"})
    medicinal: boolean;

    @Column({type: "boolean"})
    aromatic: boolean;
}

@Entity()
export class Product implements IProduct {
    
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: "varchar", length: "100"})
    commonName: string;

    @Column({type: "varchar", length: "100"})
    scientificName: string;

    @Column({type: "varchar", length: "100"})
    genus: string;

    @Column({type: "varchar", length: "100"})
    family: string;

    @Column({type: "varchar", length: "100"})
    growthForm: string;

    @Column({type: "varchar", length: "100"})
    origin: string;
    
    @Column({type: "varchar", length: "100"})
    provenance: string;
    
    @Column({type: "varchar", length: "100"})
    collector: string;
    
    @Column({type: "varchar", length: "100"})
    threatCategory: string;
    
    @Column({type: "boolean"})
    isEndemic: boolean;
    
    @Column({type: "integer"})
    population: number;
    
    @Column({type: "datetime"})
    registrationDate: Date;
    
    @Column({type: "datetime"})
    deathDate: Date;

    @Column(()=>MainPopularUse)
    mainPopularUse: MainPopularUse;
}
