import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Body from './components/Body';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import Navbar from './components/Navbar';
import ItemDetail from "./components/ItemDetail"


function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
            <Route path="/ItemListContainer/:id" element={<ItemDetail/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App