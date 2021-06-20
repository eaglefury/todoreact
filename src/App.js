import './App.css';
import { Card } from './components/card.jsx';

function App() {
  return (
    <div className='App'>
      <container className='todo'>
        <div>
          <Card cardText='test' color='red'></Card>
        </div>
      </container>
      <container className='in-progress'></container>
    </div>
  );
}

export default App;
