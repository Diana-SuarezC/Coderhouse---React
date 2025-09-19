import { Link, Outlet } from "react-router-dom"
import Cartwidget from './Cartwidget';

function Navbar() {
  return (
    <nav>    
      <ul className="navbar">   
        <li></li>
            <Link className="menu" to={"/"}>Inicio</Link>
        <li></li>
            <Link className="menu" to={"/ItemListContainer"}>Nuestros Productos</Link>
        
        <h2 className="mi-tienda">NutriMarket</h2>
      </ul>
      <Cartwidget/> 
      <Outlet/>
      
    </nav>   
  )
}

export default Navbar