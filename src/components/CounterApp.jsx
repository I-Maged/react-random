import { useState } from 'react';

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const btnClick = (type) => {
    if (type === 'dec') {
      setCounter(counter - 1);
    } else if (type === 'inc') {
      setCounter(counter + 1);
    }
  };

  return (
    <div className='flex-col'>
      <h1 className='text-5xl text-center mb-3'>{counter}</h1>
      <div className='flex gap-3'>
        <button onClick={() => btnClick('dec')} className='btn btn-error'>
          Decrement
        </button>
        <button onClick={() => btnClick('inc')} className='btn btn-info'>
          Increment
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
