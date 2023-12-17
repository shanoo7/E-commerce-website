import './App.css';
import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom'
import { Navbar } from './Componants/Navbar';
import { Cart } from './Pages/Cart'
import { Product } from './Pages/Product';
import { Products } from './Pages/Products';
import { PageNotFound } from './Pages/PageNotFound';

function App() {
  const navigate = useNavigate()
  const onSearch = (showQuery) => {
    navigate(`/?${createSearchParams({ q: showQuery })}`)
  }

  return (
    <>
      <Navbar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export { App };
