import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import { Route, Routes } from 'react-router-dom';
import OrderPage from './order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/order/:prenom' element={<OrderPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App;
