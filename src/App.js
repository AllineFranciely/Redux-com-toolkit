import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './reducers/counterSlice';
import { useState } from 'react';
import cat from './cat.gif';
import api from './services/api';

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const[amount, setAmount] = useState('');

  let save = async value => {
    let payload = {
      data: value,
      database: localStorage.getItem('database'),
    };
    let res = await api.post(payload);
    let data = res.data;
    console.log(data);
  };

  const onSubmit = async values => {
    // console.log(values);
    await save(JSON.stringify(values, null, 2));
  }

  return (
    <div className="App">
      <header classname="header">
        <h1 className="title">Tollkit Exercises Counter</h1>
      </header>
      <p>Quantos exercícios você deseja que o gatinho faça?</p>
      <p>{value}</p>
      <div className="inputs">
        <div className="buttons">
        <button
          type="button"
          className="increment"
          onClick={ () => dispatch(increment()) }
        >
          Increment
        </button>
        <button
          type="button"
          className="decrement"
          onClick={ () => dispatch(decrement()) }
        >
          Decrement
        </button>
      </div>
      <div className="amount">
        <label
        htmlFor='amount-input'>
          Adicione exercícios
          <input
            id='amount-input'
            type="number"
            onChange={  ({target}) => setAmount(target.value) }
            value={ amount }
          />
        </label>
        <button
          type="button"
          onClick={ () => dispatch(incrementByAmount(+amount))}
        >
          Add amount
        </button>
        <button
          type="submit"
          onClick={onSubmit}
        >
          Enviar
        </button>
      </div>
      </div>
      <div className="cat">
        <img
          src={cat}
          alt="cat"
        />
      </div>
    </div>
  );
}

export default App;
