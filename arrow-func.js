function foo(nombre, segundo){
    console.log(params);
}

//para convertir una funcion en arrow function
//se crea una variable
//funcion anonima

const name = (param1, param2) => {
   console.log(param1, param2);

}

const sum = (num1, num2) => {
     return num1 + num2;
}
console.log(sum(1,2));


//otra forma de hacer la funcion
const sum2 = (n1,n2) => n1+n2;
const foo2 = () => console.log("foo");
const esPar = n => n %2 === 0;

console.log(esPar(5));

//funciones que tu le pasas (find, sort)
//find le pasas una funcion si cumple una funcion

const datos = [
    {nombre: "rosa", _id:1},
    {nombre: "jose", _id:2}, 
]

const rosa = datos.find(  ({nombre}) => nombre === "Rosa" )
console.log(rosa);

const rosa2 = datos.map(elem => elem._id);
console.log(rosa2);

const ids = datos.map(elem => elem._id % 2 === 0 ? {...elem, nombre: }   );

//template utilizando la comilla `virada

