function foo(param1, param2){
    console.log(arguments);
}

const foo2 = (param1, param2) => { console.log(param1, param2) };

// const sum = (num1, num2) => { return num1 + num2; }
const sum = (num1, num2) => num1 + num2;

console.log(sum(5, 9));


const foo3 = () => console.log("test foo3");
foo3();

const espar = n => n % 2 === 0;
console.log(espar(5));

foo(1,2,3,4,5);


const datos = [
    {nombre: "Carlos", _id: 1},
    {nombre: "Pedro", _id: 2}
]

const carlos = datos.find( ({nombre}) => nombre === "Carlos")
console.log(carlos)

const datos2 = datos.map( elem => elem._id);
console.log(datos2)


const datos3 = datos.map( elem => ({...elem, nombre: espar(elem._id)?`${elem.nombre} PAR`:`${elem.nombre} IMPAR`}));
console.log(datos3)
console.log(datos)

