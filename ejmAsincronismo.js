
const axios = require('axios');

async function pedidoDoc(){
    try {

        const responseDcto = await axios.post('https://viatics.xoait.com/validate-physical-invoice', {
                                                "emissionDate": "2022-08-02",
                                                "printingAuth": "1130292611",
                                                // "ruc": "1801193531001",
                                                "externDocTypeId": "01",
                                                "docNum": "001-001-000012501"
                                            })
        if(!responseDcto.ok){
            throw new Error('Http error: ${responseDcto.status}');
        }

         //console.log(responseDcto);
         console.log(responseDcto.data); 
         console.log('Received response: ${responseDcto.status}');
                                                                                


    }catch(error){
        console.log('Error al obtener Documento: ${error}');   //Esta toma los errores que estan arriba y la general
    }
}

pedidoDocDoc();


      