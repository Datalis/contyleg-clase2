function InputBusqueda(props){
 // return <input type="text" onChange={(e) => {console.log(e.target.value)  }   } />
  return <input type="text" onChange={(e) => { props.recibeTexto(e.target.value)  }   } />


  


} export default InputBusqueda