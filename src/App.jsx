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
  "Abba - Mamma Mia",
"Maroon 5 - Sugar",
"The Weeknd - Blinding Lights",
"Tones and I - Dance Monkey",
"Gotye - Somebody That I Used To Know",
"Shawn Mendes - Treat You Bette",
"Luis Fonsi - Despacito",
"Mark Ronson - Uptown Funk",
"Ed Sheeran - Shape Of You",
"Avicii - Wake Me Up",
"Pharrell Williams - Happy",
"Adele - Rolling in the Deep",
"Daft Punk - Get Lucky",
"Shakira - Waka Waka",
"PSY - Gangnam Style",
"Crazy Frog - Axel F",
"Taylor Swift - Shake It Of",
"Clean Bandit - Rockabye",
"DJ Snake - Taki Taki",
"Jason Derulo - Swalla",
"Michael Jackson - Billie Jean",
"The Police - Every Breath You Take",
"Los Del Rio - Macarena",
"Britney Spears - Oops!...I Did It Again",
"Mariah Carey - All I Want For Christmas Is You",
"Queen - I Want To Break Free",
"Haddaway - What Is Love",
"Metallica: Sad But True",
"Hotel California - Eagles",
"Kalush Orchestra - Stefania",
"Passenger - Let Her Go",
"The Beatles - Yesterday",
"Van Morrison - Brown Eyed Girl",
"The Shireless - Will U Still Love Me Tomorrow",
"Adele - Hello",
"Eiffel 65 - Blue",
"Fugees - Killing Me Softly With His Song"
]

function Card() {
  let numbers = range(0, 36, 1)
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
      {numbers.slice(0, 16).map(number => <CardNumber number={number} key={number} /> )}
    </div>
  )
}

function CardNumber({number}) {
  const [marked, setMarked] = useState(false)

  const handleClick = () => {
    setMarked(!marked)
  }
  let fullTitle = songs[number]
  const title = fullTitle.split('-')[1] || false
  const artist = fullTitle.split('-')[0] || false
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
