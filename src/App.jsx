import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import Cart from "./pages/Cart/Cart"


function App() {


  return (
    <div className="app">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
