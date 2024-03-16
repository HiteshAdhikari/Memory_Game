import MainCard from "./MainCard";
import { useState, useEffect } from "react";

const Cards = (props) => {
  const Data = props.data;
  const updateScore = props.update;
  const shuffle = props.shuffle;
  const updateCount = props.updateCount;
  const count = props.count;
  const score = props.score;

  const [checkData, setcheckData] = useState([]);
  function handleClick(value) {
    shuffle();
    if (checkData.includes(value)) {
      setcheckData([]);
      const increase = confirm(
        "You Lost! Would you like to increase the cards?"
      );
      if (increase) {
        let value = prompt("Cards for next game? (Minimum 10 cards)", 10);
        updateCount(value);
      }
    } else {
      setcheckData((prevData) => [...prevData, value]);
    }
  }
  useEffect(() => {
    updateScore(checkData.length);
    if (checkData.length === count) {
      updateScore(checkData.length);
      setcheckData([]);
      alert("Game Won");
    }
  }, [checkData.length]);

  return (
    <div className="grid grid-cols-5 gap-10 p-4 w-4/5 m-auto">
      {Data.map((items) => {
        return (
          <MainCard
            Click={handleClick}
            image={items.image}
            value={items.code}
            key={items.code}
          />
        );
      })}
    </div>
  );
};
export default Cards;
