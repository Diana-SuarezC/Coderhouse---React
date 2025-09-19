import listaProductos from "../productos";
import ItemDetailContainer from "./ItemDetailContainer";
import "./styles.css"



function ItemListContainer() {
  return (
       <div id="container">
        {listaProductos.map(prod=>(
            <ItemDetailContainer key={prod.id} {...prod} /> 
        ))}
    </div>
   
  )
}

export default ItemListContainer