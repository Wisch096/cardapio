import { Card } from './components/card/card';
import './App.css'
import { FoodData } from './interface/FoodData';

function App() {
  const data: FoodData[] = [];

  return (
      <div className='container'>
        <h1>Cardápio</h1>
        <div className='card-grid'>
          {data.map(foodData => 
            <Card 
              preco={foodData.preco} 
              image={foodData.image} 
              nome={foodData.nome}
            />
          )}
        </div>
      </div>
  )
}

export default App
