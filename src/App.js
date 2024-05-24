import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PromoBar from './components/PromoBar';
import DiscountedProducts from './components/DiscountedProducts';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CookieConsentModal from './components/CookieConsentModal';
import { CartProvider } from './components/CartContext'; 
import { SearchProvider } from './components/SearchContext'; // import the SearchProvider

function App() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    // Save the user's preferences
    setModalOpen(false);
  };

  const handleAcceptAll = () => {
    // Accept all cookies
    setModalOpen(false);
  };

  const handleRejectAll = () => {
    // Reject all cookies
    setModalOpen(false);
  };

  return (
    <CartProvider> {/* Wrap your application in the CartProvider */}
      <SearchProvider> {/* Also wrap your application in the SearchProvider */}
        <div>
          <Router>
            <PromoBar />
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/discounted-products" element={<DiscountedProducts />} />
            </Routes>
            {isModalOpen && (
              <CookieConsentModal
                onClose={handleClose}
                onSave={handleSave}
                onAcceptAll={handleAcceptAll}
                onRejectAll={handleRejectAll}
              />
            )}
          </Router>
        </div>
      </SearchProvider>
    </CartProvider>
  );
}


export default App;