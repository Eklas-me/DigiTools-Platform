import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.warning("This product is already in your cart!");
    } else {
      setCart([...cart, product]);
      toast.success("Successfully added to cart!");
    }
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter(item => item.id !== id);
    setCart(remainingCart);
    toast.info("Product removed from cart!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Proceeding to checkout successfully! Your cart is cleared.");
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800 pt-[72px]">
      
      <ToastContainer position="top-right" autoClose={2500} />

      <Navbar cartCount={cart.length} />

      <div className="w-full">
        <Banner />
      </div>

      <Stats />

      <MainSection 
        products={products} 
        cart={cart}
        handleAddToCart={handleAddToCart} 
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />

      <Steps />

      <Pricing />

      <Footer />

    </div>
  );
}

export default App;
