let number = 5;
// hata: number = 'a';

let a; //any type
a = 5; //hata yok
a = 'a'; //hata yok
a = true; //hata yok

let b : number;
b = 3; //doğru 
//b = 'b'; //hatalı
//b = false; //hatalı

let c : string; //veya let c : string = 'c';
let d : boolean; //veya let d : boolean = false;
let e : number[] = [1,2,3]; 
//let f : number[] = [1,2,3,'4']; //hatalı 
let g : any;
let h : Array<number> = [1,2,3];
let i : any[] = [1,'a',number];
let j : [string,number,boolean] = ['a',7,true];

const krediOdemesi = 0;
const havaleOdemesi = 1;
const eftOdemesi = 2;


enum Odemeler {kredi,havale,eft};
//veya enum Odemeler {kredi=0,havale=1,eft=2};

let kredi = Odemeler.kredi; //0
let havale = Odemeler.havale; //1
let eft = Odemeler.eft; //2

