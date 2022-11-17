import logo from './logo.svg';
import './App.css';
import ListItem  from './components/ListItem';
import PresentaGasto from './components/PresentaGasto';
import InputBusqueda from './components/InputBusqueda';
import {useState} from 'react';

function App() {

  let expenses = [
      {numDoc: '001-100-001', proveedor:'Atimasa', valor:50 },
      {numDoc: '001-100-002', proveedor:'Swissoil', valor:30 },
      {numDoc: '001-100-003', proveedor:'Brodi', valor:100 },
   //   {numDoc: '001-100-004', proveedor:'Valero', valor:80 },
     // {numDoc: '001-100-005', proveedor:'Zaimella', valor:70 }
    
  ]

  //let inputData ="";



//let arrayFilter = [...expenses];
//this.setStated({expenses})
const [gastosPresenta, setGastosPresenta] = useState(expenses)
const [texto, setTexto] = useState('')


function retornaElemento(){
  return  gastosPresenta.map(  (ele, idx) => (
    //expenses.map(  (ele, idx) => (
      <ListItem numDoc={ele.numDoc} proveedor={ele.proveedor} indice={idx} >
        </ListItem>
            

          ))


}

function recibeTexto(texto){
    //console.log(texto);

    //console.log( expenses.filter(dato => dato.numDoc.includes(texto)))  Comente al final

   
    //expenses = arrayFilter.filter(dato => dato.numDoc.includes(texto))

   // setGastosPresenta(expenses.filter(dato => dato.numDoc.includes(texto)))

 //  console.log( gastosPresenta.filter(dato => dato.numDoc.includes(texto)))
   setGastosPresenta(gastosPresenta.filter(dato => dato.numDoc.includes(texto)))

    setTexto(texto)
}




  return (
    <div className="App">
      <header className="App-header">
        <p>{texto}</p>
        <InputBusqueda recibeTexto={recibeTexto}></InputBusqueda>
        <PresentaGasto nGasto={gastosPresenta.length}></PresentaGasto>
        <ul>
          {retornaElemento()}

        
        </ul>
      </header>
    </div>
  );
}

export default App;
