import { Sector } from "./sector";

export class Place {
    id: number;
    row: number;
    number: number;
    // address: string;
    // cemetery: string;
    // sector: number;
    // places: number;
    // burials: number;
    // unidentifiable: number;
    // area: number;
    status: string;
    placeType: string;
    soilType: string;
    // type_priming: string;
    // certificate: string;
    width: number;
    height: number;
    imgs: string[];

    createdDate: Date;
    changedDate: Date;

    //
    sectorId: number;
    cemeteryId: number;
}