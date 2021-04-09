import CardContainer from "../../components/CardContainer";
import { VALUES } from './values';

function generateCards() {
  const list = [...VALUES, ...VALUES];
  const sortedList = [];
  VALUES.forEach(() => {
    const firstIndex = Math.floor(Math.random() * list.length);
    sortedList.push(list.splice(firstIndex, 1)[0])
    const secondIndex = Math.floor(Math.random() * list.length);
    sortedList.push(list.splice(secondIndex, 1)[0])

  })
  return sortedList;
}

export default function Game() {
  const cards = generateCards()
  
  return (
    <div className='game-wrapper'>
      <h1>Game wrapper</h1>
      <CardContainer cards={cards} />
    </div>
  );
}
