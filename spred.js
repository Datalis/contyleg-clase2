// const array = [..."Hola"];

// const array2 = [1, 2, 3, 4];
// let array3 = array2;
// console.log(array2 === array3);

// array3 = [...array2];
// console.log(array2 === array3);

// console.log(array3);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const arrayUnion = [...array1, 0, ...array2];
// console.log(arrayUnion);


// const usuario = {
//     nombre: "Carlos",
//     apellido: "Perez",
//     edad: 35,
//     ciudad: "Bogota"
// }

// const {edad, ...user} = {...usuario};
// console.log(user);

function foo(nombre, segundo, ...params){
    console.log(params)
}

foo(1, 2, 3, 4, 5, 6, 7);