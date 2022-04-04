import { stringify } from "querystring";

export interface ICar {
    make: string;
    model: string;
    year: string;
    imageURL: string;
}

export class Car {
    make: string;
    model: string;
    year: string;
    imageURL: string;
    
    constructor(make:string,model:string,year:string,imageURL:string){
        
    }
}