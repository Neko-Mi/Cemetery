import { Place } from "./place";

export class Burial {
    // burial info
    id?: number;
    surname?: string;
    name?: string;
    patronymic?: string;
    deathDate?: Date;
    birthDate?: Date;
    burialDate?: Date;
    imgs?: string[];
    changeDate?: Date;
    createDate?: Date;
    funeralurn?: string;
    placeId?: number;

    // other info
    certificateNumber?: string;
    registrationOffice?: string;
    dateOfReference?: Date;
    registrationAddress?: string;
    archivedNumber?: number;
    cremationPlace?: string;
    graveDepth?: number;
    ditcherSurname?: string; // ???????
    soilType?: string;

    // relative info
    relativeFullName?: string;
    address?: string;
    contacts?: string;

    //cemetery?: string;
    //sector?: number;
    //place?: number;
    //row?: number;

    //area?: number;
    // status?: string;
    // burialType: string;



    //datacr?: string;
    // place: Place;
}