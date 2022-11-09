console.log("hola mundo");

let name = 8;
if(name)
    console.log(name);

const myvar = "Maria";
const grupo = new Set ();
const arreglo = [1,1,1,1,2];

for(const elem of arreglo){
    //console.log(elem);
    grupo.add(elem);   
}

for(const elem of grupo){
    console.log(elem);
     
}