import { Suspense } from 'react';
import './App.css';
import Phones from './comp/Phones';

async function fetchPhones(){
  const res = await fetch('/phones.json');
  return res.json();
}

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading Phones...</h3>}>
        <Phones fetchPhones={fetchPhones()} />
      </Suspense>
    </>
  )
}

export default App;