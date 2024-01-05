import React from 'react'
import { Score } from './ScoreBoard'
import './Summary.css'

export default function Summary({score}) {
    let {oScore, xScore, draw} = score

  return (
    
    <div >
        <h2>Game Summary</h2>
        <div className='summary'>
        <span>O - {oScore}</span>
        <span>X - {xScore}</span>
        <span>Draw - {draw}</span>
        <span>Total - {draw + xScore + oScore}</span>
        </div>
        
        
        </div>
  )
}
