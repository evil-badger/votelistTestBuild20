import React, { useState } from 'react';
import SmilesBestResult from './SmilesBestResult';

const BestResultButton = ({ counts }) => {
  const [showBestResult, setShowBestResult] = useState(false);
  const [bestResult, setBestResult] = useState(0);

  const handleShowBestResult = () => {
    setShowBestResult(true);
    const maxResult = Math.max(...counts);
    setBestResult(maxResult);
  };

  return (
    <>
      <button onClick={handleShowBestResult}>Показать лучший результат</button>
      {showBestResult && <SmilesBestResult bestResult={`Лучший результат: ${bestResult}`} />}
    </>
  );
};

export default BestResultButton;