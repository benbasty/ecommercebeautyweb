import './App.css';
import Header from './components/header/header';
import Hero from './components/Hero/hero';
import Slider from './components/Slider/slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
