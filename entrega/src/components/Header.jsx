import Navbar from './Navbar';
import Cartwidget from './Cartwidget';
function Header() {
  return (
    <div>
        <Navbar/>
        <Cartwidget/>
        <Outlet />
    </div>
  )
}

export default Header