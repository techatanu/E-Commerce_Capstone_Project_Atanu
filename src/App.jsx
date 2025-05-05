import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Products from './Products';

// import Cart from './Cart';
// import ErrorPage from './ErrorPage';
import LoginSignup from './Component/LoginSignup/LoginSignup';


const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Contact" element={<Contact />} />
    //     <Route path="/Products" element={<Products />} />

    //     <Route path="/Cart" element={<Cart />} />
    //     <Route path="/Login" element={<LoginSignup />} />
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </Router>
    <div>
      <LoginSignup />
    </div>
  );
};




export default App;