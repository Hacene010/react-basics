import { useState } from 'react';
import Dish from './components/Dish';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import rawData from './rawData';
import Criteria from './components/Criteria';

function App() {
  const [needle, setNeedle] = useState('');
  return (
    <div className='App'>
      <Header needle={needle} setNeedle={setNeedle} />
      <div className='gallery'>
        <main className='gallery'>
          {rawData
            .filter((dish) => {
              return dish.title.includes(needle);
            })
            .map((dish) => {
              return <Dish {...dish} />;
            })}
        </main>
        <Criteria />
      </div>
      <Footer />
    </div>
  );
}

export default App;
