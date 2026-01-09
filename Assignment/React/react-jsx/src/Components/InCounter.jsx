import React, { useState } from 'react';

const InCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button 
        onClick={increment} 
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'lightgreen', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>
      <button 
        onClick={decrement} 
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'salmon', border: 'none', borderRadius: '5px' }}
      >
        Decrement
      </button>
    </div>
  );
};

export default InCounter;
