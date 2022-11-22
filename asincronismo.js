const axios = require('axios');

const promise = axios.post('https://viatics.xoait.com/validate-physical-invoice', {
    "emissionDate": "2022-08-02",
    "printingAuth": "1130292611",
    "ruc": "1801193531001",
    "externDocTypeId": "01",
    "docNum": "001-001-000012501"
});
 function resolveAfter2Seconds(){
 return promise.then(resp =>{
    //console.log(resp.data);
    return resp.data
}).catch(e=>{
    console.error(e);
})
}


// la respuesta imprimir asyn await
async function asyncCall() {
    console.log('calling');
    try {
        const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('fin');
    } catch (error) {
        console.error(e);
    }
    
    // expected output: "resolved"
  }
  
  asyncCall();
  

