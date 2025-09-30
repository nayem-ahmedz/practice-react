import { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import MarksChart from './components/MarksChart';
import axios from 'axios';

// const pricingPromise = fetch('/pricing.json').then(res => res.json());
const pricingPromise = axios.get('/pricing.json');

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Pricing pricingPromise={pricingPromise} />
        </Suspense>
        {/* <MarksChart /> */}
      </main>
    </>
  )
}

export default App;