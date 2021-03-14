interface Point{
    x:number;
    y:number;
}

interface Vehicle{
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    
    //private color: string;
    //private currentLocation: Point;

    /*
    constructor(location?: Point,color?:string){
        this.currentLocation= location;
        this.color = color;
    }
    */

    constructor(private location?: Point,private color?:string){
    }

    travelTo(point: Point): void{
        console.log(`taksi x: ${this.location.x} y: ${this.location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1 : Taxi = new Taxi({x:2,y:5});
//console.log(taxi_1.currentLocation.x) //ulaşılamaz;  
//taxi_1.color = 'red'; //ulaşılamaz

taxi_1.travelTo({x:10,y:20});