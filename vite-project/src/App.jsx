import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
function App() {

  return (
    <div>
        <Header/>
        <Body/>

        <ItemListContainer mensaje="Entrega 1"/>  
        <ItemListContainer mensaje="Diana Suarez"/> 
    </div>
  )
}

export default App