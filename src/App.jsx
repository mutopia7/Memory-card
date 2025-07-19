import { useState, useEffect, useRef } from 'react'
import './App.css'
import Card from './components/Card.jsx'


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
  const [cards, setCards] = useState([]);
  const [clickedMap, setClickedMap] = useState({});
  const cardsRef = useRef([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  // fetch from API
  useEffect(() => {
  async function fetchCharacters() {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character?page=1');
      const data = await res.json();
      cardsRef.current = data.results.slice(0, 12);
      setCards(shuffleArray(cardsRef.current));
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    }
  }
  fetchCharacters();
}, []);




  function handleCardClick(cardId) {
    if (clickedMap[cardId]) {
      alert('You already clicked this card! Score reset.');
      setClickedMap({});
      if (score > bestScore) { setBestScore(score) }
      setScore(0);
      setCards(() => shuffleArray(cardsRef.current))
    } else {
      setClickedMap(prev => ({ ...prev, [cardId]: true }));
      setScore(prev => prev + 1);
      setCards(shuffleArray(cardsRef.current))
    }
  }

  return (
    <div>
      <div className='explain'>
        <div className='header'>
          <h1>Rick and Morty Memory Game</h1>
          <div className='scoreShow'>
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
          </div>
        </div>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
      </div>
      <div className='board'>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            onClick={() => handleCardClick(card.id)} />
        ))}
      </div>

    </div>

  )
}

export default App
