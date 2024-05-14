import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [Data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);

  if (score > bestScore) {
    setbestScore(score);
  }
  const resetBest = () => {
    setScore(0);
    setbestScore(0);
  };
  const scoreUpdate = (scoreValue) => {
    setScore(scoreValue);
  };

  const countUpdate = (value) => {
    setCount(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${count}`
        );
        const jsonData = await response.json();
        setData(jsonData.cards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [count]);

  function shuffleArray(array) {
    // Create a copy of the original array to avoid mutation
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const shuffle = () => {
    const shuffledCard = shuffleArray(Data);
    setData(shuffledCard);
  };

  return (
    <>
      <Header score={score} best={bestScore} />
      {Data && (
        <Cards
          reset={resetBest}
          count={count}
          score={score}
          updateCount={countUpdate}
          shuffle={shuffle}
          update={scoreUpdate}
          data={Data}
        />
      )}
    </>
  );
}

export default App;
