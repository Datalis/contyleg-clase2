function ListItem({numDoc, proveedor, indice}){
    let variable =   `${numDoc} - ${proveedor}`


    return (
            <li key={indice}>
                {variable}
            </li>
         
            )


}
export default ListItem;


