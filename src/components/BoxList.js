import React from 'react'
import { Box } from './Box'
import './BoxList.css'
import { useState } from 'react';


export const BoxList = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerx, setPlayerx] = useState(true);

    let winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    //console.log(winner[0][2])
  const handleBoard = (boxIdx)=>{

    const updatedBoard = board.map((value, idx)=>{
          
      if(idx === boxIdx){
          return playerx ? 'x' : 'o'
      }else{
        return value;
      }
       
      })
      setBoard(updatedBoard)
      setPlayerx(!playerx)
      isWinner(updatedBoard)

  }

      const isWinner = (board) =>{
        for(let i =0; i<winner.length; i++){
          const[x,y,z] = winner[i];
          if(board[x] && board[x] === board[y] && board[x] === board[z]){
            console.log(board[x])
            return board[x];
            break;
          }
        }
      }

  return (
    <div className='board'>
       {board.map((value, idx)=>{
        return <Box value = {value} onClick = {()=> value === null && handleBoard(idx)}/>
       })}
    </div>
  )
}