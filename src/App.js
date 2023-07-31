import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSlide from './features/IntroSlide';
import AllergenStmt from './features/AllergenStmt';
import IntroCards from './features/IntroCards';
import HomePage from './pages/HomaPage';
import AboutUs from './pages/AboutUs';
import OrderNow from './pages/OrderNow';
import ContactUs from './pages/ContactUs.';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='ordernow' element={<OrderNow />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
      </Routes>
      <IntroSlide />
      <IntroCards />
      <AllergenStmt />
      <Footer /> 
    </div>
  )
}
