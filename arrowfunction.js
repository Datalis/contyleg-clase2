function foo(param1,param2){
 console.log(param1)
}

const sum = (param1,param2) => { return param1+param2}
//sum(1,2);
console.log(sum(1,2));

const sum2 = (param1,param2) =>  param1+param2;
//sum(1,2);
console.log(sum2(2,2));

const datos =[ {nombre:"rosa",_id: 1},
                {nombre:"julia",_id: 2}]

//const rosa = datos.map(elemen => )