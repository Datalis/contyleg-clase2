const axios = require('axios');

//Promesas

// const promise = axios.post('https://viatics.xoait.com/validate-physical-invoice', {
//     "emissionDate": "2022-08-02",
//     "printingAuth": "1130292611",
//     "ruc": "1801193531001",
//     "externDocTypeId": "01",
//     "docNum": "001-001-000012501"
// })

// promise.then( res =>{
//     console.log(res.data)
// }).catch( e => {
//     console.log(e)
// })

//Funcion Aync await
async function test(){
    try {
        const data = await axios.post('https://viatics.xoait.com/validate-physical-invoice', {
            "emissionDate": "2022-08-02",
            "printingAuth": "1130292611",
            "ruc": "1801193531001",
            "externDocTypeId": "01",
            "docNum": "001-001-000012501"
        })
        console.log(data)
    } catch (error) {
        console.log("Se produjo un error en la consulta: ", error)
    }
    
}


test();

console.log("Ejecutando...")


