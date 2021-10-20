import Dish from './components/Dish';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import rawData from './rawData';
import Criteria from './components/Criteria';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='gallery'>
        <main className='gallery'>
          {rawData.map((dish) => {
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
