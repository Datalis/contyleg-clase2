const axios = require('axios');

const promise = axios.post('https://viatics.xoait.com/validate-physical-invoice', {
    "emissionDate": "2022-08-02",
    "printingAuth": "1130292611",
    "ruc": "1801193531001",
    "externDocTypeId": "01",
    "docNum": "001-001-000012501"
});

promise.then(resp =>{
    console.log(resp.data);
}).catch(e=>{
    console.error(e);
})
// la respuesta imprimir asyn await

