import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import CartPage from './pages/cart';
import ProductPage from './pages/product';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;