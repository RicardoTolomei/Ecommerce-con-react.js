
import './App.css';
import Home from './Componets/Home/Home';
import CarContent from './Componets/CarContent/CarContent'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DataProvider from './Componets/Context/DataContex';



function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<CarContent/>}></Route>



    </Routes>
    </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
