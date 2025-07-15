import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar'; 
import { Home } from './Pages/Home';               
import { Product } from './Pages/Product';                 
import Login  from './Pages/Login';  
import Register  from './Pages/Register';
import { Shop } from './Pages/Shop'; 
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import { ShopCategory } from './Pages/ShopCategory';
import { CartItems } from './Components/CartItems/CartItems';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';


function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === '/login';
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<CartItems />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;