import './App.css';
import "./components/SmileStyles.scss";

import { useState } from 'react';
import SmilesItem from './components/SmilesItem';
import BestResultButton from './components/BestResultButton';

function App() {
  const initialState = [0, 0, 0];
  const [counts, setCounts] = useState(initialState);

  const handleCountChange = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const renderItems = () => {
    return counts.map((count, index) => {
      return (
        <SmilesItem
          key={index}
          title={`Эмоция - ${index}`}
          buttonName={`Проголосовать за эмоцию ${index}`}
          result={`результат счетчика: ${count}`}
          onClick={() => handleCountChange(index)}
        />
      );
    });
  };

  return (
    <>
      <div className='SmilesWrap'>
        <div className='SmilesBlock'>
          {renderItems()}
         
        </div>
        <BestResultButton counts={counts}/>
      </div>
    

    </>
  );
}

export default App;
