function PresentaGasto({nGasto}){

   if(nGasto > 1) {
       return <MuchoGasto gasto={nGasto} />
   }else{
       return <UnGasto gasto={nGasto} />
   }
 
}

function MuchoGasto(props){
  return <p>usted tiene {props.gasto}    Gastos</p>
}

function UnGasto(props){
    return <p>usted tiene {props.gasto}    Gasto</p>
  }


export default PresentaGasto