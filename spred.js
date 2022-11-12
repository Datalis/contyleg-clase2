// const array = [... "hola"];
// const array2 = [1,2,3,4];
// const array3 = array2;

// console.log(array2 === array3);
// const array4 = [...array2];

// array3[0] = 9;
// console.log(array2);

// //----------------------------------
// const arra1 = [1,2,3];
// const arra2 = [4,5,6];
// const elemA = '5';

// const arrayUnion = [...arra1, ...arra2, elemA]; 
// //se copia por partes
// console.log(arrayUnion);
// //se clona primitivo, los objetos complejos se trae la referencia


// const usuario = {nombre: "antonio",
//                  apellido: "villegas",
//                  edad: 40,
//                  ciudad:"guayaquil"
//                   }
        
//  const user = {...usuario};
//  console.log("presenta:",user);

//  const {edad, ... userCloneSinEdad} = usuario;
//  //operador spread...progacion...
//  //si se utiliza significa ponme el resto

// console.log(userCloneSinEdad);

// const [num1, ...restodelArray] = [1,2,3,4];
// console.log("restodelArray: "+restodelArray);

// function foo(nombre, segundo, ...params){
//     console.log(params);
// }

// foo(1,2,3,4,5);
const documento = {_id:"1",
detalle:[
    {
        valor:10,
        concepto :{nombre:"Alimentacion",id:"2",
                    atributos:[{nombre:"X",valor:1},{nombre:"Y",valor:1}]
                }
        
    },
    {
        valor:50,
        concepto :{nombre:"Hospedaje",id:"5",atributos:[]}
        
    }   
]}
const {detalle} = documento;
//console.log(detalle);
const nombres = detalle.map(element => element.concepto.nombre);
//console.log(nombres.join());
const conceptos = detalle.map(element => element.concepto);
//console.log(conceptos)
const ids = detalle.map(element => element.concepto).flatMap(element => element.atributos);
console.log(ids)