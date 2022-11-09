const usuario = {nombre: "antonio",
                 apellido: "villegas",
                 edad: 40,
                 ciudad:"guayaquil"
                  }

const nombre = usuario.nombre;
const edad = usuario['edad'];

console.log(nombre, edad);


const{nombre2, edad2} = usuario;

console.log(nombre2, edad2);


const {nombre3, edad3, ciudad3} = usuario; //si se pone la constante un nombre diferente al atributo, da undefined

console.log(nombre3, edad3, ciudad3);


function printName(){
   return {
    nombre5: "antonio",
    apellido: "villegas",
    edad: 40,
    ciudad:"guayaquil"

   }
  
}

const {nombre5} = printName();
   console.log(nombre5);


   //------------------------

   const usuario2 = {nombre: "antonio",
   apellido: "villegas",
   edad: 40,
   ciudad:"guayaquil"
    }

function printFullName(usuario){
   console.log(usuario2.nombre, usuario2.apellido);
   

}

printFullName(usuario2);


///Desestructurar un objeto y tomar un atributo

function printFullName2({nombre, apellido}){
    console.log("nombre2:",nombre, apellido);
    
 }

 printFullName2(usuario2);

 //---------------------
 const name33 = usuario2.nombre;
 //const {nombre: name}

 const {nombre: name,  ciudad: city} = usuario;
 console.log(name, city);
