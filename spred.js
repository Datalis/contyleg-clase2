const array =[..."hola"];
const array2 =[1,2,3,4];
const array3 = [...array2];
console.log(array3);

const usuario = {
    nombre:"Julia",
    apellido:"macias",
    edad:"20",
    ciudad:"guayaquil"
}
//clonar el usuario sin edad
const user2 = {...usuario};
console.log(user2);
const {edad,...userclone}=usuario;//los 3 puntos es propagacion y se lo usa como resto al final
console.log(userclone);