import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSlide from './features/IntroSlide';
import AllergenStmt from './features/AllergenStmt';
import IntroCards from './features/IntroCards';

export default function App() {
  return (
    <div className="App">
      <Header />
      <IntroSlide />
      <IntroCards />
      <AllergenStmt />
      <Footer /> 
    </div>
  )
}
