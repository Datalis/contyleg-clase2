// const usuario = {
//     nombre: "Rosa",
//     apellido: "Ocana",
//     edad: 27,
//     ciudad: 'Habana'
// }

// // const nombre = usuario.nombre;
// // const edad = usuario['edad'];

// const {nombre, edad, ciudad} = usuario;

// // 

// console.log(nombre, edad, ciudad);

// function printName () {
//     return  {
//         nombre: "Rosa",
//         apellido: "Ocana",
//         edad: 27,
//         ciudad: 'Habana'
//     };
// }


// const {nombre} = printName()
// console.log(nombre);

const usuario = {
    nombre: "Rosa",
    apellido: "Ocana",
    edad: 27,
    ciudad: 'Habana'
}

// function printFullName ({nombre, apellido}) {
//     if (nombre === "Rosa") {
//         console.log("Profe");
//     }
//     console.log(nombre, apellido)
// }

// printFullName(usuario);

// const name = usuario.nombre;

const {nombre: name, edad, ciudad: city} = usuario;
console.log(name, city, edad);
