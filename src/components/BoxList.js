import React from 'react'
import { Box } from './Box'
import './BoxList.css'
import { useState } from 'react';
import { Score } from './ScoreBoard';
import ResetButton from './ResetButton';



export const BoxList = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerx, setPlayerx] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })
  const[gameOver, setGameOver] = useState(false);
  let [counter, setCounter] = useState(0)


  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

  ]

  const handleBoard = (boxIdx) => {

    const updatedBoard = board.map((value, idx) => {
      console.log(counter)
        setCounter(counter+1)
      if (idx === boxIdx) {
        return playerx ? 'x' : 'o'
      } else {
        return value;
      }
      
    })
    setBoard(updatedBoard)
    setPlayerx(!playerx)
    handleDraw(updatedBoard)

     const winning = isWinner(updatedBoard);
   
    if(winning){
      if(winning === 'o'){
        let {oScore} = score;
          oScore+=1;
          setScore({...score, oScore})
      }else{
        let{xScore} = score;
        xScore+=1;
        setScore({...score, xScore})
      }
    }
    console.log('score is: ' + score)
  }
  const isWinner = (board) => {
    for (let i = 0; i < winner.length; i++) {
      const [x, y, z] = winner[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setGameOver(true)
        if (playerx) {

          score[0] = + 1
          console.log(score)
        } else {
          score[1] = +1;
          console.log(score)

        }
        console.log(board[x])
        return board[x];
      }
    }
  }
  const handleReset = () => {
    setGameOver(false)
    setCounter(0)
    return setBoard(Array(9).fill(null))
  }
  const handleDraw =(board) =>{
    let i=0;

    while(board[i]===null){
      console.log("It" + board[i])
      i++ 
    }
   // setHasValue(true)
  }
  const handleResult=()=>{
      
      if(!gameOver && counter===9){
       return  <h1>Draw</h1>
      }else if(gameOver && playerx){
        return <h1>O - Won</h1>
      }else if(gameOver && !playerx){
        return <h1>X - Won</h1>
      }else if(!gameOver){
        return  <h1 className='tran'>yey</h1>
      }
  }

  return (
    <>

       <Score score={score} xPlayer={playerx}/>
       
         
         
          <div className='draw'>  
          {/* {!gameOver && counter===9 &&  <h1 className='draw'>Draw</h1>}
          {gameOver && playerx &&  <h1>O - Won</h1>  }
          {gameOver && !playerx &&  <h1>X - Won</h1>  } */}
           { handleResult()}
          </div>
          
   
      <div className='board'>
        {board.map((value, idx) => {
          return <Box value={value} onClick={() => !gameOver && value === null &&  handleBoard(idx)} />
        })}
      </div>
      <ResetButton handleReset={handleReset}/>
      
    </>
  )
}