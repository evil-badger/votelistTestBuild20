import './App.css';
import "./components/SmileStyles.scss";

import { useState } from 'react';
import SmilesItem from './components/SmilesItem';
import SmilesWinnerButton from './components/SmilesWinnerButton';
import { smilesList } from './smilesList';
import SmilesItemBest from './components/SmilesItemBest';

function App() {

  const [smilesListData, setSmilesList] = useState(smilesList);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleButtonClick(selectedItem) {
    setIsButtonClicked(true);
    setSelectedItem(selectedItem);
  }
  
  const handleUpdateCounter = (id) => {
    const copyList = [...smilesListData];
    copyList.forEach((elem) => {
      if (elem.id === id) {
        elem.vote = (elem.vote) + 1;
      }
    })
    setSmilesList(copyList);
  }


  const getMaxGrade = () => {
    const copyList = [...smilesListData];
    const sortedArray = copyList.sort((a, b) => b.vote - a.vote);
    const sortedObject = sortedArray[0];
    return sortedObject
  }

  const result = getMaxGrade();
  console.log(result);

  return (
    <>
      <div className="flexRow">
        {
          smilesListData.map(
            (item) => {
              return <SmilesItem
                id={item.id}
                key={item.id}
                title={item.title}
                url={item.url}
                vote={item.vote}
                onUpdate={handleUpdateCounter} />
            }
          )
        }

      </div>
      <div>
        <SmilesWinnerButton getMax={getMaxGrade} />
        <SmilesItemBest
          id={result.id}
          key={result.id}
          title={result.title}
          url={result.url}
        />
      </div>


    </>
  );


}

export default App;
