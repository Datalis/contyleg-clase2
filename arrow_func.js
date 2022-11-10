// function foo(param1, param2) {
//     console.log(param1, param2);
// }

// const foo = (param1, param2) => { console.log(param1, param2)};

// const sum = (num1, num2) => {
//     return num1 + num2;
// }

function foo(param1, param2) {
    console.log(arguments);
}

foo(1,2);

// const sum  = (n1, n2) => n1 + n2;
// const foo = () => console.log("Foo");
// const esPar = n => n % 2 === 0;

// console.log(esPar(5));


// console.log(sum(1, 2));

const empresa = "COntyleg"

const datos = [
    {nombre: 'Rosa', _id: 1},
    {nombre: "jose", _id: 2}
]

const ids = datos.map(elem => ({...elem, nombre: elem._id % 2=== 0 ? `${elem.nombre}-par`:`${elem.nombre}-impar`}) );
console.log(ids)
