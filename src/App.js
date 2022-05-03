import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const { value } = useSelector((state) => state.counter);
  return (
    <div className="App">
      {value}
      <button>
        Increment
      </button>
      <button>
        Decrement
      </button>
    </div>
  );
}

export default App;
