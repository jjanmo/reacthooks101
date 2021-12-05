import { useEffect, useRef, useState } from 'react';
import Ball from './Ball';

function App() {
  const clearedIds = useRef([]);
  const [lotto, setLotto] = useState([]);
  const [bonus, setBonus] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [startedToggle, setStartedToggle] = useState(true);

  const getLottoNumbers = () => {
    let selected = [];
    while (selected.length < 7) {
      const number = Math.floor(Math.random() * 45 + 1);
      if (!selected.includes(number)) {
        selected = [...selected, number];
      }
    }

    return selected;
  };

  const renderLottoNumbers = (numbers) => {
    const clearedIds = [];
    setIsShowing(false);
    if (numbers.length === 7) {
      for (let i = 0; i < numbers.length; i++) {
        const tmp = numbers.slice(0, i + 1);
        clearedIds[i] = setTimeout(() => {
          if (i < 6) setLotto(tmp);
          else {
            setBonus(numbers.slice(6));
            setIsShowing(true);
          }
        }, 700 * i);
      }
    }
    return clearedIds;
  };

  useEffect(() => {
    const lottoNumbers = getLottoNumbers();
    clearedIds.current = renderLottoNumbers(lottoNumbers);

    return () => {
      clearedIds.current.forEach((id) => clearTimeout(id));
    };
  }, [startedToggle]);

  const onClickRestart = () => {
    setStartedToggle(!startedToggle);
    setLotto([]);
    setBonus([]);
    clearedIds.current = [];
  };

  return (
    <div className="App">
      <h1>당첨 숫자</h1>
      <div style={{ display: 'flex' }}>
        {lotto.map((number, index) => (
          <Ball key={index} number={number} />
        ))}
      </div>
      <h1>보너스 숫자</h1>
      {bonus.map((number, index) => (
        <Ball key={index} number={number} />
      ))}
      {isShowing && <button onClick={onClickRestart}>다시 하기</button>}
    </div>
  );
}

export default App;
