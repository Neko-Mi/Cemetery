import { Cemetery } from "./cemetery";

export class Sector {
    id: number;
    sectorName: string;
    createdDate: Date;
    changeDate: Date;
    cemetery: Cemetery;

    // cemetery: string;
    // sectors: number;
    // places: number;
    // burials: number;
    // unidentifiable: number;
    // area: number;

    imgs: string[];
}