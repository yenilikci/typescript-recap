import {Point} from './Point';
import {Vehicle} from './Vehicle';
export class Taxi implements Vehicle{
    
    //private color: string;
    //private currentLocation: Point;

    /*
    constructor(location?: Point,color?:string){
        this.currentLocation= location;
        this.color = color;
    }
    */

    constructor(private _location?: Point,private color?:string){
    }

    travelTo(point: Point): void{
        console.log(`taksi x: ${this._location.x} y: ${this._location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if(value.x < 0 || value.y < 0){
            throw new Error('Koordinat bilgileri negatif olamaz!');
        }
        this._location = value;
    }
}
