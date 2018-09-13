import { Place } from "./place";

export class Burial {
    id?: number;
    fullName?: string;

    //cemetery?: string;
    //sector?: number;
    //place?: number;
    //row?: number;

    //area?: number;
    imgs?: string[];
    status?: string;
    burialType: string;
    
    deathDate?: Date;
    birthDate?: Date;
    burialDate?: Date; 

    deathcertificate?: string;
    registrationAddress?: string;
    dateOfReference?: Date;
    archivednumber?: number;

    relativeFullName?: string;
    address?: string;
    contacts?: string;

    graveDepth?: number;
    funeralurn?: string;
    //datacr?: string;
    soilType?: string;
    place: Place;
}