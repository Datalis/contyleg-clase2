// const arra1 = [1, [2, 3]];
// const arra2 = [4,5,6];
// const elem = '5';
// const arrayUnion = [...arra1];
// arrayUnion[1][0] = 4;


// console.log(arrayUnion);
// console.log(arra1);


const usuario = {
    nombre: "Rosa",
    apellido: "Ocana",
    edad: [27, 28],
    ciudad: 'Habana'
}

// const user2 = { ...usuario }

// console.log(user2);

// const {edad, nombre, ...userCloneSinEdad} = usuario;

// const [num1, , ...restoDelArray] = [1,2,3,4];
// console.log(restoDelArray);

function foo(nombre, segundo, ...params) {
    console.log(params);
}

foo(1,2,3,4,5);