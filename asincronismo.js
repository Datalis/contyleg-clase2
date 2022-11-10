const axios = require('axios');

//Promesas

const promise = axios.post('https://viatics.xoait.com/validate-physical-invoice', {
    "emissionDate": "2022-08-02",
    "printingAuth": "1130292611",
    "ruc": "1801193531001",
    "externDocTypeId": "01",
    "docNum": "001-001-000012501"
})

promise.then( res =>{
    console.log(res.data)
}).catch( e => {
    console.log(e)
})

console.log("Ejecutando...")



