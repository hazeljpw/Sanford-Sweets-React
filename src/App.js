import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import AllergenStmt from './components/AllergenStmt'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import OrderNow from './pages/OrderNow';
import ContactUs from './pages/ContactUs.';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='order' element={<OrderNow />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
      </Routes>
      <AllergenStmt />
      <Footer /> 
    </div>
  )
}
