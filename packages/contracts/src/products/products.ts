import { IMainPopularUse } from "./main-popular-use";

export class IProduct {    
  commonName: string;
  scientificName: string;
  genus: string;
  family: string;
  growthForm: string;
  origin: string;
  provenance: string;
  collector: string;
  threatCategory: string;
  isEndemic: boolean;
  population: number;
  registrationDate: Date;
  deathDate: Date;
  mainPopularUse: IMainPopularUse;
}