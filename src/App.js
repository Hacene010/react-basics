import Dish from './components/Dish';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dish
        title='Couscous'
        image='https://thumbs.dreamstime.com/b/west-african-food-assortment-west-african-food-concept-traditional-wset-african-dishes-assortment-peanut-soup-jollof-rice-grilled-136692172.jpg'
      />
      <Dish
        title='Riz au curry'
        image='https://assets.afcdn.com/recipe/20200831/113634_origin.jpg'
      />
    </div>
  );
}

export default App;
