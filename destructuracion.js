const usuario = {
    nombre:"Julia",
    apellido:"macias",
    edad:"20",
    ciudad:"guayaquil"
}

function printName(){
    return {
        nombre:"Julia",
        apellido:"macias",
        edad:"20",
        ciudad:"guayaquil"
    }
}

const  {nombre} = printName();
console.log(nombre);

function printFullName ({nombre,apellido}){
    console.log(nombre,apellido);
}
printFullName(usuario);
const {nombre:name} = usuario;
console.log(name);