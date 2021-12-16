import './App.css';
import Navbar from './Components/layout/Navbar';
import Checkout from './Components/Checkout/Checkout';
import { Fragment } from 'react';
import { Footer } from './Components/Checkout/Footer';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Checkout />
      <Footer />
    </Fragment>
  );
}

export default App;
