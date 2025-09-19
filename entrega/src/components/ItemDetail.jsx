import { useParams } from "react-router-dom";
import listaProductos from "../productos";




function ItemDetail() {

    const { id } = useParams();
    const producto = listaProductos.find((prod) => prod.id === parseInt(id));

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

export default ItemDetail