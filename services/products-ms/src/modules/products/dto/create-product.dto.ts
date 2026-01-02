import { IMainPopularUse, IProduct } from '@repo/contracts/products';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsNumber, IsPositive, IsString, ValidateNested } from "class-validator"
import { IsNull } from 'typeorm';


export class MainPopularUseDto implements IMainPopularUse{
    culinary: boolean;
    aromatic: boolean;
    medicinal: boolean;
}

export class CreateProductDto implements IProduct {
    @IsString()
    commonName: string;
    
    @IsString()
    scientificName: string;

    @IsString()
    genus: string;

    @IsString()
    family: string;

    @IsString()
    growthForm: string;

    @IsString()
    origin: string;

    @IsString()
    provenance: string;
    
    @IsString()
    collector: string;

    @IsString()
    threatCategory: string;
    
    @IsBoolean()
    isEndemic: boolean;
    
    @IsNumber()
    @IsPositive()
    @IsInt()
    population: number;
    registrationDate: Date;
    deathDate: Date;
    
    @ValidateNested()
    @Type(() => MainPopularUseDto)
    mainPopularUse: MainPopularUseDto;
}
