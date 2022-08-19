import { useState } from 'react'
import './App.css'

function App() {

  const [dice, setDice] = useState([0])
  const [status, setStatus] = useState('')


  function play() {
    const dice = Math.floor(Math.random() * 2) - 1
    setDice(dice)
    {
      setStatus(`You rolled ${dice}`)
    }
  }

  function RollDice() {
    const dice = Math.floor(Math.random() * 6) + 1
    if(dice === 0) {return false }
    else if(dice === -1){return false}
    else if(dice === 1){setDice(`.`)}
    else if(dice === 2){setDice(`..`)}
    else if(dice === 3){setDice(`...`)}
    else if(dice === 4){setDice(`....`)}
    else if(dice === 5){setDice(`.....`)}
    else if(dice === 6){setDice(`......`)}
    else {setDice(null)}
  
    {
      setStatus(`You rolled ${dice}`)
    }
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>The World of Games</h1>
        </div>
        <div className='main'>
      <h2>{status}</h2>
          <div className='dice'>{dice}</div>
        <button className='roll-dice' onClick={RollDice}>Roll Dice</button>
        </div>
    </div>
  )
}

export default App