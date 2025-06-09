import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS, WINNER_COMBOS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'

function App() {

  console.log('render')
  // const [board, setBoard] = useState(Array(9).fill(null)) 
  const [board, setBoard] = useState(() => {
    console.log('initializar estado del board')
    const boardFromStorage = window.localStorage.getItem('board')
    console.log(boardFromStorage)
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  // const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    const data = turnFromStorage ?? TURNS.X
    console.log(data)
    return data
  })

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c] 
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null)) 
    setTurn(TURNS.X)
    setWinner(null)

    // remove localStorage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  } 

  const checkEndGame= (newBoard) => {
    return newBoard.every(square => square != null) 
  }
  const updateBoard = (index) => {

    // valida si ya tiene algo esa posicion
    if(board[index] || winner) return

    // Actualizat Board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    // Cambair Turno
    const newTurn =  turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // GuardarPartida
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', newTurn)

    // verifica si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
      // setWinner((prevState) => {
      //   return newWinner
      // })
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
  }, [winner])
  // Array vacio solo entra una vez
  // si no se coloca nada, se ejecuta cada render

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      
      <Board 
        board={board}
        updateBoard={updateBoard} 
      />

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
