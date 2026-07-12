import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/home/homePage'
import Signup from './landing_page/signup/signup'
import PricingPage from './landing_page/pricing/pricingPage'
import SupportPage from './landing_page/support/supportPage'
import AboutPage from './landing_page/about/aboutPage'
import ProductPage from './landing_page/products/productPage'
import Navbar from './landing_page/navbar'
import Footer from './landing_page/footer'
import NotFound from './landing_page/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
