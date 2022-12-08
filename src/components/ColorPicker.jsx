import { useState, useEffect, useCallback } from 'react';

function ColorPicker() {
  const generateColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const [colors, setColors] = useState([]);

  const [pickedNumber, setPickedNumber] = useState(generateNumber());

  const [msg, setMsg] = useState('');

  const startGame = useCallback(() => {
    setColors([generateColor(), generateColor(), generateColor()]);
    setPickedNumber(generateNumber());
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const displayMsg = (res) => {
    setMsg(res);
    setTimeout(() => setMsg(''), 1500);
  };

  const handleClick = (color) => {
    if (color !== colors[pickedNumber]) {
      displayMsg('Wrong');
    } else {
      displayMsg('Correct');
      startGame();
    }
  };

  return (
    <div className='flex-col'>
      <div
        className='mb-3 h-60 w-60 mx-auto'
        style={{ backgroundColor: `${colors[0]}` }}
      ></div>
      <div className='flex gap-3'>
        <button onClick={() => handleClick(colors[0])} className='btn'>
          {colors[0]}
        </button>
        <button onClick={() => handleClick(colors[1])} className='btn'>
          {colors[1]}
        </button>
        <button onClick={() => handleClick(colors[2])} className='btn'>
          {colors[2]}
        </button>
      </div>
      <h1 className='text-4xl text-center'>{msg}</h1>
    </div>
  );
}

export default ColorPicker;
