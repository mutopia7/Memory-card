import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

const initialCards = [{
  id: crypto.randomUUID(),
  value: 1,
  content: 'number 1'
},
{
  id: crypto.randomUUID(),
  value: 2,
  content: 'number 2'
},
{
  id: crypto.randomUUID(),
  value: 3,
  content: 'number 3'
},
{
  id: crypto.randomUUID(),
  value: 4,
  content: 'number 4'
},
{
  id: crypto.randomUUID(),
  value: 5,
  content: 'number 5'
},
{
  id: crypto.randomUUID(),
  value: 6,
  content: 'number 6'
},
{
  id: crypto.randomUUID(),
  value: 7,
  content: 'number 7'
},
{
  id: crypto.randomUUID(),
  value: 8,
  content: 'number 8'
},
{
  id: crypto.randomUUID(),
  value: 9,
  content: 'number 9'
},
{
  id: crypto.randomUUID(),
  value: 10,
  content: 'number 10'
},
{
  id: crypto.randomUUID(),
  value: 11,
  content: 'number 11'
},
{
  id: crypto.randomUUID(),
  value: 12,
  content: 'number 12'
}
];

// for random show
function shuffleArray(array) {
  const shuffled = [...array]; // تغییر روی کپی نه اصل داده
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [cards, setCards] = useState(() => shuffleArray(initialCards));
  const [clickedMap, setClickedMap] = useState({});
  const [score, setScore] = useState(0)

  function handleCardClick(cardId){
    if (clickedMap[cardId]) {
      alert ('You already clicked this card! Score reset.');
      setClickedMap({});
      setScore(0);
      // setCards(() => shuffleArray(initialCards))
    } else {
      setClickedMap({...clickedMap, [cardId]: true});
      setScore(score + 1);
      setCards(shuffleArray(initialCards))
    }
  }

  return (
    <div className='board'>
      {cards.map((card) => (
      <Card
      key={card.id} 
      value={card.value} 
      content={card.content} 
      onClick={() => handleCardClick(card.id)} />
      ))}
      <p>score is {score}</p>
    </div>

  )
}

export default App
