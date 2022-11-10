// console.log('hola');

// let name;

// if (name) {
//     console.log("soy undefined");
// }

// const usuario = {
//     nombre: "Rosa",
//     apellido: "Ocana"
// };

// usuario.nombre = "John"

// console.log(usuario.nombre)


const conjunto = new Set();
const arr = [1, 2, 3, 4, 4];

for (const elem of arr) {
    conjunto.add(elem);
    // console.log(elem);
}

for (const e of conjunto) {
    console.log(e);
}



