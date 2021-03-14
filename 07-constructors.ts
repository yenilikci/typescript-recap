interface Point{
    x:number;
    y:number;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    
    color: string;

    constructor(location?: Point, color?:string){
        this.currentLocation= location;
        this.color = color;
    }

    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1 : Taxi = new Taxi({x:2,y:5},'red');
console.log(taxi_1.currentLocation.x);  
//taxi_1.color = 'red';

let taxi_2 = new Taxi({x:10,y:20});

let taxi_3 = new Taxi();