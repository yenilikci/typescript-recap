import {Taxi} from './modules/Taxi';    
import {Bus} from './modules/Bus';

let taxi_1 : Taxi = new Taxi({x:2,y:5});
//console.log(taxi_1.currentLocation.x) //ulaşılamaz;  
//taxi_1.color = 'red'; //ulaşılamaz
taxi_1.travelTo({x:10,y:20});
let currentLocation = taxi_1.location;
taxi_1.location = ({x:2,y:5});