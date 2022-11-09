const usuario = {
    nombre: "Carlos",
    apellido: "Perez",
    edad: 35,
    ciudad: "Bogota"
}

//  const nombre = usuario.nombre;
//  const edad = usuario['edad'];

// const {nombre, edad, ciudad, identificacion} = usuario;

// console.log(nombre, edad, ciudad, identificacion);

// function printName(){
//     return {nombre: "Juan", apellido: "Espinoza"}
// }

// const {nombre, edad, apellido, identificacion} = printName();

// console.log(nombre, edad, apellido, identificacion);

// function returnArray(){
//     return ["Lord", "Voldemort", "Harry", "Severus", "Ron"];
// }

// const [uno, dos, ...tres] = returnArray();
// console.log(uno, dos, tres);

// function printFullName({nombre, apellido}){
//     console.log(nombre, apellido);
// }

// printFullName(usuario);

const {nombre: name, apellido: lastname} = usuario
console.log(name, lastname)