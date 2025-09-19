import { Link } from "react-router-dom"



function ItemDetailContainer({id, nombre, descripcion, precio}) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>{precio}</p>
      <h4>{descripcion}</h4>  
      <Link className="ver" to={`/ItemListContainer/${id}`}>Ver mas</Link>
    </div>
   
  
  )
}

export default ItemDetailContainer