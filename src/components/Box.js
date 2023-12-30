import React from 'react'
import './Box.css'
export const Box = ({ value, onClick, reset }) => {

  const style = value === 'x' ? 'box x' : 'box o';

  return (
    <>
      <div>
        <button className={style} onClick={onClick}>{value} </button>

      </div>
      


    </>
  )
}

