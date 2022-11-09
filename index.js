console.log("buenas tardes");

var name = 7;
var name = 8;  //no debe hacerse. declarar dos veces la misma variable.
//COn var se crean de manera globar
console.log(name);

var lastName;  //si no lo declara, pone undefined
console.log(lastName);

var last = undefined;  //si se pone undefined se guarda vacio
console.log(last);

if(last){
    console.log("soy undefined"); //no presenta, no se cumple
}

let name2 = 7;
//let name2 = 5;//aqui da error. No deja crear la variable otra vez 

let name3 = 7;
{
let name3 = 5;
}

//const
const name4 = "Antonio";
//const name4 = "Enrique";//no permite si pone la misma variable

//name4 = "Enrique";  //no se puede reasignar un valor a la constante

const usuario = {
     nombre: "Antonio",
     apellido: "Villegas"
}

usuario.nombre = "Enrique";

console.log(usuario.nombre);

//-------------------
const grupo = new Set();//Map, Set son iteradores

const letras = ["a","a","b","c","d"]

for (const elem of letras){ //es recomendable usar el const enves del let. Para ahorrar
   console.log(elem);
   grupo.add(elem);
}
console.log(grupo);//Presenta no los repetidos para valores primitivos
              ///cuando son arreglos aunque sus elementos son iguales, los añade

//---------------------------
