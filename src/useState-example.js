import React, { useState, useEffect, useContext } from 'react';
import MyContext from './my-context';

export default function UseStateExampe() {
  const [count, setCount] = useState(() => {
    return 2;
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('remve event listener');
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  useEffect(() => {
    console.log('used effects!');
  }, []);

  const value = useContext(MyContext);

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div>Window Width: {width}</div>

      <div>Context Value : {value}</div>
    </div>
  );
}
