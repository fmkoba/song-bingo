import { useState } from 'react'
import './App.css'
import header from './assets/header@2x.png'
import footer from './assets/footer.png'
import footer2 from './assets/footer@2x.png'

function App() {
  const [list, setlist] = useState([])

  return (
    <>
      <div>
        <Card/>
      </div>
    </>
  )
}

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const shuffle = (array) => { 
  return array.sort(() => Math.random() - 0.5); 
}

const songs = [
  "Easy On Me - Adele",
  "Miley Cyrus - Flowers ",
  "Angel Baby - Troye Sivan",
  "Save Your Tears ",
  "Stuck With U",
  "Mercy - Shawn Mendes",
  "We Don't Talk Anymore",
  "STAY - Justin Bieber",
  "Blinding Lights - The Weeknd",
  "Smooth - Santana",
  "Uptown Funk - Mark Ronson",
  "How Do I Live - LeAnn Rimes",
  "Party Rock Anthem - LMFAO",
  "I Gotta Feeling - The Black Eyed Peas",
  "Macarena - Los Del Rio",
  "Shape of You - Ed Sheeran"
]

function Card() {
  let numbers = range(0,15,1)
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    margin: "1rem",
    padding: "1rem"
  }
  return (
    <div className='card' style={styles}>
      <CardHeader/>
      <CardGrid numbers={shuffle(numbers)}/>
      <CardFooter/>
    </div>
  )
}

function CardHeader() {
  return (
    <div className="card-header">
      <img src={header} alt="90POE Bingo" />
    </div>
  )
}

function CardGrid({numbers}) {

  return (
    <div className='card-grid'>
      {numbers.map(number => <CardNumber number={number} key={number} /> )}
    </div>
  )
}

function CardNumber({number}) {
  const [marked, setMarked] = useState(false)

  const handleClick = () => {
    setMarked(!marked)
  }
  let fullTitle = songs[number]
  const title = fullTitle.split('-')[0] 
  const artist = fullTitle.split('-')[1] || false
  return (
    <div className={`number${ marked ? ' marked': '' }`} onClick={ handleClick }>
      {title && <p className='title'>{title}</p> }
      {artist && <p className='artist'>{artist}</p> }
    </div>
  )
}

function CardFooter() {
  return (
    <div className="card-footer">
      <img src={footer2} alt="Merry Christmas" />
    </div>
    )
}
export default App
