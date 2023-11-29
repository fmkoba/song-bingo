import { useState } from 'react'
import './App.css'

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
    border: "1px solid red",
    margin: "1rem",
    padding: "1rem"
  }
  return (
    <div className='card' style={styles}>
      <CardHeader/>
      <CardGrid numbers={shuffle(numbers)}/>
    </div>
  )
}

function CardHeader() {
  return (
    <h1>BINGO!</h1>
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
  return (
    <div className='number'>
      {songs[number]}
    </div>
  )
}

export default App
