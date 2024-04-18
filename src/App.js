
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import Shop from './Pages/Shop';
import ShopCate from './Pages/ShopCate';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCate cate = "men"/>}/>
      <Route path='/womens' element={<ShopCate cate = "women"/>}/>
      <Route path='/kids' element={<ShopCate cate = "kid"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:id' element={<Product/> }/>
      <Route path='/cart' element={<Cart/> }/>
      <Route path='/login' element={<LoginSignUp/> }/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
