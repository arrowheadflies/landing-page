import { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import HatchHub from './pages/HatchHub';
import HatchDetail from './pages/HatchDetail';
import FlyGuide from './pages/FlyGuide';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-charcoal text-cream font-primary">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow pt-0">
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center bg-charcoal">
                  <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/hatch-guide" element={<HatchHub />} />
                <Route path="/hatch-guide/:category" element={<HatchDetail />} />
                <Route path="/hatch-guide/:category/:stageId" element={<HatchDetail />} />
                <Route path="/the-lab" element={<FlyGuide />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
