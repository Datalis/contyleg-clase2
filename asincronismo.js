//promise... convertir un callback en un promise
// await

//inicializar nuestro proyecto como proyecto de node
const axios = require('axios');



//promesas
//get o un set
//conectarme a viatic y validar una factura 
/*
axios.post("http://viatics.xoait.com/validate-physical-invoice",
             {"emissionDate:"",
             "print":"",
             "":"",
             })

*/
    //lo mismo se va a desacoplar el promise
 /*   const promise = axios.post()

    promise.then(res => {
  console.log(res.data)

    }).catch( e => { console.log(e)})
*/



///axios se puede utilizar de pruebas

    const promise = axios.post('https://viatics.xoait.com/validate-physical-invoice', {
    "emissionDate": "2022-08-02",
    "printingAuth": "1130292611",
    // "ruc": "1801193531001",
    "externDocTypeId": "01",
    "docNum": "001-001-000012501"
})

promise.then(res => {
    console.log(res.data)
  
      }).catch( e => { console.log(e)})

      console.log("ejecutando ...");


      //imprimir la respuesta de esta peticion usando asign await
      

      //-------------------------------

      