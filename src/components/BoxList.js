import React from 'react'
import { Box } from './Box'
import './BoxList.css'
import { useState } from 'react';


export const BoxList = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerx, setPlayerx] = useState(true);
    let winner = [
        [0,1,2],
        [3,4,5]

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
  }

  return (
    <div className='board'>
       {board.map((value, idx)=>{
        return <Box value = {value} onClick = {()=>handleBoard(idx)}/>
       })}
    </div>
  )
}