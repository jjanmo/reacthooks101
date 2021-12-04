import { useEffect, useRef, useState } from 'react';
import Ball from './Ball';
import { getColor } from './utils';

function App() {
  const selected = useRef([]);
  const [lotto, setLotto] = useState([]);
  const [bonus, setBonus] = useState([]);

  useEffect(() => {
    while (selected.current.length < 7) {
      const num = Math.floor(Math.random() * 45 + 1);
      if (!selected.current.includes(num)) {
        const obj = {
          num,
          color: getColor(num),
        };
        selected.current = [...selected.current, obj];
      }
    }

    if (selected.current.length === 7) {
      for (let i = 0; i < selected.current.length; i++) {
        const tmp = selected.current.slice(0, i + 1);
        setTimeout(() => {
          if (i < 6) setLotto(tmp);
          else setBonus(selected.current.slice(6));
        }, 700 * i);
      }
    }
  }, []);

  return (
    <div className="App">
      <h1>당첨 숫자</h1>
      <div style={{ display: 'flex' }}>
        {lotto.map((item, index) => (
          <Ball key={index} color={item.color} number={item.num} />
        ))}
      </div>
      <h1>보너스 숫자</h1>
      {bonus.map((item, index) => (
        <Ball key={index} color={item.color} number={item.num} />
      ))}
    </div>
  );
}

export default App;
